<!--
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2018-08-21 13:44:57
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2020-06-10 09:39:30
-->
<template>
  <div :id="id"></div>
</template>

<script>
import mixinChart from '@/mixins/chart.js'

export default {
  name: 'g2-mirror-interval',
  mixins: [mixinChart],
  props: {
    // 数据
    data: {
      type: Array,
      default: () => [
        { name: '1997', value: 86085, type: 'America' },
        { name: '2007', value: 144776, type: 'America' },
        { name: '2017', value: 193868, type: 'America' },
        { name: '1997', value: 9616, type: 'China' },
        { name: '2007', value: 35715, type: 'China' },
        { name: '2017', value: 122503, type: 'China' }
      ]
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: () => {
        return {
          name: 'name',
          value: 'value',
          type: 'type'
        }
      }
    },
    // 坐标轴颜色 'rgba(0, 0, 0, 0.85)'
    axisColor: {
      type: Object,
      default: () => {
        return {
          labelColor: '#999'
        }
      }
    },
    useTooltip: {
      type: Boolean,
      default: true
    },
    // Canvas 内边距
    padding: {
      type: Array,
      default: function () {
        return ['auto', 'auto']
      }
    }
  },
  methods: {
    setChartConfig: function (data) {
      // 设置数据设置别名并且设置为异步数据
      let _this = this
      let scaleConfig = (function () {
        let obj = {}
        for (const key in _this.axisName) {
          if (_this.axisName.hasOwnProperty(key)) {
            obj[key] = {}
            obj[key]['alias'] = _this.axisName[key]
            obj[key]['sync'] = true
          }
        }
        return obj
      }())
      // 为 chart 装载数据
      this.chart.source(data, scaleConfig)

      const labelColor = this.axisColor.labelColor
      // 设置 mirror 分面
      this.chart.facet('mirror', {
        fields: ['type'],
        // 配置 transpose 属性为 true，可以将镜像分面翻转。
        transpose: true,
        // 列标题
        colTitle: {
          offsetY: -15,
          style: {
            fontSize: 14,
            textAlign: 'center',
            fill: labelColor
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
              autoRotate: false,
              textStyle: {
                fill: labelColor
              }
            }
          })
          // 隐藏 value 坐标轴
          view.axis('value', false)

          // 配置柱图的颜色、大小等
          view.interval().size(25).position('name*value').color('type')
        }
      })
      // 隐藏图例
      this.chart.legend(false)

      // 是否使用tooltip
      if (this.useTooltip) {
        // 配置tooltip
        this.chart.tooltip(true)
      } else {
        this.chart.tooltip(false)
      }
    }
  }
}
</script>
