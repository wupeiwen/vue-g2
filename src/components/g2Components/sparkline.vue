/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-19 22:18:59
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-10-15 14:54:05
 * @Type: 折线图
 */
<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'
import { percentFormat, floatIntFormat } from '@/utils/index'

export default {
  name: 'g2-area',
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
    // DOM ID
    id: String,
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
          value: 'value',
          type: 'type'
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
        padding: 0
      })

      // 设置数据的显示别名
      let _this = this
      let scaleConfig = (function () {
        let obj = {}
        for (const key in _this.axisName) {
          if (_this.axisName.hasOwnProperty(key)) {
            obj[key] = {}
            obj[key]['alias'] = _this.axisName[key]
          }
        }
        return obj
      }())
      // 为 chart 装载数据
      this.chart.source(data, scaleConfig)

      // 为指定的数据字段(value)进行列定义
      let valueConfig = (function () {
        let obj = { formatter: '' }
        if (_this.isPercent) {
          // 将数据格式化为百分数
          obj.formatter = percentFormat
        } else {
          // 浮点数保留一位小数，整数不做处理
          obj.formatter = floatIntFormat
        }
        return obj
      }())
      this.chart.scale('value', valueConfig)

      // 配置图表tooltip
      this.chart.tooltip(true, {
        crosshairs: {
          type: 'line'
        }
      })

      // 隐藏图表图例
      this.chart.legend(false)

      // 隐藏图表坐标轴
      this.chart.axis(false)

      // 配置图表类别
      if (this.type) {
        this.chart[this.type]().position('name*value').color(this.color)
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
