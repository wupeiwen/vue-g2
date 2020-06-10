<!--
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2018-10-15 15:00:00
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2020-06-10 09:53:24
-->
<template>
  <div :id="id"></div>
</template>

<script>
import mixinChart from '@/mixins/chart.js'
import { percentFormat, floatIntFormat } from '@/utils/index'

export default {
  name: 'g2-sparkline',
  mixins: [mixinChart],
  props: {
    // 数据
    data: {
      type: Array,
      default: () => [
        { name: '2018-01', value: 86085 },
        { name: '2018-02', value: 144776 },
        { name: '2018-03', value: 193868 },
        { name: '2018-04', value: 9616 },
        { name: '2018-05', value: 35715 },
        { name: '2018-06', value: 122503 },
        { name: '2018-07', value: 44122 },
        { name: '2018-08', value: 45153 },
        { name: '2018-09', value: 48675 },
        { name: '2018-10', value: 22159 },
        { name: '2018-11', value: 34447 },
        { name: '2018-12', value: 36865 }
      ]
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: () => {
        return {
          name: '类型',
          value: '数量'
        }
      }
    },
    // 图表类型 area interval line
    type: {
      type: String,
      default: 'line'
    },
    // 图表颜色
    color: {
      type: String,
      default: '#1890FF'
    },
    // value 数据是否是百分数（整数和百分数）
    isPercent: {
      type: Boolean,
      default: false
    },
    useTooltip: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    padding: function () {
      return 0
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

      // 是否使用tooptip
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

      // 隐藏图表图例
      this.chart.legend(false)

      // 隐藏图表坐标轴
      this.chart.axis(false)

      // 配置图表类别
      if (this.type) {
        this.chart[this.type]().position('name*value').color(this.color)
      }
    }
  }
}
</script>
