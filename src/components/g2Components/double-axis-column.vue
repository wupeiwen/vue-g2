/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-19 22:18:59
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2019-03-29 15:15:13
 * @Type: 双Y轴柱状图/条形图
 */
<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'
import DataSet from '@antv/data-set'
import { percentFormat, floatIntFormat, AxisOption } from '@/utils/index'

export default {
  name: 'g2-column',
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
    // DOM 高度
    height: {
      type: Number,
      default: 500
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

      // 构造数据
      const ds = new DataSet()
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

      // 绘制
      this.chart.render()

      // 销毁实例
      this.$once('hook:beforeDestroy', function () {
        this.chart.destroy()
      })
    }
  },
  created () {
    const uuidv4 = require('uuid/v4')
    this.id = uuidv4()
  },
  mounted () {
    this.drawChart(this.data)
  }
}
</script>
