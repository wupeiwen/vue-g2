/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-19 22:10:34
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-17 19:56:39
 */
<template>
  <div>
    <g2-line :id="'line'" :isSmooth="true" :padding="['auto', 100]" :axisName="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-line>
    <g2-mirrorInterval :id="'mirrorInterval'" :padding="[50, 100]"></g2-mirrorInterval>
    <div style="width: 300px;margin: auto;">
      <g2-liquidfill :id="'liquidfill'" :height="300" :axisName="{name:'国家', value:'GDP占比'}"></g2-liquidfill>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  methods: {},
  mounted () {}
}
</script>
