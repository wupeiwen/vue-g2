/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-09-28 10:56:50
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-28 16:12:24
 * @Description: 词云
 */

<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'
import DataSet from '@antv/data-set'

export default {
  name: 'g2-pie',
  props: {
    data: {
      type: Array,
      default: () => [{ 'value': 9, 'name': 'AntV' }, { 'value': 8, 'name': 'F2' }, { 'value': 8, 'name': 'G2' }, { 'value': 8, 'name': 'G6' }, { 'value': 8, 'name': 'DataSet' }, { 'value': 8, 'name': '墨者学院' }, { 'value': 6, 'name': 'Analysis' }, { 'value': 6, 'name': 'Data Mining' }, { 'value': 6, 'name': 'Data Vis' }, { 'value': 6, 'name': 'Design' }, { 'value': 6, 'name': 'Grammar' }, { 'value': 6, 'name': 'Graphics' }, { 'value': 6, 'name': 'Graph' }, { 'value': 6, 'name': 'Hierarchy' }, { 'value': 6, 'name': 'Labeling' }, { 'value': 6, 'name': 'Layout' }, { 'value': 6, 'name': 'Quantitative' }, { 'value': 6, 'name': 'Relation' }, { 'value': 6, 'name': 'Statistics' }, { 'value': 6, 'name': '可视化' }, { 'value': 6, 'name': '数据' }, { 'value': 6, 'name': '数据可视化' }, { 'value': 4, 'name': 'Arc Diagram' }, { 'value': 4, 'name': 'Bar Chart' }, { 'value': 4, 'name': 'Canvas' }, { 'value': 4, 'name': 'Chart' }, { 'value': 4, 'name': 'DAG' }, { 'value': 4, 'name': 'DG' }, { 'value': 4, 'name': 'Facet' }, { 'value': 4, 'name': 'Geo' }, { 'value': 4, 'name': 'Line' }, { 'value': 4, 'name': 'MindMap' }, { 'value': 4, 'name': 'Pie' }, { 'value': 4, 'name': 'Pizza Chart' }, { 'value': 4, 'name': 'Punch Card' }, { 'value': 4, 'name': 'SVG' }, { 'value': 4, 'name': 'Sunburst' }, { 'value': 4, 'name': 'Tree' }, { 'value': 4, 'name': 'UML' }, { 'value': 3, 'name': 'Chart' }, { 'value': 3, 'name': 'View' }, { 'value': 3, 'name': 'Geom' }, { 'value': 3, 'name': 'Shape' }, { 'value': 3, 'name': 'Scale' }, { 'value': 3, 'name': 'Animate' }, { 'value': 3, 'name': 'Global' }, { 'value': 3, 'name': 'Slider' }, { 'value': 3, 'name': 'Connector' }, { 'value': 3, 'name': 'Transform' }, { 'value': 3, 'name': 'Util' }, { 'value': 3, 'name': 'DomUtil' }, { 'value': 3, 'name': 'MatrixUtil' }, { 'value': 3, 'name': 'PathUtil' }, { 'value': 3, 'name': 'G' }, { 'value': 3, 'name': '2D' }, { 'value': 3, 'name': '3D' }, { 'value': 3, 'name': 'Line' }, { 'value': 3, 'name': 'Area' }, { 'value': 3, 'name': 'Interval' }, { 'value': 3, 'name': 'Schema' }, { 'value': 3, 'name': 'Edge' }, { 'value': 3, 'name': 'Polygon' }, { 'value': 3, 'name': 'Heatmap' }, { 'value': 3, 'name': 'Render' }, { 'value': 3, 'name': 'Tooltip' }, { 'value': 3, 'name': 'Axis' }, { 'value': 3, 'name': 'Guide' }, { 'value': 3, 'name': 'Coord' }, { 'value': 3, 'name': 'Legend' }, { 'value': 3, 'name': 'Path' }, { 'value': 3, 'name': 'Helix' }, { 'value': 3, 'name': 'Theta' }, { 'value': 3, 'name': 'Rect' }, { 'value': 3, 'name': 'Polar' }, { 'value': 3, 'name': 'Dsv' }, { 'value': 3, 'name': 'Csv' }, { 'value': 3, 'name': 'Tsv' }, { 'value': 3, 'name': 'GeoJSON' }, { 'value': 3, 'name': 'TopoJSON' }, { 'value': 3, 'name': 'Filter' }, { 'value': 3, 'name': 'Map' }, { 'value': 3, 'name': 'Pick' }, { 'value': 3, 'name': 'Rename' }, { 'value': 3, 'name': 'Filter' }, { 'value': 3, 'name': 'Map' }, { 'value': 3, 'name': 'Pick' }, { 'value': 3, 'name': 'Rename' }, { 'value': 3, 'name': 'Reverse' }, { 'value': 3, 'name': 'sort' }, { 'value': 3, 'name': 'Subset' }, { 'value': 3, 'name': 'Partition' }, { 'value': 3, 'name': 'Imputation' }, { 'value': 3, 'name': 'Fold' }, { 'value': 3, 'name': 'Aggregate' }, { 'value': 3, 'name': 'Proportion' }, { 'value': 3, 'name': 'Histogram' }, { 'value': 3, 'name': 'Quantile' }, { 'value': 3, 'name': 'Treemap' }, { 'value': 3, 'name': 'Hexagon' }, { 'value': 3, 'name': 'Binning' }, { 'value': 3, 'name': 'kernel' }, { 'value': 3, 'name': 'Regression' }, { 'value': 3, 'name': 'Density' }, { 'value': 3, 'name': 'Sankey' }, { 'value': 3, 'name': 'Voronoi' }, { 'value': 3, 'name': 'Projection' }, { 'value': 3, 'name': 'Centroid' }, { 'value': 3, 'name': 'H5' }, { 'value': 3, 'name': 'Mobile' }, { 'value': 3, 'name': 'K线图' }, { 'value': 3, 'name': '关系图' }, { 'value': 3, 'name': '烛形图' }, { 'value': 3, 'name': '股票图' }, { 'value': 3, 'name': '直方图' }, { 'value': 3, 'name': '金字塔图' }, { 'value': 3, 'name': '分面' }, { 'value': 3, 'name': '南丁格尔玫瑰图' }, { 'value': 3, 'name': '饼图' }, { 'value': 3, 'name': '线图' }, { 'value': 3, 'name': '点图' }, { 'value': 3, 'name': '散点图' }, { 'value': 3, 'name': '子弹图' }, { 'value': 3, 'name': '柱状图' }, { 'value': 3, 'name': '仪表盘' }, { 'value': 3, 'name': '气泡图' }, { 'value': 3, 'name': '漏斗图' }, { 'value': 3, 'name': '热力图' }, { 'value': 3, 'name': '玉玦图' }, { 'value': 3, 'name': '直方图' }, { 'value': 3, 'name': '矩形树图' }, { 'value': 3, 'name': '箱形图' }, { 'value': 3, 'name': '色块图' }, { 'value': 3, 'name': '螺旋图' }, { 'value': 3, 'name': '词云' }, { 'value': 3, 'name': '词云图' }, { 'value': 3, 'name': '雷达图' }, { 'value': 3, 'name': '面积图' }, { 'value': 3, 'name': '马赛克图' }, { 'value': 3, 'name': '盒须图' }, { 'value': 3, 'name': '坐标轴' }, { 'value': 3, 'name': '' }, { 'value': 3, 'name': 'Jacques Bertin' }, { 'value': 3, 'name': 'Leland Wilkinson' }, { 'value': 3, 'name': 'William Playfair' }, { 'value': 3, 'name': '关联' }, { 'value': 3, 'name': '分布' }, { 'value': 3, 'name': '区间' }, { 'value': 3, 'name': '占比' }, { 'value': 3, 'name': '地图' }, { 'value': 3, 'name': '时间' }, { 'value': 3, 'name': '比较' }, { 'value': 3, 'name': '流程' }, { 'value': 3, 'name': '趋势' }, { 'value': 2, 'name': '亦叶' }, { 'value': 2, 'name': '再飞' }, { 'value': 2, 'name': '完白' }, { 'value': 2, 'name': '巴思' }, { 'value': 2, 'name': '张初尘' }, { 'value': 2, 'name': '御术' }, { 'value': 2, 'name': '有田' }, { 'value': 2, 'name': '沉鱼' }, { 'value': 2, 'name': '玉伯' }, { 'value': 2, 'name': '画康' }, { 'value': 2, 'name': '祯逸' }, { 'value': 2, 'name': '绝云' }, { 'value': 2, 'name': '罗宪' }, { 'value': 2, 'name': '萧庆' }, { 'value': 2, 'name': '董珊珊' }, { 'value': 2, 'name': '陆沉' }, { 'value': 2, 'name': '顾倾' }, { 'value': 2, 'name': 'Domo' }, { 'value': 2, 'name': 'GPL' }, { 'value': 2, 'name': 'PAI' }, { 'value': 2, 'name': 'SPSS' }, { 'value': 2, 'name': 'SYSTAT' }, { 'value': 2, 'name': 'Tableau' }, { 'value': 2, 'name': 'D3' }, { 'value': 2, 'name': 'Vega' }, { 'value': 2, 'name': '统计图表' }]
    },
    id: String,
    height: {
      type: Number,
      default: 300
    },
    width: {
      type: Number,
      default: 185.4
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: () => {
        return {
          name: 'name',
          value: 'value'
        }
      }
    },
    // 图例配置
    legendOption: {
      type: Object,
      default: () => {
        return {
          show: true,
          position: 'bottom-center'
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
      function getTextAttrs (cfg) {
        let _ = Object
        return _.assign({}, {
          fillOpacity: cfg.opacity,
          fontSize: cfg.origin._origin.size,
          rotate: cfg.origin._origin.rotate,
          text: cfg.origin._origin.text,
          textAlign: 'center',
          fontFamily: cfg.origin._origin.font,
          fill: cfg.color,
          textBaseline: 'Alphabetic'
        }, cfg.style)
      }

      // 给point注册一个词云的shape
      G2.Shape.registerShape('point', 'cloud', {
        drawShape: function drawShape (cfg, container) {
          var attrs = getTextAttrs(cfg)
          let _ = Object
          return container.addShape('text', {
            attrs: _.assign(attrs, {
              x: cfg.x,
              y: cfg.y
            })
          })
        }
      })

      var dv = new DataSet.View().source(this.data)
      var range = dv.range('value')
      var min = range[0]
      var max = range[1]
      var imageMask = new Image()
      imageMask.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAADMCAYAAABeHzmZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVEQzlGOUFGODBDMTExRThCMzgzOTA5MDkwRURBREMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVEQzlGOUIwODBDMTExRThCMzgzOTA5MDkwRURBREMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NURDOUY5QUQ4MEMxMTFFOEIzODM5MDkwOTBFREFEQzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NURDOUY5QUU4MEMxMTFFOEIzODM5MDkwOTBFREFEQzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz74fzndAAARAklEQVR42uydeXMaSRJHCyR0WNblS7LH2tndP+zv/3EmNmJ3ZiRb940ESCC2fpDYWOKmj+ru9yIqcIRtCQr6kZ2VlVXa+fzliwMAgOBYZApgQlp+PNpjbzz50ba/15/L9ueS/Xmhb1TsEQAQNMwh4rofDRsPEvPR/h9P8/7g3b2vJRP1so0lP1b4HAIgaBhM0497G3Uv4oe4fpH/2W0TvsZtn7j1OXzlx6o9VnhbABB0UWmYIO/0Zy/OVJ+M//36krixIWErsl7zY90ibAAEDbmPlK8l5jij5IiE3YuyL72sKybqDddNiQAgaMgNVRPzXdqR8oyy1sLkhRf1heumPzb9eO26C5Eh03o22n2jR7nvsX9BtczHFhB0fmmblC9NcJnHvlw6uXLLWW+brNOUme5Keoupj32jafn2mfCvr2zXZsXuGjR6i6rIu0CUqIPOnZivFHF6QbTy/mJNZNs2ygnMrapbajbqSc+xf73O/ax8WbVB2gdBQ0Yi5gtbcCsUXlxKC7zxY8tFm/pQHvzORm2eqDjG196rgFmzR2rNETQEhORxGvrCX0KyUkrgvevmqGelV+FSzdqcWp25oup1mwNkjaAhJZom5lum4oWoFE1+cJPXU2sTjkr8rv18NnIyByWLqjftERA0JMSNybnFVAwVlHLSb103Pz0qWr503dLDdo7nQmmQLZM1UTWChpiQkI+8TO6YionlpFv+j+7XiiXNnypc7gs2FyWT9LZjtyaChkiRVI6LuAgYgZgUNSrloaj63M9hveDzIVGv2x0GokbQMCfnJhZmAqIW9YaJmj0RAcKbEjZavDokpQFxYHn3ay9qLTSrTFGpjxIzg6BhPEplHFA+BwmIWoHAmRe1aumVCqLqIxDYNhomqi74GzlDwqJW3+9vumtz3QVpQNDwDG0j3mcxEFIUtVIef7q+nt2AoKHbDOggitNLAOaUdMsPRdJHrrsWAgi68HL+lucNE5BJUWtT1F+u2ygKEHQhqSFnCFjSaqG677oNuQBBF4oGcoYMSLrtx7H/owafVQRdCJomZ3J8kBVRK4pWpQdVHgg61zyZnKnWgKxJWuslSnk8MhsIOref87y0toRCSvrBJE2tPoLOHTr5pMo0QMYl3TRJE2gg6Nyg28MzpgFyIumWSZoyPASdeXr9nJkJyJOkO+spRNIIOuucsCgIOY6kDxw5aQSdUW45PxAKImmCEASdKfTBPWEaoACS7tT2OzazIOgMccYBr1AgSSsXfchMIOgsoNVtehhA0SStMlKqlRB08JxQtQEF5cIP6v0RdLDcFv0EaSh0FN15cFR2IOgAaXOLB0i6UyN95Fg0RNCBcWN9dAGKLmndRZ4zEwg6pOj5gmkA+IGuhxrTgKBDoEr0DPBLFN15cJxviKADiRYA4FdJK2gh1YGgU6VGn2eAoVw5mioh6BRhUwrA8Cha6zOnzASCThp98C79oCESwGhJqyc6G1gmYJEpiETMipovaCUKMDGKotf8KDEVCDouFAWcUrEBMHUU/bi791WBzRazgaCjRkI+tls1AJgNVTttEkUPhxz0dPQ2oPyJnAHmjqKVErxiJoigo4qadZ4gu6EAokML61tE0UTQ86DKjL+QM0AsUfQNM0EEPQudmk3/IeI2DCDeKHqTaSCCnobOAZjIGSD2KFr9ou+YCQQ9Kco375PSAEgMduAOgBTHSxoWOXPIK0ByKIJu4iQi6FHULXJGzgAJYj06WCxE0CPlfGBH9ABA8tDHBkEPpIGcAVKPonUdcsAsgv6FR+QMQBSNoMOjV0pHzhkgDGhDiqA7aFHiO53oAIJCaQ7a9iJod0adM0BY2OGybFopuKBv/QfhkrcfIEjoFFlgQXd6OfPWAyBoBB0eh1RsAISLLdpTbldAQevcwDpvO0DwcJ0WTNBKbZzzlgNkAhbwCyboY9vvDwDh02AKiiPoKmcIAmQKctAFEXTnVBTeaoDsYAv5hd9EVgRBX7FbEIAoGkGHGT1f8DkHyCRE0AWInmmEBICgM0mej5dR9Mx2boDsC1r56F6g1XssWYCpxwV7RNAB0v/m9XPno2e6YgFkFzVN+s8k5bG7e1/L5jONih9LfizbWMjqBJR2Pn/5koHnKdFqZ9GDjUcbLWqbAWCMvCXrFT9W/VjLUmAa6hOVkO/tG7RGJAwAs+L90QvsbkzYyybqdYuwEfQEKE1xa5NYt76wAABRC1u7FDUuLLre8GPTBZgKCUHQVZPyHekKAEghuj7zolafntd+bLtuOqTQgpaIr/24ZBMJAAQg6rbdwd96WStX/daPV0UTdE/MF+SVASBQWauT3oGJ+n2aEXWSgtaC36ndUgAABC9qL+m/XXcx8X0KAW0iv1CR8ol/sRynDgBZk7QelPZQgKm0x3aeBK2czjFHTAFAxkUth516Uctpu667ESZ24urF0TYxc/4fAORJ1Nowp7THTVYjaOWYD63WEAAgj9H0kY+mtZj4wcXYByTqCFp5mr+RMwAUQNTXFk3HVvgQpaD1ZL+T0gCAAklawei+i+kU8qgErab4HMoKAEWUtNpUHFgGIThBa9PJGb0zAKDAklbm4LvrVq4FI2ht1T7j7QEAJN3JIBz6cRWCoFVmwmnZAAA/Ja2HExdRGd6sglav5mPSGgAAAyV95LqdOhMXtLZuH7IgCAAwUtJKd8xV3TGtoCXl75yUDQAwVtLy5Tc3x+nk0wr6zLY6AgDAeEm3LJKeKeMwjaCVd75kygEAppK0gtqTOAWtGj8WBQEAZpO0dlpPXSM9qaDPOZoKAGAuFEVPdZLUJIJWI5Ar5hYAYK4oWvno46gFfUpJHQBAJJJWv46JUx3jBF2zHwgAANGgVMdEXT/HCZo+GwAA0UbRSnWczyvomh0/DgAA0aJ1vbGFF6METc0zAEA8UbTW9cZmKIYJWmavMo0AALGhxcKHWQR9w6YUAIBYo2g9XMwi6GumDwAgkSi6OY2gtTjYZN4AAGKPopWLvppG0LdMGwBAYuj0lfakgmZjCgBAclF0c5h3nwv6gaZIAACpRNFjBc3GFACA5FEE/YSgAQACwxYLqwgaACDcKHqooBVek38GAEiH+1GCfmD3IABAOliXu/pQQTNFAACpUhsmaNIbAAAIGgAABjA0xfHE3AAApIftKmwNEjQNkgAA0qcxSNCc3A0AkD4PCBoAIEyagwRNDhoAIH0eBwl6gXkBAEidgYuEAACQPgNTHMgaACDQCJoUBwBA+rQRNABAhgRdYV4AANLFmve/EPQiUwMAkC67e1/dIEEvMTUAAKlTHijofnMDAEAqlAYJukwUDQAQZgQtVpgbAIBUWRgm6FXmBgAgVRaHCfoVcwMAEKagK7t7X8lDAwCkR2WYoMUa8wMAEKag15kfAIDUWB4l6JXdva9s+wYASBjv3vK4CFpsMlUAAOlFz6MEveFNXmKuAAASZXUSQavM4zVzBQAQnqDFG+YKACAZLGsxsaCX/X+g5A4AIBlWnjt53DmEb+lwBwCQCC8C4nGCltHJRQMAxM/6tIIW76noAACID+9YBcOVWQSt/8SCIQBAgtHzpIIWb2iiBAAQS/SsDMXGPILWD9hlwRAAIHK0zrcwj6CFciRvmUsAgEjZHvYX5Sl/kMruOHUFACACbHFwJSpBi0/+hy4ytQAAczOyAGMWQS+YpCm9AwCYPXpW57rXUQvaWUj+kUVDAICZeTfuH5Tn+OEyP5UdAADTR886oHtsr6PynL9HtXsfkDQAwMRy1sP7Sf5tOYLft+XHDpIGAJjYmctJCVroiKyPLBwCAIyMntU6492k/74c4e/WXvLP/gks8DYAALyQsx4+TOPdcsTPQZtYfmczCwDAC5TamOoQlHIMT2LRIuk35KUBAH7UPL+f9v+VY3o+ykW/M1Gz6xAAiixnefajeTEIQfdQrd8//RPcJJoGgALKufPgx0ztmssJPEf9jh0//mGNQQAAioIyCTMfG5hk+mHFJH3rH8+P9v94yNgtipqatP3zPuczBwATeGPLzXkaVWnn85cvKT1/ifrCC68R8ASrZFC9WrfsTqDpx3/9c+bTBwCj3KGo+dO8PyfNBTzVTa/7F1Lzj9cSthdfO4CJ1YPKBDftOZaezZfy6vd8BAFgiENUSvcxip8VQoXFqg319KhaZH2ftKytDGbdRmXEP91A0AAwxCPyx66boWJjEGmmOEbxZBLUUITdiDqtYOV/qxYRr03xZaXn9j//fFp8HAGgzylKhX6I8meGWqOsfO9r93P188m/eOWqNbS4+Oi6+WBJsjUs2rYc8oK9zoqNZRuLczw35aXP+EgCgLlG57VGfmZrqBH0LBF3v6RLLt4SQv0+LRY+8dEEKLSYSxY1b8bx8/Oyy6+cwu/T7cwFH1GAwspZ/tRiYGy9h8pM88xs07kPoLBy1trVP+KUc54i6DSQnLVL6JipACiMmHt9hrbzmBrIG5tsXwcojJw77ZSTkjOCjgaO+wLIt5gX/FA/oT03Y9OjWSHFMT8q2VN5DT06APIlZqUztuz6TiWYJYKOhjekOmCCC55JyIiY1SLZ//FfrttkPzVPIuho0DftJ6o6Rn7oFwv++jsPfJEH/R6V/dg2Me+EkGFA0NHRqYnkZPOBH3zdJv5uJxoXFa38b9hnhOsurM/niuWY/20RczDBBB+UaFFtJIuGv374tV1fO610d1HII9Ce9QWuWHQG6b4nS3ZuqqoyVM+8GaIPWSSMHkVJ6hNyxkXQKUvqb7tYMUkfHO3/0SzIHGy4lw101Ga37ufgksslufSF+7U52lIWnndeenGEyHmRT1+x9q17Q6ISNbuSpB8LEDmP6m723c9BlUvlRw9lfVbUEO1xnnbDtha0ZGPZxLycxXlB0PGiE2POCnix6YL4bcwtozoRfvPzU8/h69fDOzf+uKO2fVHVCi7nQaePNO2LvNU3RK9BWalvPO9amZvULYKOH50WcxLCaTEJXmyTHjGvi+0oT1Gk3Uorx7w+4X/RHOyHfPRbApHzJxdRg/u8wSJh/Gjx4VMRVu6tdnSai61sc/MuD9UvWnhy3QWn9Smvwd8sJYScgQg6JXTQwGEeI6WIeuLWLZp+yODr18O2pTVmlU1uUz5D5izSo6EQNESB0hyn/iK8ytGFtmQpjeWI5keVDedZSQnZxhN9Oa1E9PoP875wqPI2+zIDBB0kd34cZ7nUrK9PwTxR4zAe7YusGvDr16LUW5uDqDm3L6k83mkpal5HAQg6dJ7sQrzK2gKiRY07Lv7SpbrN0V0osjIxb1lKI851BR2YfJSXevGI77QQNCRG8NFi30VWsYg56QhIeXulhW7TOgfSBCMxb7jkFteVl1YF0G2Gxezc/Pl5BA2po2hRZxxWQ7u1NTltm5zSvMgk51sb93HPk21Lf22vO80mR1UTdaaiaatM2Ul57hA0RB5RK1q88RdkK+XIZ82ixrUA50myrlkqQKMxr7CfbQd+FdjteG8B9SL00+Tti035+U0uZwSdV3RB3lm0WE0iT21SXrEUhkaWerU8WSrkwb7kervQnmz05q/sfu4+0+tb6htZ6LbXMlFfhSZqE/O2famTzkDQhZJ1zYStVEg9KmFbXrk/aqSBVna+kLRL9Trt2nFbNN6yL3XEjKARtkWKjb5osfksYvzxHlvU2OtXULHRayTDIQPZR1/eN3anlUhazL7Ye3daVGbEBNFSRr9Y7aLgwgBnd0Aa6kWuO6yqSTvKO61y3+9Z47OHoAFgelbcz6qJthdro+9uq79DnO6yWr2FVdtE8vxOa7EvEFhiahE0AER7p9Uv7EGRMbMUMHSzAwAIlP8LMABPzcsAZnsHSgAAAABJRU5ErkJggg=='
      let _this = this
      imageMask.onload = (ev) => {
      // 如果图形存在则销毁后再创建
        if (_this.chart) {
          _this.chart.destroy()
        }

        // 新建实例
        _this.chart = new G2.Chart({
          container: _this.id,
          forceFit: true,
          height: _this.height,
          padding: _this.padding
        })

        dv.transform({
          type: 'tag-cloud',
          fields: ['name', 'value'],
          imageMask: imageMask,
          font: 'Verdana',
          size: [_this.width, _this.height], // 宽高设置最好根据 imageMask 做调整
          padding: 0,
          timeInterval: 5000, // max execute time
          rotate: function rotate () {
            var random = ~~(Math.random() * 4) % 4
            if (random === 2) {
              random = 0
            }
            return random * 90 // 0, 90, 270
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

        // 配置颜色 tooltip
        _this.chart.tooltip({
          showTitle: false
        })

        // 选择坐标系
        _this.chart.coord().reflect()

        _this.chart.point().position('x*y').color('text').shape('cloud')

        // 渲染
        _this.chart.render()

        // 注册点击事件
        _this.chart.on('point:click', ev => {
          const data = ev.data._origin
          _this.$emit('itemClick', data)
        })

        // 销毁实例
        _this.$once('hook:beforeDestroy', function () {
          _this.chart.destroy()
        })
      }
    }
  },
  mounted () {
    this.drawChart(this.data)
  }
}
</script>
