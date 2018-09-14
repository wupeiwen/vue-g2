/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-19 22:18:59
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-14 17:06:30
  * @Description: 基础散点图
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
    type: {
      type: String,
      default: '气泡图'
    },
    axisName: {
      type: Object,
      default: () => {
        return {
          x: '数据2',
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
      // 如果图形存在则销毁后再创建
      if (this.chart) {
        this.chart.destroy()
      }
      this.chart = new G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: [30, this.type === '散点图' ? 20 : 120, 50, 50]
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
        },
        size: {
          alias: this.axisName.size,
          formatter: item => {
            return (item <= 1 && item > 0) ? percentFormat(item) : numFormat(item)
          }
        },
        type: {
          alias: this.axisName.type
        }
      })
      this.chart.legend('size', false)
      this.chart.tooltip({
        showTitle: false
      })
      const colorMap = Array.from(new Array(8), (v, i) => { return G2.Global.colors[i] })
      let point = this.chart.point().position('x*y').shape('circle')
      if (this.type === '散点图') {
        // 关闭图例
        this.chart.legend('type', false)
        // 配置 颜色 大小 tooltip
        point.color('x', function (val) {
          if (val >= 0.75) {
            return colorMap[0]
          } else if (val >= 0.5) {
            return colorMap[1]
          } else {
            return colorMap[2]
          }
        }).size('size', [1, 5]).opacity(0.8).tooltip('type*x*y')
      } else if (this.type === '气泡图') {
        // 打开图例
        this.chart.legend('type', { position: 'right-top' })
        // 配置 颜色 大小 tooltip
        point.color('type', colorMap).size('size', [10, 20]).opacity(0.5).tooltip('type*x*y*size')
      }
      this.chart.render()
    }
  },
  mounted () {
    this.drawChart(this.data)
  }
}
</script>
