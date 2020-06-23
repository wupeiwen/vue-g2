<!--
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2018-08-19 22:18:59
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2020-06-23 17:30:25
-->
<template>
  <div :id="id"></div>
</template>

<script>
import mixinChart from '@/mixins/chart.js'
import { percentFormat, floatIntFormat, AxisOption } from '@/utils/index'

export default {
  name: 'g2-area',
  mixins: [mixinChart],
  props: {
    // 数据
    data: {
      type: Array,
      default: () => [
        { name: '1997', value: 86085, type: 'America' },
        { name: '2007', value: 144776, type: 'America' },
        { name: '2017', value: 193868, type: 'America' },
        { name: '1997', value: 9616, type: 'China' },
        { name: '2007', value: 35715, type: 'China' },
        { name: '2017', value: 122503, type: 'China' },
        { name: '1997', value: 44122, type: 'Japan' },
        { name: '2007', value: 45153, type: 'Japan' },
        { name: '2017', value: 48675, type: 'Japan' },
        { name: '1997', value: 22159, type: 'Germany' },
        { name: '2007', value: 34447, type: 'Germany' },
        { name: '2017', value: 36865, type: 'Germany' }
      ]
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: () => {
        return {
          name: 'name',
          value: 'value',
          type: 'type'
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
    // 单颜色
    singleColor: {
      type: Object,
      default: () => {
        return {
          areaColor: 'l(270) 0:#ffffff 1:#1890ff',
          lineColor: '#1890ff'
        }
      }
    },
    // 是否显示图例
    showLegend: {
      type: Boolean,
      default: true
    },
    // 是否显示点
    showLine: {
      type: Boolean,
      default: true
    },
    // value 数据是否是百分数（整数和百分数）
    isPercent: {
      type: Boolean,
      default: false
    },
    // 是否显示曲线
    isSmooth: {
      type: Boolean,
      default: false
    },
    // 是否显示网格线
    showGrid: {
      type: Boolean,
      default: true
    },
    useTooltip: {
      type: Boolean,
      default: true
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
      // 为 chart 装载数据
      this.chart.source(data)

      // 进行列定义
      let _this = this
      let scaleConfig = (function () {
        let obj = {}
        for (const key in _this.axisName) {
          if (_this.axisName.hasOwnProperty(key)) {
            obj[key] = {}
            obj[key]['alias'] = _this.axisName[key]
            if (key === 'value') {
              // 数据格式, 将数据转为百分数或浮点数(保留一位小数), 整数不做处理
              obj[key]['formatter'] = _this.isPercent ? percentFormat : floatIntFormat
            }
          }
        }
        return obj
      }())
      this.chart.scale(scaleConfig)

      // 是否使用tooltip
      if (this.useTooltip) {
      // 配置图表tooltip
        this.chart.tooltip(true, {
          crosshairs: {
            type: 'line'
          }
        })
      } else {
        this.chart.tooltip(false)
      }

      // 配置图表图例
      if (this.showLegend) {
        this.chart.legend('type', {
          position: 'bottom-center'
        })
      } else {
        this.chart.legend('type', false)
      }

      // 坐标轴配置
      this.chart.axis('name', new AxisOption('name', this.axisColor))
      this.chart.axis('value', new AxisOption('value', this.axisColor, this.showGrid))

      // 配置折线和散点的颜色、形状等
      let area = this.chart.area().position('name*value')
      let line

      if (this.showLine) {
        line = this.chart.line().position('name*value').style({
          lineWidth: 1
        })
      }

      // 配置多条折线时的颜色
      if (this.data.length > 0 && this.data[0].hasOwnProperty('type')) {
        area.color('type')
        if (this.showLine) {
          line.color('type')
        }
      } else {
        area.color(this.singleColor.areaColor)
        if (this.showLine) {
          line.color(this.singleColor.lineColor)
        }
      }

      // 折线是否显示为曲线
      if (this.isSmooth) {
        area.shape('smooth')
        line.shape('smooth')
      }
    }
  }
}
</script>
