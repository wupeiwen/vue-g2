/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-27 14:29:48
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-08-28 09:50:06
 * @Description: 液体填充
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
      default: () => {
        return [{ name: '类别', value: 30 }]
      }
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
        padding: 'auto'
      })
      this.chart.source(data, {
        value: {
          min: 0,
          max: 100
        }
      })
      this.chart.legend(false)
      this.chart.axis(false)
      this.chart.interval().position('name*value').color('name')
        .shape('liquid-fill-gauge').style({
          lineWidth: 2,
          opacity: 0.75
        })
      this.chart.guide().text({
        top: true,
        position: {
          name: data[0].name,
          value: 50
        },
        content: data[0].value + '%',
        style: {
          opacity: 0.75,
          fontSize: 26,
          textAlign: 'center'
        }
      })
      this.chart.render()
    }
  },
  mounted () {
    this.drawChart(this.data)
  }
}
</script>
