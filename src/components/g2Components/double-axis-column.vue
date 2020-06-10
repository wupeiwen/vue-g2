<!--
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2018-08-19 22:18:59
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2020-06-10 09:36:40
-->
<template>
  <div :id="id"></div>
</template>

<script>
import mixinChart from '@/mixins/chart.js'
import { percentFormat, floatIntFormat, AxisOption } from '@/utils/index'

export default {
  name: 'g2-double-axis-column',
  mixins: [mixinChart],
  props: {
    // 数据
    data: {
      type: Array,
      default: () => [
        { name: '1997', value1: 86085, value2: 0.3 },
        { name: '2007', value1: 144776, value2: 0.2 },
        { name: '2017', value1: 193868, value2: 0.6 }
      ]
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: () => {
        return {
          name: 'name',
          value1: 'value1',
          value2: 'value2'
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
    // 是否是条形图
    isBar: {
      type: Boolean,
      default: false
    },
    // 是否显示图例
    showLegend: {
      type: Boolean,
      default: true
    },
    // 是否显示网格线
    showGrid: {
      type: Boolean,
      default: false
    },
    // value 数据是否是百分数（整数和百分数）
    isPercent: {
      type: Object,
      default: () => {
        return {
          value1: false,
          value2: true
        }
      }
    },
    useTooltip: {
      type: Boolean,
      default: false
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
      // 构造数据
      const ds = new this.DataSet()
      // 重命名
      const renameData = ds.createView().source(data).transform({
        type: 'rename',
        map: {
          value1: this.axisName.value1,
          value2: this.axisName.value2
        }
      })
      // 展开字段this.axisName.value1
      const data1 = ds.createView().source(renameData).transform({
        type: 'fold',
        fields: [ `${this.axisName.value1}` ], // 展开字段集
        key: 'type', // key字段
        value: 'value', // value字段
        retains: [ 'name', `${this.axisName.value1}` ] // 保留字段集，默认为除 fields 以外的所有字段
      }).rows
      // 展开字段this.axisName.value2
      const data2 = ds.createView().source(renameData).transform({
        type: 'fold',
        fields: [ `${this.axisName.value2}` ], // 展开字段集
        key: 'type', // key字段
        value: 'value', // value字段
        retains: [ 'name', `${this.axisName.value2}` ] // 保留字段集，默认为除 fields 以外的所有字段
      }).rows
      data = data1.concat(data2)

      // 为 chart 装载数据
      this.chart.source(data)

      // 为指定的数据字段(value1,value2)进行格式化
      let _this = this
      let scaleConfig = (function () {
        let obj = {}
        for (const key in _this.isPercent) {
          obj[_this.axisName[key]] = {}
          if (_this.isPercent[key]) {
            // 将数据格式化为百分数
            obj[_this.axisName[key]].formatter = percentFormat
          } else {
            // 浮点数保留一位小数，整数不做处理
            obj[_this.axisName[key]].formatter = floatIntFormat
          }
        }
        return obj
      }())
      this.chart.scale(scaleConfig)

      // 是否使用tooltip
      if (this.useTooltip) {
        // 配置图表tooltip
        this.chart.tooltip(true)
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
      this.chart.axis(`${this.axisName.value1}`, new AxisOption(`${this.axisName.value1}`, this.axisColor, this.showGrid))
      this.chart.axis(`${this.axisName.value2}`, new AxisOption(`${this.axisName.value2}`, this.axisColor, this.showGrid))

      // 是否是条形图
      if (this.isBar) {
        this.chart.coord().transpose()
      }

      this.chart.interval().position(`name*${this.axisName.value1}`).color('type')
        .adjust([{
          type: 'dodge',
          marginRatio: 1 / 32
        }])
      this.chart.interval().position(`name*${this.axisName.value2}`).color('type')
        .adjust([{
          type: 'dodge',
          marginRatio: 1 / 32
        }])
    }
  }
}
</script>
