/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-19 22:18:59
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-17 13:45:26
  * @Description: 散点图
 */
<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'
import { percentFormat, numFormat } from '@/utils/index'

export default {
  props: {
    data: {
      type: Array,
      default: () => [
        { x: 20, y: 5 },
        { x: 30, y: 10 },
        { x: 15, y: 20 }
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
          y: '数据2'
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
      // 如果图形存在则销毁后再创建
      if (this.chart) {
        this.chart.destroy()
      }
      this.chart = new G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: [30, 20, 50, 50]
      })
      this.chart.source(data, {
        x: {
          alias: this.axisName.x,
          formatter: item => {
            return (item <= 1 && item > 0) ? percentFormat(item) : numFormat(item)
          }
        },
        y: {
          alias: this.axisName.y,
          formatter: item => {
            return (item <= 1 && item > 0) ? percentFormat(item) : numFormat(item)
          }
        }
      })
      this.chart.tooltip({
        showTitle: false
      })
      let point = this.chart.point().position('x*y').shape('circle')
      // 配置 颜色 大小 tooltip
      point.color('x', function (val) {
        if (val >= 0.75) {
          return G2.Global.colors[0]
        } else if (val >= 0.5) {
          return G2.Global.colors[1]
        } else {
          return G2.Global.colors[2]
        }
      }).size(5).opacity(0.8).tooltip('x*y')
      this.chart.render()
    }
  },
  mounted () {
    this.drawChart(this.data)
  }
}
</script>
