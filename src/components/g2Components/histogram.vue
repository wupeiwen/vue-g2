/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-10-08 15:06:37
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-10-08 15:39:08
 * @Description: 直方图
 */
<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'
import DataSet from '@antv/data-set'

export default {
  props: {
    // 数据
    data: {
      type: Array,
      default: () => [
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 4 },
        { x: 5, y: 5 },
        { x: 6, y: 6 },
        { x: 7, y: 7 },
        { x: 8, y: 8 },
        { x: 9, y: 9 },
        { x: 10, y: 10 },
        { x: 11, y: 11 },
        { x: 12, y: 12 }
      ]
    },
    // DOM ID
    id: String,
    // DOM 高度
    height: {
      type: Number,
      default: 300
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: () => {
        return { x: '区间', y: '统计' }
      }
    },
    // 内边距
    padding: {
      type: Array,
      default: function () {
        return ['auto', 'auto']
      }
    },
    // 分组数
    bins: {
      type: Number,
      default: 0
    },
    // 分组长度
    binWidth: {
      type: Number,
      default: 4
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

      // 配置x轴
      this.chart.axis('x', {
        tickLine: null,
        title: {
          autoRotate: false,
          textStyle: {
            fill: 'rgba(0, 0, 0, 0.7)',
            fontSize: '14',
            textBaseline: 'bottom'
          },
          position: 'end'
        },
        label: {
          autoRotate: false
        }
      })

      // 配置y轴
      this.chart.axis('y', {
        tickLine: null,
        title: {
          autoRotate: false,
          textStyle: {
            fill: 'rgba(0, 0, 0, 0.7)',
            fontSize: '14',
            textBaseline: 'bottom'
          },
          position: 'end'
        }
      })

      // 为 chart 装载数据
      const ds = new DataSet()
      const dv = ds.createView().source(data)

      // 分箱步长（会覆盖bins选项）
      if (this.binWidth > 0) {
        dv.transform({
          type: 'bin.histogram',
          field: 'y',
          binWidth: this.binWidth, // 分箱步长
          offset: 0,
          as: ['x', 'y']
        })
      } else {
        dv.transform({
          type: 'bin.histogram',
          field: 'y',
          bins: this.bins, // 分箱个数
          offset: 0,
          as: ['x', 'y']
        })
      }

      this.chart.source(dv, {
        x: {
          sync: true,
          alias: this.axisName.x
        },
        y: {
          sync: true,
          alias: this.axisName.y
        }
      })

      // 配置图表tooltip
      this.chart.tooltip(true)

      // 配置图形
      this.chart.interval().position('x*y')

      // 绘制
      this.chart.render()
    }
  },
  mounted () {
    this.drawChart(this.data)
  }
}
</script>
