/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-19 22:18:59
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-12-06 13:11:35
  * @Description: 气泡图
 */
<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'
import { percentFormat, floatIntFormat, AxisOption } from '@/utils/index'

export default {
  name: 'g2-bubble',
  props: {
    // 数据
    data: {
      type: Array,
      default: () => [
        { x: 20, y: 5, size: 15, type: 'type1' },
        { x: 30, y: 10, size: 8, type: 'type2' },
        { x: 15, y: 20, size: 15, type: 'type3' }
      ]
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
          x: '数据1',
          y: '数据2',
          type: '类型',
          size: '大小'
        }
      }
    },
    // 坐标轴颜色
    axisColor: {
      type: Object,
      default: () => {
        return {
          lineColor: 'red',
          labelColor: 'green'
        }
      }
    },
    // 是否显示图例
    showLegend: {
      type: Boolean,
      default: true
    },
    // 是否显示网格线
    showGrid: {
      type: Boolean,
      default: true
    },
    // 图例位置
    legendPosition: {
      type: String,
      default: 'bottom-center'
    },
    // 数据是否是百分数（整数和百分数）
    isPercent: {
      type: Object,
      default: () => {
        return {
          x: false,
          y: false
        }
      }
    },
    minSize: {
      type: Number,
      default: 10
    },
    maxSize: {
      type: Number,
      default: 20
    },
    // 内边距
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
      // 销毁实例
      if (this.chart) {
        this.chart.destroy()
      }

      // 新建实例
      this.chart = new G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: this.padding
      })

      // 设置数据的显示别名
      let _this = this
      let scaleConfig = (function () {
        let obj = {}
        for (const key in _this.axisName) {
          if (_this.axisName.hasOwnProperty(key)) {
            obj[key] = {}
            obj[key]['alias'] = _this.axisName[key]
            if (_this.isPercent[key]) {
              // 将数据格式化为百分数
              obj[key]['formatter'] = percentFormat
            } else {
              // 浮点数保留一位小数，整数不做处理
              obj[key]['formatter'] = floatIntFormat
            }
          }
        }
        return obj
      }())
      // 为 chart 装载数据
      this.chart.source(data, scaleConfig)

      const colorMap = Array.from(new Array(8), (v, i) => { return G2.Global.colors[i] })
      let bullle = this.chart.point().position('x*y').shape('circle')

      // 坐标轴配置
      this.chart.axis('x', new AxisOption('x', this.axisColor))
      this.chart.axis('y', new AxisOption('y', this.axisColor, this.showGrid))

      // 配置图表图例
      this.chart.legend('size', false)
      if (this.showLegend) {
        this.chart.legend('type', { position: this.legendPosition })
      } else {
        this.chart.legend('type', false)
      }

      // 配置图表tooltip
      this.chart.tooltip({
        showTitle: false
      })
      bullle.tooltip('type*x*y')

      // 配置 颜色 大小
      bullle.color('type', colorMap).size('size', [this.minSize, this.maxSize]).opacity(0.5)

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
