/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-21 13:44:57
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-14 17:04:51
 * @Description: 镜像分面柱图
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
        { name: '暂无数据', value: 0, type: '数据类别1' },
        { name: '暂无数据', value: 0, type: '数据类别2' }
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
        renderer: 'svg',
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: [40, 20, 0, 140]
      })
      this.chart.source(data, {
        name: {
          sync: true
        },
        value: {
          sync: true
        },
        type: {
          sync: true
        }
      })
      // 设置 mirror 分面
      this.chart.facet('mirror', {
        fields: ['type'],
        transpose: true,
        // 列标题
        colTitle: {
          offsetY: -15,
          style: {
            fontSize: 14,
            textAlign: 'center',
            fill: 'rgba(0, 0, 0, 0.85)'
          }
        },
        eachView (view) {
          // name 坐标轴配置项
          view.axis('name', {
            position: 'top',
            line: null,
            tickLine: null,
            title: null,
            label: {
              autoRotate: false
            }
          })
          // 隐藏 value 坐标轴
          view.axis('value', false)
          // 绘制 柱图
          view.interval().size(25).position('name*value')
            .color('type', [ '#2FC25A', '#1890FF' ])
        }
      })
      this.chart.legend(false)
      this.chart.render()
    }
  },
  mounted () {
    this.drawChart(this.data)
  }
}
</script>
