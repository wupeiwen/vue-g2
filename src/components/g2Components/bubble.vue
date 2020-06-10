<!--
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2018-08-19 22:18:59
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2020-06-10 09:35:47
-->
<template>
  <div :id="id"></div>
</template>

<script>
import mixinChart from '@/mixins/chart.js'
import { percentFormat, floatIntFormat, AxisOption } from '@/utils/index'

export default {
  name: 'g2-bubble',
  mixins: [mixinChart],
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
    colorMap: {
      type: Array,
      default: () => {
        return ['#1890FF', '#2FC25B', '#FACC14', '#223273', '#8543E0', '#13C2C2', '#3436C7', '#F04864']
      }
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
          lineColor: '#ccc',
          labelColor: '#999'
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
    // 是否显示网格线
    useTooltip: {
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
  methods: {
    setChartConfig: function (data) {
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

      // 是否使用tooltip
      if (this.useTooltip) {
        // 配置图表tooltip
        this.chart.tooltip({
          showTitle: false
        })
        bullle.tooltip('type*x*y')
      } else {
        this.chart.tooltip(false)
      }

      // 配置 颜色 大小
      bullle.color('type', this.colorMap).size('size', [this.minSize, this.maxSize]).opacity(0.5)
    }
  }
}
</script>
