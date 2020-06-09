<!--
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2019-03-29 13:50:04
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2020-06-09 13:57:14
-->
<template>
  <div :id="id"></div>
</template>

<script>
import chartMix from '@/utils/chart.js'
export default {
  name: 'g2-custom',
  mixins: [chartMix],
  props: {
    // 内边距
    padding: {
      type: Array || String,
      default: function () {
        return 'auto'
      }
    },
    option: {
      Type: Function
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    setChartConfig: function (data) {
      // 创建DataSet数据集实例
      let dataset = new this.DataSet()

      // 自定义构建
      this.option(this.chart, dataset, data)
    }
  }
}
</script>
