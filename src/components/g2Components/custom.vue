/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2019-03-29 13:50:04
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2019-03-29 15:59:01
 * @Type: 自定义图表
 */
<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'
import DataSet from '@antv/data-set'

export default {
  name: 'g2-custom',
  props: {
    // DOM 高度
    height: {
      type: Number,
      default: 500
    },
    // 内边距
    padding: {
      type: Array,
      default: function () {
        return ['auto', 'auto']
      }
    },
    option: {
      Type: Function
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

      // 创建DataSet数据集实例
      let dataset = new DataSet()

      // 自定义构建
      this.option(this.chart, dataset)

      // 绘制
      this.chart.render()
      // 销毁实例
      this.$once('hook:beforeDestroy', function () {
        this.chart.destroy()
      })
    }
  },
  created () {
    const uuidv4 = require('uuid/v4')
    this.id = uuidv4()
  },
  mounted () {
    this.drawChart(this.data)
  }
}
</script>
