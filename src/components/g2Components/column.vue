/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-19 22:18:59
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-29 14:09:10
 * @Type: 柱状图/条形图
 */
<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'
import { percentFormat, floatIntFormat } from '@/utils/index'

export default {
  name: 'g2-column',
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
    // 分组或堆叠(dodge、fold)
    type: {
      type: String,
      default: 'fold'
    },
    // 是否是条形图
    isBar: {
      type: Boolean,
      default: true
    },
    // 是否显示图例
    showLegend: {
      type: Boolean,
      default: true
    },
    // value 数据是否是百分数（整数和百分数）
    isPercent: {
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

      // 为 chart 装载数据
      this.chart.source(data)

      // 为指定的数据字段(value)进行列定义
      let _this = this
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
      this.chart.tooltip(true)

      // 配置图表图例
      if (this.showLegend) {
        this.chart.legend('type', {
          position: 'bottom-center'
        })
      }
      if (this.isBar) {
        this.chart.coord().transpose()
      }
      if (this.data.length > 0 && this.data[0].hasOwnProperty('type')) {
        // 类型为分组时的配置项
        if (this.type === 'dodge') {
          this.chart.interval().position('name*value').color('type').adjust([{
            type: 'dodge',
            marginRatio: 1 / 32
          }])
        }
        // 类型为堆叠时的配置项
        if (this.type === 'fold') {
          this.chart.intervalStack().position('name*value').color('type')
        }
      } else {
        this.chart.interval().position('name*value')
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
