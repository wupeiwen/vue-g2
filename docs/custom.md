# 自定义图表(g2-custom)
>为了实现更多样的需求，目前可以通过`<g2-custom></g2-custom>`标签来实现自定义图表，实现过程可参考如下代码：
------
<vuep :options="{ 'lineNumbers': true, mode: 'text/x-vue', theme: 'darcula' }" template="#demo"></vuep>

<script v-pre type="text/x-template" id="demo">
<!-- 通过<g2-custom>标签实现简单柱图 -->
<template>
  <g2-custom style="height: 300px; width: 800px; margin: 0 auto;" :data="data" :option="customOption"></g2-custom>
</template>

<script>
// !!!注意: 在vue中使用时需要将"module.exports = {"改为"export default {"
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