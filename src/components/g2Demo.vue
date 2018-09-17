/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-19 22:10:34
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-17 17:11:29
 */
<template>
  <div>
    <g2-line :id="'line'" :isSmooth="true" :axisName="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-line>
    <g2-mirrorInterval :id="'mirrorInterval'" :padding="[50,50,50,50]"></g2-mirrorInterval>
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
