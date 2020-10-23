<!--
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2018-08-19 22:10:56
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2020-10-23 14:11:32
-->
<template>
  <div :id="id"></div>
</template>

<script>
import mixinChart from '@/mixins/chart.js'

export default {
  name: 'g2-radar',
  mixins: [mixinChart],
  props: {
    data: {
    // 数据
      type: Array,
      default: () => {
        return [{
          item: 'Design',
          a: 70,
          b: 30,
          c: 11
        }, {
          item: 'Development',
          a: 60,
          b: 70,
          c: 11
        }, {
          item: 'Marketing',
          a: 50,
          b: 60,
          c: 11
        }, {
          item: 'Users',
          a: 40,
          b: 50,
          c: 11
        }, {
          item: 'Test',
          a: 60,
          b: 70,
          c: 11
        }]
      }
    },
    // 别名
    axisName: {
      type: Object,
      default: () => {
        return {
          a: 'a'
        }
      }
    },
    // 坐标轴颜色
    axisColor: {
      type: Object,
      default: () => {
        return {
          lineColor: '#ccc',
          labelColor: '#999'
        }
      }
    },
    // 最大值
    max: {
      type: Number,
      default: 80
    },
    // 最小值
    min: {
      type: Number,
      default: 0
    },
    // 是否显示面积区域
    isShowArea: {
      type: Boolean,
      default: false
    },
    // 是否显示图例
    showLegend: {
      type: Boolean,
      default: false
    },
    // 是否显示tooltip
    useTooltip: {
      type: Boolean,
      default: true
    },
    // 内边距
    padding: {
      type: Array,
      default: function () {
        return ['auto', 'auto']
      }
    }
  },
  methods: {
    setChartConfig: function (data) {
      // 设置数据的显示别名以及将指定字段展开
      const fields = []
      for (const key in this.axisName) {
        if (this.axisName.hasOwnProperty(key)) {
          fields.push(this.axisName[key])
        }
      }
      let dv = new this.DataSet.DataView()
        .source(data).transform({
          type: 'rename',
          map: this.axisName
        }).transform({
          type: 'fold',
          fields: fields,
          key: 'user',
          value: 'score'
        })

      // 设置score数据的最大值、最小值
      this.chart.source(dv, {
        score: {
          min: this.min,
          max: this.max
        }
      })

      // 配置极坐标系
      this.chart.coord('polar', {
        radius: 1
      })

      // 配置item轴
      this.chart.axis('item', {
        line: { stroke: this.axisColor.lineColor },
        tickLine: null,
        grid: {
          lineStyle: {
            lineDash: null
          },
          hideFirstLine: false
        },
        label: { textStyle: { fill: this.axisColor.labelColor } }
      })

      // 配置score轴
      this.chart.axis('score', {
        line: null,
        tickLine: null,
        grid: {
          type: 'polygon',
          lineStyle: {
            lineDash: null,
            stroke: this.axisColor.lineColor
          }
        },
        label: null
      })

      // 是否显示图例
      if (this.showLegend) {
        // 配置图例
        this.chart.legend('user', {
          marker: 'circle',
          offset: 30
        })
      } else {
        this.chart.legend(false)
      }

      // 是否使用tooltip
      if (this.useTooltip) {
        // 配置tooltip
        this.chart.tooltip(true)
      } else {
        this.chart.tooltip(false)
      }

      // 配置折线
      this.chart.line().position('item*score').color('user').size(2)

      // 配置散点
      this.chart.point().position('item*score').color('user').shape('circle').size(3).style({
        stroke: '#fff',
        lineWidth: 1,
        fillOpacity: 1
      })

      // 是否显示面积区域
      if (this.isShowArea) {
        // 配置面积区域
        this.chart.area().position('item*score').color('user')
      }
    }
  }
}
</script>
