<!--
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2018-08-19 22:10:56
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2020-06-10 09:39:44
-->
<template>
  <div :id="id"></div>
</template>

<script>
import mixinChart from '@/mixins/chart.js'
import { percentFormat } from '@/utils/index'

export default {
  name: 'g2-pie',
  mixins: [mixinChart],
  props: {
    data: {
      type: Array,
      default: () => [
        { name: '2016', value: 2 },
        { name: '2017', value: 1 },
        { name: '2018', value: 3 }
      ]
    },
    colorMap: {
      type: Array,
      default: () => {
        return ['#1890FF', '#73C9E6', '#13C2C2', '#6CD9B3', '#2FC25B', '#9DD96C', '#FACC14', '#E6965C', '#F04864', '#D66BCA', '#8543E0', '#8E77ED', '#3436C7', '#737EE6', '#223273', '#7EA2E6']
      }
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
    // 辅助元素内容
    guide: {
      type: Object,
      default: () => {
        return {}
      }
    },
    useTooltip: {
      type: Boolean,
      default: true
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
    labelOption: {
      type: Object,
      default: () => {
        return {
          show: false,
          offset: 20
        }
      }
    },
    // 图表类型 ring pie nightingale
    type: {
      type: String,
      default: 'ring'
    },
    innerRadius: {
      type: Number,
      default: null
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
      // 生成占比数据percent
      const ds = new this.DataSet()
      const dv = ds.createView()
        .source(data)
        .transform({
          type: 'percent',
          field: 'value',
          dimension: 'name',
          as: 'percent'
        })

      // 设置数据的显示别名并格式化数据
      let _this = this
      let scaleConfig = (function () {
        let obj = {}
        for (const key in _this.axisName) {
          if (_this.axisName.hasOwnProperty(key)) {
            obj[key] = {}
            obj[key]['alias'] = _this.axisName[key]
          }
        }
        return obj
      }())
      scaleConfig.percent = {}
      scaleConfig.percent = {
        alias: '占比',
        formatter: val => {
          return percentFormat(val)
        }
      }
      // 为 chart 装载数据
      this.chart.source(dv, scaleConfig)

      // 配置辅助元素
      if (this.guide.name || this.guide.value) {
        this.chart.guide().html({
          position: ['50%', '50%'],
          html: `<div style="text-align: center;width: 10em;">
              <span style="color:rgba(0,0,0,0.65);font-size:${this.height / 15}px">${this.guide.name ? this.guide.name : ''}</span><br>
              <span style="color:#000000;font-size:${this.height / 10}px">${this.guide.value ? this.guide.value : ''}</span>
            </div>`,
          alignX: 'middle',
          alignY: 'middle'
        })
      }

      let interval = ''
      // 根据图表类型(ring,pie,nightingale)选择不同的坐标系(theta,polar)以及设置内半径
      if (this.type === 'ring') {
        this.chart.coord('theta', {
          innerRadius: this.innerRadius === null ? 0.75 : this.innerRadius
        })
        interval = this.chart.interval().adjust('stack').position('value')
      } else if (this.type === 'pie') {
        this.chart.coord('theta', {
          innerRadius: this.innerRadius === null ? 0 : this.innerRadius
        })
        interval = this.chart.interval().adjust('stack').position('value')
      } else if (this.type === 'nightingale') {
        this.chart.coord('polar', {
          innerRadius: this.innerRadius === null ? 0.2 : this.innerRadius
        })
        interval = this.chart.interval().position('name*value')
      }

      // 关闭坐标轴
      this.chart.axis(false)

      // 配置颜色
      interval.color('name', this.colorMap)

      //  是否使用tooltip
      if (this.useTooltip) {
        // 配置 tooltip
        this.chart.tooltip({
          showTitle: false
        })
        interval.tooltip('name*value*percent')
      } else {
        this.chart.tooltip(false)
      }

      // 配置文本
      if (this.labelOption.show) {
        interval.label('percent', {
          offset: this.labelOption.offset,
          formatter: function formatter (val, item) {
            return item.point.name + ': ' + val
          }
        })
      }

      // 配置图例
      if (this.legendOption.show) {
        this.chart.legend('name', {
          position: this.legendOption.position
        })
      } else {
        this.chart.legend(false)
      }
    }
  }
}
</script>
