/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-30 15:47:06
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-14 17:30:43
 * @Description: 基础柱状图
 */

<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'

export default {
  props: {
    data: {
      type: Array,
      default: () => [
        { name: 'name1', value1: 4000, type: '类别1' },
        { name: 'name2', value1: 1000, type: '类别1' },
        { name: 'name1', value2: 80, type: '类别2' },
        { name: 'name2', value2: 20, type: '类别2' }
      ]
    },
    id: String,
    height: {
      type: Number,
      default: 300
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
        padding: 60
      })
      this.chart.legend('type', {
        position: 'top-center'
      })
      this.chart.source(data)
      this.chart.interval().position('name*value1').color('type')
        .adjust([{
          type: 'dodge',
          marginRatio: 1 / 32
        }])
      // this.chart.interval().position('name*value2').color('type')
      //   .adjust([{
      //     type: 'dodge',
      //     marginRatio: 1 / 32
      //   }])
      // this.chart.axis('value2', {
      //   label: {
      //     formatter: val => {
      //       return val + '%'
      //     }
      //   }
      // })
      this.chart.render()
    }
  },
  mounted () {
    this.drawChart(this.data)
  }
}
</script>
