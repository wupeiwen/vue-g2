/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-10-15 17:32:25
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-12-06 15:55:13
 * @Type: 进度条
 */
<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'
import DataSet from '@antv/data-set'
import { percentFormat, floatIntFormat } from '@/utils/index'

export default {
  name: 'g2-progress-bar',
  props: {
    // 数据
    data: {
      type: Array,
      default: () => [{
        'name': '中国',
        'value': 0.88
      }, {
        'name': '其他',
        'value': 0.12
      }]
    },
    // DOM ID
    id: String,
    // DOM 高度
    height: {
      type: Number,
      default: 45
    },
    // 图表颜色
    color: {
      type: Array,
      default: function () {
        return ['#1890FF', '#e8e8e8']
      }
    },
    // value 数据是否是百分数（整数和百分数）
    isPercent: {
      type: Boolean,
      default: false
    },
    // 标记线
    markLine: {
      type: Object,
      default: function () {
        return {
          use: false,
          name: '均值',
          value: 0.5,
          lineColor: '#1890FF',
          labelColor: '#000000',
          labelSize: '14'
        }
      }
    },
    // 辅助元素
    guide: {
      type: Object,
      default: function () {
        return {
          showName: true,
          showValue: true,
          labelColor: '#000000',
          labelSize: '14'
        }
      }
    }
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    data: function (val, oldVal) {
      this.drawChart(val)
    }
  },
  methods: {
    drawChart: function (data) {
      // 销毁实例
      if (this.chart) {
        this.chart.destroy()
      }

      // padding top
      let paddingTop = 0
      if (this.guide.showName || this.guide.showValue) {
        this.guide.labelSize = this.guide.labelSize || '14'
        paddingTop = parseInt(this.guide.labelSize) + 5
      }
      if (this.markLine.use) {
        this.markLine.labelSize = this.markLine.labelSize || '14'
        paddingTop = parseInt(this.markLine.labelSize) + 5
      }

      // 新建实例
      this.chart = new G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: [paddingTop, 0, 0, 0]
      })

      let ds = new DataSet()
      let dv = ds.createView().source(data)
      dv.transform({
        type: 'percent',
        field: 'value',
        dimension: 'name',
        as: 'percent'
      })
      // 为 chart 装载数据
      this.chart.source(dv)

      // x，y 轴交换
      this.chart.coord().transpose()

      // 隐藏图表tooltip
      this.chart.tooltip(false)

      // 隐藏图表图例
      this.chart.legend(false)

      // 隐藏图表坐标轴
      this.chart.axis(false)

      // 配置图表
      this.chart.intervalStack().position('1*percent').color('name', this.color)

      if (this.guide.showName) {
        // 配置辅助元素-name
        this.chart.guide().text({
          top: true,
          position: [0, 0],
          content: this.data[0].name,
          style: {
            fill: this.guide.labelColor,
            fontSize: this.guide.labelSize || '14'
          },
          offsetX: 0,
          offsetY: -30
        })
      }

      if (this.guide.showValue) {
        // 辅助元素-value 格式化-整数或百分比
        const value = this.isPercent ? percentFormat(this.data[0].value) : floatIntFormat(this.data[0].value)
        // 辅助元素-value x轴偏移量
        const valueOffsetX = this.isPercent ? this.chart._attrs.width - (String(value).length * Number(this.guide.labelSize)) : this.chart._attrs.width - ((String(value).length - 1) * Number(this.guide.labelSize))
        // 配置辅助元素-value
        this.chart.guide().text({
          top: true,
          position: [0, 0],
          content: value,
          style: {
            fill: this.guide.labelColor,
            fontSize: this.guide.labelSize || '14'
          },
          offsetX: valueOffsetX,
          offsetY: -30
        })
      }

      // 配置标记线 markLine
      if (this.markLine.use) {
        // 根据数值大小动态调整文本的对齐方式
        let percent = this.markLine.value / (this.data[0].value + this.data[1].value)
        let textAlign = (() => {
          if (percent >= 0.7) {
            return 'right'
          } else if (percent <= 0.3) {
            return 'left'
          } else {
            return 'center'
          }
        })()
        this.chart.guide().line({
          start: [0, percent],
          end: [1, percent],
          lineStyle: {
            stroke: this.markLine.lineColor
          },
          text: {
            position: 'end',
            autoRotate: false,
            content: `${this.markLine.name}: ${this.isPercent ? percentFormat(this.markLine.value) : floatIntFormat(this.markLine.value)}`,
            style: {
              textAlign: textAlign,
              fill: this.markLine.labelColor,
              fontSize: String(Number(this.markLine.labelSize) - 2) || '12'
            }
          }
        })
      }

      // 绘制
      this.chart.render()

      // 销毁实例
      this.$once('hook:beforeDestroy', function () {
        this.chart.destroy()
      })
    }
  },
  mounted () {
    this.drawChart(this.data)
  }
}
</script>
