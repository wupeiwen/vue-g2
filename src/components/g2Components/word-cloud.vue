<!--
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2018-09-28 10:56:50
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2020-06-23 14:14:27
-->
<template>
  <div :id="id"></div>
</template>

<script>
import mixinChart from '@/mixins/chart.js'

export default {
  name: 'g2-word-cloud',
  mixins: [mixinChart],
  props: {
    // 数据
    data: {
      type: Array,
      default: () => [{ 'value': 9, 'name': 'AntV' }, { 'value': 8, 'name': 'F2' }, { 'value': 8, 'name': 'G2' }, { 'value': 8, 'name': 'G6' }, { 'value': 8, 'name': 'DataSet' }, { 'value': 8, 'name': '墨者学院' }, { 'value': 6, 'name': 'Analysis' }, { 'value': 6, 'name': 'Data Mining' }, { 'value': 6, 'name': 'Data Vis' }, { 'value': 6, 'name': 'Design' }, { 'value': 6, 'name': 'Grammar' }, { 'value': 6, 'name': 'Graphics' }, { 'value': 6, 'name': 'Graph' }, { 'value': 6, 'name': 'Hierarchy' }, { 'value': 6, 'name': 'Labeling' }, { 'value': 6, 'name': 'Layout' }, { 'value': 6, 'name': 'Quantitative' }, { 'value': 6, 'name': 'Relation' }, { 'value': 6, 'name': 'Statistics' }, { 'value': 6, 'name': '可视化' }, { 'value': 6, 'name': '数据' }, { 'value': 6, 'name': '数据可视化' }, { 'value': 4, 'name': 'Arc Diagram' }, { 'value': 4, 'name': 'Bar Chart' }, { 'value': 4, 'name': 'Canvas' }, { 'value': 4, 'name': 'Chart' }, { 'value': 4, 'name': 'DAG' }, { 'value': 4, 'name': 'DG' }, { 'value': 4, 'name': 'Facet' }, { 'value': 4, 'name': 'Geo' }, { 'value': 4, 'name': 'Line' }, { 'value': 4, 'name': 'MindMap' }, { 'value': 4, 'name': 'Pie' }, { 'value': 4, 'name': 'Pizza Chart' }, { 'value': 4, 'name': 'Punch Card' }, { 'value': 4, 'name': 'SVG' }, { 'value': 4, 'name': 'Sunburst' }, { 'value': 4, 'name': 'Tree' }, { 'value': 4, 'name': 'UML' }, { 'value': 3, 'name': 'Chart' }, { 'value': 3, 'name': 'View' }, { 'value': 3, 'name': 'Geom' }, { 'value': 3, 'name': 'Shape' }, { 'value': 3, 'name': 'Scale' }, { 'value': 3, 'name': 'Animate' }, { 'value': 3, 'name': 'Global' }, { 'value': 3, 'name': 'Slider' }, { 'value': 3, 'name': 'Connector' }, { 'value': 3, 'name': 'Transform' }, { 'value': 3, 'name': 'Util' }, { 'value': 3, 'name': 'DomUtil' }, { 'value': 3, 'name': 'MatrixUtil' }, { 'value': 3, 'name': 'PathUtil' }, { 'value': 3, 'name': 'G' }, { 'value': 3, 'name': '2D' }, { 'value': 3, 'name': '3D' }, { 'value': 3, 'name': 'Line' }, { 'value': 3, 'name': 'Area' }, { 'value': 3, 'name': 'Interval' }, { 'value': 3, 'name': 'Schema' }, { 'value': 3, 'name': 'Edge' }, { 'value': 3, 'name': 'Polygon' }, { 'value': 3, 'name': 'Heatmap' }, { 'value': 3, 'name': 'Render' }, { 'value': 3, 'name': 'Tooltip' }, { 'value': 3, 'name': 'Axis' }, { 'value': 3, 'name': 'Guide' }, { 'value': 3, 'name': 'Coord' }, { 'value': 3, 'name': 'Legend' }, { 'value': 3, 'name': 'Path' }, { 'value': 3, 'name': 'Helix' }, { 'value': 3, 'name': 'Theta' }, { 'value': 3, 'name': 'Rect' }, { 'value': 3, 'name': 'Polar' }, { 'value': 3, 'name': 'Dsv' }, { 'value': 3, 'name': 'Csv' }, { 'value': 3, 'name': 'Tsv' }, { 'value': 3, 'name': 'GeoJSON' }, { 'value': 3, 'name': 'TopoJSON' }, { 'value': 3, 'name': 'Filter' }, { 'value': 3, 'name': 'Map' }, { 'value': 3, 'name': 'Pick' }, { 'value': 3, 'name': 'Rename' }, { 'value': 3, 'name': 'Filter' }, { 'value': 3, 'name': 'Map' }, { 'value': 3, 'name': 'Pick' }, { 'value': 3, 'name': 'Rename' }, { 'value': 3, 'name': 'Reverse' }, { 'value': 3, 'name': 'sort' }, { 'value': 3, 'name': 'Subset' }, { 'value': 3, 'name': 'Partition' }, { 'value': 3, 'name': 'Imputation' }, { 'value': 3, 'name': 'Fold' }, { 'value': 3, 'name': 'Aggregate' }, { 'value': 3, 'name': 'Proportion' }, { 'value': 3, 'name': 'Histogram' }, { 'value': 3, 'name': 'Quantile' }, { 'value': 3, 'name': 'Treemap' }, { 'value': 3, 'name': 'Hexagon' }, { 'value': 3, 'name': 'Binning' }, { 'value': 3, 'name': 'kernel' }, { 'value': 3, 'name': 'Regression' }, { 'value': 3, 'name': 'Density' }, { 'value': 3, 'name': 'Sankey' }, { 'value': 3, 'name': 'Voronoi' }, { 'value': 3, 'name': 'Projection' }, { 'value': 3, 'name': 'Centroid' }, { 'value': 3, 'name': 'H5' }, { 'value': 3, 'name': 'Mobile' }, { 'value': 3, 'name': 'K线图' }, { 'value': 3, 'name': '关系图' }, { 'value': 3, 'name': '烛形图' }, { 'value': 3, 'name': '股票图' }, { 'value': 3, 'name': '直方图' }, { 'value': 3, 'name': '金字塔图' }, { 'value': 3, 'name': '分面' }, { 'value': 3, 'name': '南丁格尔玫瑰图' }, { 'value': 3, 'name': '饼图' }, { 'value': 3, 'name': '线图' }, { 'value': 3, 'name': '点图' }, { 'value': 3, 'name': '散点图' }, { 'value': 3, 'name': '子弹图' }, { 'value': 3, 'name': '柱状图' }, { 'value': 3, 'name': '仪表盘' }, { 'value': 3, 'name': '气泡图' }, { 'value': 3, 'name': '漏斗图' }, { 'value': 3, 'name': '热力图' }, { 'value': 3, 'name': '玉玦图' }, { 'value': 3, 'name': '直方图' }, { 'value': 3, 'name': '矩形树图' }, { 'value': 3, 'name': '箱形图' }, { 'value': 3, 'name': '色块图' }, { 'value': 3, 'name': '螺旋图' }, { 'value': 3, 'name': '词云' }, { 'value': 3, 'name': '词云图' }, { 'value': 3, 'name': '雷达图' }, { 'value': 3, 'name': '面积图' }, { 'value': 3, 'name': '马赛克图' }, { 'value': 3, 'name': '盒须图' }, { 'value': 3, 'name': '坐标轴' }, { 'value': 3, 'name': '' }, { 'value': 3, 'name': 'Jacques Bertin' }, { 'value': 3, 'name': 'Leland Wilkinson' }, { 'value': 3, 'name': 'William Playfair' }, { 'value': 3, 'name': '关联' }, { 'value': 3, 'name': '分布' }, { 'value': 3, 'name': '区间' }, { 'value': 3, 'name': '占比' }, { 'value': 3, 'name': '地图' }, { 'value': 3, 'name': '时间' }, { 'value': 3, 'name': '比较' }, { 'value': 3, 'name': '流程' }, { 'value': 3, 'name': '趋势' }, { 'value': 2, 'name': '亦叶' }, { 'value': 2, 'name': '再飞' }, { 'value': 2, 'name': '完白' }, { 'value': 2, 'name': '巴思' }, { 'value': 2, 'name': '张初尘' }, { 'value': 2, 'name': '御术' }, { 'value': 2, 'name': '有田' }, { 'value': 2, 'name': '沉鱼' }, { 'value': 2, 'name': '玉伯' }, { 'value': 2, 'name': '画康' }, { 'value': 2, 'name': '祯逸' }, { 'value': 2, 'name': '绝云' }, { 'value': 2, 'name': '罗宪' }, { 'value': 2, 'name': '萧庆' }, { 'value': 2, 'name': '董珊珊' }, { 'value': 2, 'name': '陆沉' }, { 'value': 2, 'name': '顾倾' }, { 'value': 2, 'name': 'Domo' }, { 'value': 2, 'name': 'GPL' }, { 'value': 2, 'name': 'PAI' }, { 'value': 2, 'name': 'SPSS' }, { 'value': 2, 'name': 'SYSTAT' }, { 'value': 2, 'name': 'Tableau' }, { 'value': 2, 'name': 'D3' }, { 'value': 2, 'name': 'Vega' }, { 'value': 2, 'name': '统计图表' }]
    },
    useImage: {
      type: Boolean,
      default: true
    },
    useTooltip: {
      type: Boolean,
      default: true
    },
    // 图片地址(url/base64)
    imageSrc: {
      type: String,
      default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADICAMAAABlASxnAAAAhFBMVEX///8h3vT1/v/9//8l3/Tw/f4x4fVD4/Y34vX5/v8o3/R77Pk84vWY8PrI9/xc5/fr/P6v9Pul8vuf8fqG7vlW5vdK5fbT+f1w6vjh+/6M7vlq6fgs4PXZ+v3O+P289fy49fyC7fkr4PXm+/6S7/pl6Pd16/hh6Pep8/vC9vze+v3A9vzdw9osAAAESUlEQVR42u3dCZaiMBAG4Co2AREEEcV9t2fm/veb1Z5+M7aiBCyS/ztCHkkqtSgBAAAAAAAAAAAAAAAAAAAAAAAA6M6Ns3w+LnwvZPa8qDj3B+kyIPiHvRocfb7GKfrpnuDCfZsv+KbeNrYJyErPDlfgbydkuK9bjysrMpMPsNWRH+MdXDLTKuHHLWYmLlc55+d4mWlnfTAL+Wm9mEwS97iWvjl7Mci5rsiUj+trwQrMjDi5NgtWIhmS7uwZqxItSW/BlNVZfCOdWQmr5KSkL3fMimWkK2vM3PBqWZM0G8y2eX7I1p3OG1pjbkD6N394SHz+yOmdspI6yT5yE5w1/eCmxx1f1cu7mAfrczPCJU1OO76hGFnULRk3xU/4Hq9biZ2Vwy+1OHTn63J9frVoTR1xZAHm3diLGYvgdyGxs1+wDM6IxDuzGH3pabANC3KU/QgKeizJWfRqDViWqeCdaHksTJ/EOrA4Yu9EeR8Ws7MimUYsUCQzlrdlXYUXc5LoC8u0IYHmLJMvMGPjOizUjMR5Y6l28qr/CYu1JWHk7kLmnbTwQVS+4V4cb7n7vWvRYzpQ/lKioD+CVZafeyH/Ekbj/igOqH0yI9KLCf3wdZCE/J9wPFhSu4Ys2pbcUXGrNjukFq1ZNP8U8k3OdEK36Z2dedT55nKZ8NZ5yOnzzWjQ+V6V92ZTC0LWw3FIVxh1GT7AX1HTVqwN540aVGbTiHUyo4aUh4K1s7VJPXsjOC9TR06q2ake8cI1A1Lri75L9UNKCg21CNk/F05ImVRKz1pjIovUsE6svykp8VXr0+rdmhSYCOz/+EhScfbLjg0xo7rWgkteioV7qifWJRfTQt/gUvuQ4SNnSDW4eqUXGn0j2pq+mz/lBfp0bl8n44m4NOcivDjSk+wxGye06DkpG2hNT7FeP6Fa1ev74Mw73X8qtBmfaIOrzfhEC2J6nG1Y7P5upF//VXP6tqEtRXeo+qVny5iM3zVJrE/jdguSpS6N221wZoFhjX21FKVxvWo1eHG35y7bFa7xLqzOiXG+V7dYdXuWsF3+EJdhdWeb7jEy7/fsw9qo0upt3t2NyPDuhMWqzinpNqNzDo+2ixiaf79uZyF0UFbTN7AWfUNCN00Z/goD3SegVYqRVVY12VMyfHDC47C6McqG1UVd/SWxV/BQsajOIYSllYXd+AMBGTw0O1QX0R1bhouE7tib1wT/qT5qhyqLFiU+rYsJ3ZUz/OLZdJdlag/uv6Zo/6vuC/2GhOl9vo1BVuU/6jMxaZz8E56FMbrKBpgNq6wX0AWiLaWDT/aMTZZjmK6ycUAP2hh7JxYuPWxpaKNItKcnWEbG8r09PWdjXjA/dulZVm5YfisPqIZyatBy9WKqqewbUvPxBgHVZ2UGVF/9gUWKDN/mOvfYeNO1TUqVOoYSiyjpj5aC/1wZAAAAAAAAAAAAAAAAAAAAAAAA4N13ldiNbr8pwIsAAAAASUVORK5CYII='
    },
    // 内边距
    padding: {
      type: Array,
      default: function () {
        return [0, 0]
      }
    }
  },
  methods: {
    setChartConfig: function (data) {
      if (data === '' || data === null || data.length === 0) {
        data = [{ 'value': 20, 'name': '暂无数据' }, { 'value': 0, 'name': '' }]
      }

      function getTextAttrs (cfg) {
        return {
          ...cfg.style,
          fillOpacity: cfg.opacity,
          fontSize: cfg.origin._origin.size,
          rotate: cfg.origin._origin.rotate,
          text: cfg.origin._origin.text,
          textAlign: 'center',
          fontFamily: cfg.origin._origin.font,
          fill: cfg.color,
          textBaseline: 'Alphabetic'
        }
      }

      // 给point注册一个词云的shape
      this.G2.Shape.registerShape('point', 'cloud', {
        drawShape: function drawShape (cfg, container) {
          var attrs = getTextAttrs(cfg)
          return container.addShape('text', {
            attrs: {
              ...attrs,
              x: cfg.x,
              y: cfg.y
            }
          })
        }
      })

      var dv = new this.DataSet.View().source(data)
      var range = dv.range('value')
      var min = range[0]
      var max = range[1]
      let _this = this
      if (this.useImage) {
        var imageMask = new Image()
        imageMask.src = this.imageSrc
        imageMask.onload = (ev) => {
          _this.drawCloud(_this, dv, min, max, imageMask)
        }
      } else {
        _this.drawCloud(_this, dv, min, max, imageMask)
      }
    },
    drawCloud (_this, dv, min, max, imageMask) {
      if (_this.chart) {
        _this.chart.destroy()
      }
      const dom = document.getElementById(this.id)
      if (dom && dom.innerHTML) {
        dom.innerHTML = ''
      }
      // 新建实例
      _this.chart = new this.G2.Chart({
        container: _this.id,
        width: dom.offsetWidth || 800,
        height: dom.offsetHeight || 500,
        padding: _this.padding || ['auto', 'auto']
      })

      dv.transform({
        type: 'tag-cloud',
        fields: ['name', 'value'],
        imageMask: imageMask,
        font: 'Verdana',
        size: [dom.offsetWidth || 800, dom.offsetHeight || 500],
        padding: 0,
        timeInterval: 5000,
        rotate: function rotate () {
          var random = ~~(Math.random() * 3) % 3
          if (random === 2) {
            random = -1
          }
          return random * 45
        },
        fontSize: function fontSize (d) {
          return (d.value - min) / (max - min) * (32 - 8) + 8
        }
      })
      // 挂载数据
      _this.chart.source(dv, {
        x: {
          nice: false
        },
        y: {
          nice: false
        }
      })

      // 关闭图例
      _this.chart.legend(false)

      // 关闭坐标轴
      _this.chart.axis(false)

      // 选择坐标系
      _this.chart.coord().reflect()

      const point = _this.chart.point().position('x*y').color('text').shape('cloud')

      // 是否使用tooptip
      if (_this.useTooltip) {
        _this.chart.tooltip({
          showTitle: false
        })
        point.tooltip('name*value')
      } else {
        _this.chart.tooltip(false)
      }

      // 绘制
      _this.chart.render()
    }
  }
}
</script>
