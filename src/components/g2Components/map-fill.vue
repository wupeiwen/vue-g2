<!--
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2020-11-12 09:55:51
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2020-11-12 14:42:31
-->
<template>
  <div :id="id"></div>
</template>

<script>
import mixinChart from '@/mixins/chart.js'
const mapData = require('@/assets/shanghai.json')

export default {
  name: 'g2-map-fill',
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
          'name': '嘉定区', 'value': 10, 'color': 'red'
        },
        {
          'name': '徐汇区', 'value': 20, 'color': 'yellow'
        },
        {
          'name': '浦东新区', 'value': 30, 'color': 'blue'
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
    // 颜色类型
    // 'specify' || 'mapping'
    color: {
      type: Object,
      default: () => {
        return {
          type: 'mapping',
          mapping: '#e5f5e0-#31a354'
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

      // draw the polygon
      const polygonData = ds.createView().source(data).transform({
        geoDataView: dv,
        field: 'name',
        type: 'geo.region',
        as: ['x', 'y']
      })
      const polygonView = this.chart.view()
      polygonView.source(polygonData)
      const polygon = polygonView.polygon()
        .position('x*y')
        .opacity(0.8)
        .tooltip('name*value', (name, value) => {
          return { name, value }
        })

      if (this.color.type === 'specify') {
        polygon.color('color', (color) => {
          return color
        })
      } else {
        polygon.color('value', this.color.mapping)
      }
    }
  }
}
</script>
