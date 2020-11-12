<!--
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2020-11-12 10:12:59
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2020-11-12 13:37:37
-->
<template>
  <div :id="id"></div>
</template>

<script>
import mixinChart from '@/mixins/chart.js'
const mapData = require('@/assets/shanghai.json')

export default {
  name: 'g2-map-bubble',
  mixins: [mixinChart],
  props: {
    // 地图数据
    mapData: {
      type: Object,
      default: () => mapData
    },
    // 气泡数据
    data: {
      type: Array,
      default: () => [
        {
          'name': '嘉定区', 'lat': '31.381842', 'lng': '121.257367', 'value': 10
        },
        {
          'name': '徐汇区', 'lat': '31.190376', 'lng': '121.444349', 'value': 20
        },
        {
          'name': '浦东新区', 'lat': '31.041349', 'lng': '121.7796', 'value': 30
        }
      ]
    },
    // 地图配置
    mapConfig: {
      type: Object,
      default: () => {
        return {
          backgroundColor: '#dddddd',
          opacity: 0.85,
          lineColor: '#b1b1b1',
          lineWidth: 0.5
        }
      }
    },
    // 气泡配置
    bubbleConfig: {
      type: Object,
      default: () => {
        return {
          backgroundColor: '#ff2f29',
          opacity: 0.45,
          lineColor: '#ffffff',
          lineWidth: 0.5,
          size: [2, 30]
        }
      }
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
      this.chart.scale({
        x: { sync: true, nice: false },
        y: { sync: true, nice: false }
      })
      this.chart.coord().reflect()
      this.chart.legend(false)
      this.chart.axis(false)
      this.chart.tooltip({
        showTitle: false
      })

      // data set
      const ds = new this.DataSet()

      // draw the map
      const dv = ds.createView('back')
        .source(this.mapData, {
          type: 'GeoJSON'
        })
        .transform({
          type: 'geo.projection',
          projection: 'geoMercator',
          as: ['x', 'y', 'centroidX', 'centroidY']
        })
      const bgView = this.chart.view()
      bgView.source(dv)
      bgView.tooltip(false)
      bgView.polygon()
        .position('x*y')
        .style({
          fill: this.mapConfig.backgroundColor,
          fillOpacity: this.mapConfig.opacity,
          stroke: this.mapConfig.lineColor,
          lineWidth: this.mapConfig.lineWidth
        })

      // draw the bubble plot
      const bubbleData = ds.createView().source(data).transform({
        type: 'map',
        callback: obj => {
          const projectedCoord = dv.geoProjectPosition([obj.lng * 1, obj.lat * 1], 'geoMercator')
          obj.x = projectedCoord[0]
          obj.y = projectedCoord[1]
          obj.value = obj.value * 1
          return obj
        }
      })
      const bubbleView = this.chart.view()
      bubbleView.source(bubbleData)
      bubbleView.point()
        .position('x*y')
        .size('value', this.bubbleConfig.size)
        .shape('circle')
        .color(this.bubbleConfig.backgroundColor)
        .style({
          fillOpacity: this.bubbleConfig.opacity,
          stroke: this.bubbleConfig.lineColor,
          lineWidth: this.bubbleConfig.lineWidth
        })
        .tooltip('name*value', (name, value) => {
          return { name, value }
        })
    }
  }
}
</script>
