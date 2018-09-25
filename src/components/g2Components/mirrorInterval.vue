/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-21 13:44:57
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-25 11:27:52
 * @Description: 镜像分面柱图
 */

<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'

export default {
  name: 'g2-mirrorInterval',
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
    // DOM ID
    id: String,
    // DOM 高度
    height: {
      type: Number,
      default: 500
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
    // Canvas 内边距
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

          // 配置柱图的颜色、大小等
          view.interval().size(25).position('name*value').color('type')
        }
      })
      // 隐藏图例
      this.chart.legend(false)

      // 绘制
      this.chart.render()

      // 销毁实例
      this.$once('hook:beforeDestroy', function () {
        this.chart.destroy()
      })
    }
  },
  mounted () {
    this.drawChart(this.data)
  }
}
</script>
