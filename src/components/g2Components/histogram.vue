<!--
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2018-10-08 15:06:37
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2020-06-10 09:37:16
-->
<template>
  <div :id="id"></div>
</template>

<script>
import mixinChart from '@/mixins/chart.js'

export default {
  name: 'g2-histogram',
  mixins: [mixinChart],
  props: {
    // 数据
    data: {
      type: Array,
      default: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: () => {
        return { x: '区间', y: '统计' }
      }
    },
    // 坐标轴颜色
    axisColor: {
      type: Object,
      default: () => {
        return {
          titleColor: '#ccc',
          labelColor: '#999'
        }
      }
    },
    // 是否显示网格线
    showGrid: {
      type: Boolean,
      default: true
    },
    useTooltip: {
      type: Boolean,
      default: false
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
  methods: {
    setChartConfig: function (data) {
      // 配置x轴
      this.chart.axis('x', {
        tickLine: null,
        title: {
          autoRotate: false,
          textStyle: {
            fill: this.axisColor.titleColor,
            fontSize: '14',
            textBaseline: 'bottom'
          },
          position: 'end'
        },
        label: {
          autoRotate: false,
          textStyle: {
            fill: this.axisColor.labelColor
          }
        }
      })

      // 配置y轴
      this.chart.axis('y', {
        tickLine: null,
        title: {
          autoRotate: false,
          textStyle: {
            fill: this.axisColor.titleColor,
            fontSize: '14',
            textBaseline: 'bottom'
          },
          position: 'end'
        },
        label: {
          textStyle: {
            fill: this.axisColor.labelColor
          }
        },
        grid: !this.showGrid ? null : {}
      })

      data = data.map(item => { return { x: Number(item), y: Number(item) } })
      // 为 chart 装载数据
      const ds = new this.DataSet()
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

      if (this.binWidth > 0) {
        this.chart.source(dv, {
          x: {
            sync: true,
            alias: this.axisName.x,
            tickInterval: this.binWidth // 分箱步长
          },
          y: {
            sync: true,
            alias: this.axisName.y
          }
        })
      } else {
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
      }

      // 是否使用tooltip
      if (this.useTooltip) {
        // 配置图表tooltip
        this.chart.tooltip(true)
      } else {
        this.chart.tooltip(false)
      }

      // 配置图形
      this.chart.interval().position('x*y')
    }
  }
}
</script>
