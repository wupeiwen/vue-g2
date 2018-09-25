/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-19 22:18:59
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-25 11:28:02
  * @Description: 散点图
 */
<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'

export default {
  name: 'g2-scatterPoint',
  props: {
    data: {
      type: Array,
      default: () => [
        { x: 20, y: 5, size: 5, type: 'type1' },
        { x: 30, y: 10, size: 8, type: 'type2' },
        { x: 15, y: 20, size: 15, type: 'type3' }
      ]
    },
    id: String,
    height: {
      type: Number,
      default: 300
    },
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
        padding: ['auto', 'auto']
      })

      // 设置数据的显示别名
      let _this = this
      let scaleConfig = (function () {
        let obj = {}
        for (const key in _this.axisName) {
          if (_this.axisName.hasOwnProperty(key)) {
            obj[key] = _this.axisName[key]
          }
        }
        return obj
      }())
      // 为 chart 装载数据
      this.chart.source(data, scaleConfig)

      this.chart.point().position('x*y').shape('circle')
      // 配置 颜色 大小 tooltip
      this.chart.size(5).opacity(0.8).tooltip('x*y', {
        showTitle: false
      })
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
