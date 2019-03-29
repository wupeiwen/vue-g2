/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-19 22:10:34
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2019-03-29 15:57:01
 */
<template>
  <div>
    <g2-line :isSmooth="true" :axisName="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-line>
    <g2-radar :isShowArea="false" :showLegend="false"></g2-radar>
    <g2-mirror-interval :padding="[50, 100]"></g2-mirror-interval>
    <div style="width: 300px;margin: auto;">
      <g2-liquidfill :padding="[50, 'auto']" :maxValue="1" :isPercent="true" :data="[{ name: '中国', value: 0.6 }]"
      :axisName="{name:'国家', value:'GDP占比'}"></g2-liquidfill>
    </div>
    <g2-bubble :padding="[60, 'auto']"></g2-bubble>
    <g2-scatter-point :data="[{ x: 20, y: 5 },{ x: 30, y: 10 }]"></g2-scatter-point>
    <g2-scatter-point :showLegend="true"
      :data="[{ x: 20, y: 5, type: 'type1' },{ x: 20, y: 10, type: 'type2' },
       { x: 30, y: 10, type: 'type1' },{ x: 30, y: 5, type: 'type2' },
       { x: 20, y: 7, type: 'type3' },{ x: 15, y: 14, type: 'type4' }]"
      :intervalRange="{use: false}">
    </g2-scatter-point>
    <g2-scatter-point :showLegend="true"
      :data="[{ x: 0.2, y: 5, type: 'type1' },{ x: 0.15, y: 10, type: 'type2' },
       { x: 0.35, y: 10, type: 'type1' },{ x: 0.9, y: 5, type: 'type2' },
       { x: 0.45, y: 7, type: 'type3' },{ x: 0.6, y: 14, type: 'type4' }]"
      :intervalColor="['#FACC14', '#2FC25B', '#1890FF']"
      :intervalRange="{use: true, axis: 'x', limit: [0.25, 0.5]}"
      :isPercent="{x: true, y: false}">
    </g2-scatter-point>
    <g2-area :isSmooth="true" :axisName="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-area>
    <g2-pie :type="'pie'" :axisName="{name:'年份', value:'GDP(亿美元)'}"></g2-pie>
    <g2-pie :type="'ring'" :axisName="{name:'年份', value:'GDP(亿美元)'}" :guide="{name:'全部', value:6}"></g2-pie>
    <g2-pie :type="'ring'" :axisName="{name:'年份', value:'GDP(亿美元)'}" :guide="{value:6}"></g2-pie>
    <g2-pie :type="'ring'" :axisName="{name:'类别', value:'人次(次)'}" :data="[{name:'登录', value:1500},{name:'未登录', value:500}]" :guide="{name:'登录', value:'75%'}"></g2-pie>
    <g2-pie :type="'nightingale'" :axisName="{name:'年份', value:'GDP(亿美元)'}"></g2-pie>
    <g2-pie :type="'nightingale'" :axisName="{name:'年份', value:'GDP(亿美元)'}" :innerRadius="0"></g2-pie>
    <g2-word-cloud :data='[]'></g2-word-cloud>
    <g2-column :is-bar="false" :data="[{name: '1997', value: 86085},{name: '2007', value: 144776},{name: '2017', value: 193868}]"></g2-column>
    <g2-column :type="'dodge'" :is-bar="false"></g2-column>
    <g2-column :type="'fold'" :is-bar="false"></g2-column>
    <g2-column :is-bar="true" :data="[{name: '1997', value: 86085},{name: '2007', value: 144776},{name: '2017', value: 193868}]"></g2-column>
    <g2-column :type="'dodge'" :is-bar="true"></g2-column>
    <g2-column :type="'fold'" :is-bar="true"></g2-column>
    <g2-histogram :bins="0" :bin-width="10" :data="[50,50,49,64,61]" :axisName="{x: '年龄', y: '数量'}"></g2-histogram>
    <g2-double-axis-column :axis-name="{name: '年份',value1: '数量',value2: '占比'}"
     :data="[{ name: '1997', value1: 86085, value2: 0.3 },{ name: '2007', value1: 144776, value2: 0.2 },{ name: '2017', value1: 193868, value2: 0.6 }]">
     </g2-double-axis-column>
    <g2-sparkline :type="'line'" :color="'#1890FF'"></g2-sparkline>
    <g2-sparkline :type="'area'" :color="'#2FC25B'"></g2-sparkline>
    <g2-sparkline :type="'interval'" :color="'#FACC14'"></g2-sparkline>
    <div style="width:300px;">
      <g2-progress-bar :data="[{name:'中国', value: 8878}, {name:'其他', value: 1231}]"
        :color="['#FFB6C1', '#e8e8e8']" :mark-line="{use: true, name: '均值', value: 5000, lineColor: '#1890FF', labelColor: '#000000', labelSize:'14'}"
        :guide="{showName: false, showValue: false}" :is-percent="false">
      </g2-progress-bar>
      <g2-progress-bar :data="[{name:'中国', value: 8878}, {name:'其他', value: 1231}]"
        :color="['#FFB6C1', '#e8e8e8']" :mark-line="{use: true, name: '均值', value: 9999, lineColor: '#1890FF', labelColor: '#000000', labelSize:'14'}"
        :guide="{showName: false, showValue: false}" :is-percent="false">
      </g2-progress-bar>
      <g2-progress-bar :data="[{name:'中国', value: 8878}, {name:'其他', value: 1231}]"
        :color="['#FFB6C1', '#e8e8e8']" :guide="{showName: true, showValue: true, labelColor: '#000000', labelSize:'14'}"
        :is-percent="false">
      </g2-progress-bar>
      <g2-progress-bar :height="26" :data="[{name:'中国', value: 8878}, {name:'其他', value: 1231}]"
        :color="['#FFB6C1', '#e8e8e8']" :guide="{showName: false, showValue: false}" :mark-line="{use:false}"
        :is-percent="false">
      </g2-progress-bar>
      <g2-progress-bar
        :data="[{name:'中国', value: 0}, {name:'其他', value: 1}]"
        :color="['#FF7C81','#F0F2F5']"
        :mark-line="{use:false}"
        :guide="{showName: true, showValue: true, labelColor: '#000000', labelSize:'14'}"
        :is-percent="true">
      </g2-progress-bar>
    </div>
    <g2-custom :option="customOption"></g2-custom>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  methods: {
    customOption (chart, dataset) {
      let data = [{ name: 'test1', value: 123 }, { name: 'test2', value: 246 }]
      let dv = dataset.createView().source(data)
      chart.source(dv)
      chart.interval().position('name*value')
    }
  },
  mounted () {}
}
</script>
