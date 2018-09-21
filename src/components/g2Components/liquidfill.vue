/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-27 14:29:48
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-20 13:55:06
 * @Description: 液体填充
 */

<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'
import { percentFormat, floatIntFormat } from '@/utils/index'

export default {
  props: {
    // 数据
    data: {
      type: Array,
      default: () => {
        return [{ name: '中国', value: 0.3 }]
      }
    },
    // DOM ID
    id: String,
    // DOM 高度
    height: {
      type: Number,
      default: 300
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: () => {
        return {
          name: 'name',
          value: 'value'
        }
      }
    },
    // 最大值
    maxValue: {
      type: Number,
      default: 1
    },
    // value 数据是否是百分数（整数和百分数）
    isPercent: {
      type: Boolean,
      default: true
    },
    // Canvas 内边距
    padding: {
      type: Array,
      default: function () {
        return ['auto', 'auto']
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
      // 如果图形存在则销毁后再创建
      if (this.chart) {
        this.chart.destroy()
      }
      this.chart = new G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: this.padding
      })

      // 设置数据的显示别名以及最大值、最小值
      let _this = this
      let scaleConfig = (function () {
        let obj = {}
        for (const key in _this.axisName) {
          if (_this.axisName.hasOwnProperty(key)) {
            obj[key] = {}
            obj[key]['alias'] = _this.axisName[key]
            if (key === 'value') {
              obj[key]['max'] = _this.maxValue
              obj[key]['min'] = 0
            }
          }
        }
        return obj
      }())
      // 为 chart 装载数据
      this.chart.source(data, scaleConfig)

      // 隐藏图例
      this.chart.legend(false)

      // 隐藏坐标轴
      this.chart.axis(false)

      // 配置液体流动的边框颜色等
      this.chart.interval().position('name*value')
        .shape('liquid-fill-gauge').style({
          lineWidth: 2,
          opacity: 0.65
        })

      // 添加文本辅助元素
      const guideContent = this.isPercent ? percentFormat(this.data[0].value) : floatIntFormat(this.data[0].value)
      this.chart.guide().text({
        // 文本辅助元素位置
        top: true,
        position: {
          name: this.data[0].name,
          value: this.maxValue / 2
        },
        // 文本辅助元素内容
        content: guideContent,
        // 文本辅助元素样式
        style: {
          fill: 'rgba(0,0,0,0.65)',
          opacity: 0.75,
          fontSize: this.height / 8,
          textAlign: 'center'
        }
      })

      // 绘制
      this.chart.render()
    }
  },
  mounted () {
    this.drawChart(this.data)
  }
}
</script>
