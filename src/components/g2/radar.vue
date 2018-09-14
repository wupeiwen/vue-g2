<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'
import DataSet from '@antv/data-set'

export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return [{
          item: 'Design',
          a: 70,
          b: 30
        }, {
          item: 'Development',
          a: 60,
          b: 70
        }, {
          item: 'Marketing',
          a: 50,
          b: 60
        }, {
          item: 'Users',
          a: 40,
          b: 50
        }, {
          item: 'Test',
          a: 60,
          b: 70
        }]
      }
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
          a: 'a',
          b: 'b',
          c: 'c'
        }
      }
    },
    max: {
      type: Number,
      default: 80
    },
    min: {
      type: Number,
      default: 0
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
      var dv = new DataSet.DataView()
        .source(data).transform({
          type: 'rename',
          map: {
            a: this.axisName.a,
            b: this.axisName.b,
            c: this.axisName.c
          }
        }).transform({
          type: 'fold',
          fields: [this.axisName.a, this.axisName.b, this.axisName.c],
          key: 'user',
          value: 'score'
        })
      this.chart.source(dv, {
        score: {
          min: this.min,
          max: this.max
        }
      })
      this.chart.coord('polar', {
        radius: 0.8
      })
      this.chart.axis('item', {
        line: null,
        tickLine: null,
        grid: {
          lineStyle: {
            lineDash: null
          },
          hideFirstLine: false
        }
      })
      this.chart.axis('score', {
        line: null,
        tickLine: null,
        grid: {
          type: 'polygon',
          lineStyle: {
            lineDash: null
          }
        },
        label: null
      })
      this.chart.legend('user', {
        marker: 'circle',
        offset: 30
      })
      this.chart.tooltip(false)
      this.chart.line().position('item*score').color('user').size(2)
      this.chart.point().position('item*score').color('user').shape('circle').size(3).style({
        stroke: '#fff',
        lineWidth: 1,
        fillOpacity: 1
      })
      this.chart.render()
    }
  },
  mounted () {
    this.drawChart(this.data)
  }
}
</script>

<style lang="less" scoped>

</style>
