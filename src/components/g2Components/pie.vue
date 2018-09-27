/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-19 22:10:56
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-27 17:47:12
 * @Description: 饼图
 */
<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'
import DataSet from '@antv/data-set'
import { percentFormat, numFormat } from '@/utils/index'

export default {
  name: 'g2-pie',
  props: {
    data: {
      type: Array,
      default: () => [
        { name: '类目1', value: 2 },
        { name: '类目2', value: 1 },
        { name: '类目3', value: 3 }
      ]
    },
    id: String,
    height: {
      type: Number,
      default: 300
    },
    colorMap: {
      type: Array,
      default: () => {
        return G2.Global.colors_pie_16
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
    // value 数据是否是百分数（整数和百分数）
    isPercent: {
      type: Boolean,
      default: false
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
    // 图表类型 ring pie nightingale
    type: {
      type: String,
      default: 'ring'
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
      // 如果图形存在则销毁后再创建
      if (this.chart) {
        this.chart.destroy()
      }
      this.chart = new G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: this.padding
      })
      const ds = new DataSet()
      const dv = ds.createView()
        .source(data)
        .transform({
          type: 'percent',
          field: 'value',
          dimension: 'name',
          as: 'percent'
        })

      // 设置数据的显示别名
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
        formatter: val => {
          if (this.isPercent) {
            return percentFormat(val)
          } else {
            return numFormat(val)
          }
        }
      }
      // 为 chart 装载数据
      this.chart.source(dv, scaleConfig)

      if (this.guide.name) {
        this.chart.guide().html({
          position: ['50%', '50%'],
          html: `<div style="text-align: center;width: 10em;"><span style="color:rgba(0,0,0,0.65);font-size:12px">${this.guide.name}</span><br><span style="color:#000000;font-size:16px">${this.isPercent ? percentFormat(this.guide.value) : numFormat(this.guide.value)}</span></div>`,
          alignX: 'middle',
          alignY: 'middle'
        })
      }

      this.chart.tooltip({
        showTitle: false,
        itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value} (占比{percent})</li>'
      })

      let interval = ''
      if (this.type === 'ring') {
        this.chart.coord('theta', {
          innerRadius: 0.75
        })
        interval = this.chart.intervalStack().position('value')
      } else if (this.type === 'pie') {
        this.chart.coord('theta', {
          innerRadius: 0
        })
        interval = this.chart.intervalStack().position('value')
      } else if (this.type === 'nightingale') {
        this.chart.coord('polar', {
          innerRadius: 0.2
        })
        interval = this.chart.interval().position('name*value')
      }

      this.chart.axis(false)

      interval.color('name', this.colorMap).style({
        lineWidth: 3,
        stroke: '#fff'
      }).tooltip('name*value*percent', (name, value, percent) => {
        return {
          name: name,
          value: this.isPercent ? percentFormat(value) : numFormat(value),
          percent: percent
        }
      })

      if (this.legendOption.show) {
        this.chart.legend('name', {
          position: this.legendOption.position
        })
      } else {
        this.chart.legend(false)
      }

      this.chart.render()
      let vue = this
      this.chart.on('interval:click', ev => {
        const data = ev.data._origin
        vue.$emit('itemClick', data)
      })
    }
  },
  mounted () {
    this.drawChart(this.data)
  }
}
</script>
