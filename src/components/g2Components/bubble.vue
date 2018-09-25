/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-19 22:18:59
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-25 11:28:20
  * @Description: 气泡图
 */
<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'
import { percentFormat, numFormat } from '@/utils/index'

export default {
  name: 'g2-bubble',
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
        padding: [30, 120, 50, 50]
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
      const colorMap = Array.from(new Array(8), (v, i) => { return G2.Global.colors[i] })
      this.chart.point().position('x*y').shape('circle')
      // 打开图例
      this.chart.legend('size', false)
      this.chart.legend('type', { position: 'right-top' })
      // 配置 颜色 大小 tooltip
      this.chart.color('type', colorMap).size('size', [10, 20]).opacity(0.5).tooltip('type*x*y*size', {
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
