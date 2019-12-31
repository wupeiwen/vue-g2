### 自定义图表(g2-custom)
------
目前可以通过`<g2-custom></g2-custom>`标签来实现自定义图表，满足更复杂的业务需求。实现过程可参考如下代码：

<vuep :options="{ 'lineNumbers': false, mode: 'javascript', theme: 'darcula' }" template="#demo"></vuep>

<script v-pre type="text/x-template" id="demo">
<!-- 通过<g2-custom>标签实现简单柱图 -->
<template>
  <g2-custom :height="380" :option="customOption" 
    :data="data">
  </g2-custom>
</template>

<script>
module.exports = {
  name: 'app',
  data () {
    return {
      data: [
        { name: 'test1', value: 123 },
        { name: 'test2', value: 246 }
      ]
    }
  },
  methods: {
    customOption (chart, dataset, data) {
      <!-- chart 为图表实例，dataset 为数据集实例， data为图表数据 -->
      let dv = dataset.createView().source(data)
      chart.source(dv)
      chart.interval().position('name*value')
    }
  }
}
</script>

<style>
</style>
</script>