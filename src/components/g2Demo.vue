/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-19 22:10:34
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-10-08 15:40:06
 */
<template>
  <div>
    <g2-line :id="'line'" :isSmooth="true" :axisName="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-line>
    <!-- <g2-radar :id="'radar'" :isShowArea="false" :showLegend="false"></g2-radar> -->
    <g2-mirror-interval :id="'mirrorInterval'" :padding="[50, 100]"></g2-mirror-interval>
    <div style="width: 300px;margin: auto;">
      <g2-liquidfill :id="'liquidfill'" :padding="[50, 'auto']" :maxValue="1" :isPercent="true" :data="[{ name: '中国', value: 0.6 }]"
      :axisName="{name:'国家', value:'GDP占比'}"></g2-liquidfill>
    </div>
    <g2-bubble :id="'bubble'" :padding="[60, 'auto']"></g2-bubble>
    <g2-scatter-point :id="'scatter-point'" :data="[{ x: 20, y: 5 },{ x: 30, y: 10 }]"></g2-scatter-point>
    <g2-scatter-point :id="'scatter-point2'" :showLegend="true"
      :data="[{ x: 20, y: 5, type: 'type1' },{ x: 20, y: 10, type: 'type2' },
       { x: 30, y: 10, type: 'type1' },{ x: 30, y: 5, type: 'type2' },
       { x: 20, y: 7, type: 'type3' },{ x: 15, y: 14, type: 'type4' }]">
    </g2-scatter-point>
    <g2-area :id="'area2'" :isSmooth="true" :axisName="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-area>
    <g2-pie :id="'pie'" :type="'pie'" :axisName="{name:'年份', value:'GDP(亿美元)'}"></g2-pie>
    <g2-pie :id="'ring'" :type="'ring'" :axisName="{name:'年份', value:'GDP(亿美元)'}" :guide="{name:'全部', value:6}"></g2-pie>
    <g2-pie :id="'ring2'" :type="'ring'" :axisName="{name:'年份', value:'GDP(亿美元)'}" :guide="{value:6}"></g2-pie>
    <g2-pie :id="'ring3'" :type="'ring'" :axisName="{name:'类别', value:'人次(次)'}" :data="[{name:'登录', value:1500},{name:'未登录', value:500}]" :guide="{name:'登录', value:'75%'}"></g2-pie>
    <g2-pie :id="'nightingale'" :type="'nightingale'" :axisName="{name:'年份', value:'GDP(亿美元)'}"></g2-pie>
    <g2-pie :id="'nightingale2'" :type="'nightingale'" :axisName="{name:'年份', value:'GDP(亿美元)'}" :innerRadius="0"></g2-pie>
    <g2-word-cloud :id="'wordcloud'" :height="400"></g2-word-cloud>
    <g2-column :id="'column1'" :is-bar="false" :data="[{name: '1997', value: 86085},{name: '2007', value: 144776},{name: '2017', value: 193868}]"></g2-column>
    <g2-column :id="'column2'" :type="'dodge'" :is-bar="false"></g2-column>
    <g2-column :id="'column3'" :type="'fold'" :is-bar="false"></g2-column>
    <g2-column :id="'column4'" :is-bar="true" :data="[{name: '1997', value: 86085},{name: '2007', value: 144776},{name: '2017', value: 193868}]"></g2-column>
    <g2-column :id="'column5'" :type="'dodge'" :is-bar="true"></g2-column>
    <g2-column :id="'column6'" :type="'fold'" :is-bar="true"></g2-column>
    <g2-histogram :id="'histogram'" :bin-width="4"></g2-histogram>
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
