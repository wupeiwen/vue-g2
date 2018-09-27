/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-19 22:10:34
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-27 15:23:21
 */
<template>
  <div>
    <g2-line :id="'line'" :isSmooth="true" :axisName="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-line>
    <!-- <g2-radar :id="'radar'" :isShowArea="false" :showLegend="false"></g2-radar> -->
    <g2-mirrorinterval :id="'mirrorInterval'" :padding="[50, 100]"></g2-mirrorinterval>
    <div style="width: 300px;margin: auto;">
      <g2-liquidfill :id="'liquidfill'" :padding="[50, 'auto']" :maxValue="1" :isPercent="true" :data="[{ name: '中国', value: 0.6 }]"
      :axisName="{name:'国家', value:'GDP占比'}"></g2-liquidfill>
    </div>
    <g2-bubble :id="'bubble'" :padding="[60, 'auto']"></g2-bubble>
    <g2-scatterpoint :id="'scatterpoint'" :data="[{ x: 20, y: 5 },{ x: 30, y: 10 }]"></g2-scatterPoint>
    <g2-scatterpoint :id="'scatterpoint2'" :showLegend="true"
      :data="[{ x: 20, y: 5, type: 'type1' },{ x: 20, y: 10, type: 'type2' },
       { x: 30, y: 10, type: 'type1' },{ x: 30, y: 5, type: 'type2' },
       { x: 20, y: 7, type: 'type3' },{ x: 15, y: 14, type: 'type4' }]">
    </g2-scatterpoint>
    <g2-area :id="'area2'" :isSmooth="true" :axisName="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-area>

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
