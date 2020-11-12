/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-19 22:10:34
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2020-05-06 19:21:58
 */
<template>
  <div>
    <g2-line
      style="height: 300px; width: 800px; margin: 0 auto;"
      :isSmooth="true"
      :axisName="{name:'年份', value:'GDP(亿美元)', type:'国家'}"
    ></g2-line>
    <g2-radar
      style="height: 300px; width: 800px; margin: 0 auto;"
      :isShowArea="false"
      :showLegend="false"
    ></g2-radar>
    <g2-mirror-interval style="height: 300px; width: 800px; margin: 0 auto;" :padding="[50, 100]"></g2-mirror-interval>
    <g2-liquidfill
      style="height: 300px; width: 300px; margin: 0 auto;"
      :padding="[50, 'auto']"
      :maxValue="1"
      :isPercent="true"
      :data="[{ name: '中国', value: 0.6 }]"
      :axisName="{name:'国家', value:'GDP占比'}"
    ></g2-liquidfill>
    <g2-bubble style="height: 300px; width: 800px; margin: 0 auto;" :padding="[60, 'auto']"></g2-bubble>
    <g2-scatter-point
      style="height: 300px; width: 800px; margin: 0 auto;"
      :data="[{ x: 20, y: 5 },{ x: 30, y: 10 }]"
    ></g2-scatter-point>
    <g2-scatter-point
      style="height: 300px; width: 800px; margin: 0 auto;"
      :showLegend="true"
      :data="[{ x: 20, y: 5, type: 'type1' },{ x: 20, y: 10, type: 'type2' },
       { x: 30, y: 10, type: 'type1' },{ x: 30, y: 5, type: 'type2' },
       { x: 20, y: 7, type: 'type3' },{ x: 15, y: 14, type: 'type4' }]"
      :intervalRange="{use: false}"
    ></g2-scatter-point>
    <g2-scatter-point
      style="height: 300px; width: 800px; margin: 0 auto;"
      :showLegend="true"
      :data="[{ x: 0.2, y: 5, type: 'type1' },{ x: 0.15, y: 10, type: 'type2' },
       { x: 0.35, y: 10, type: 'type1' },{ x: 0.9, y: 5, type: 'type2' },
       { x: 0.45, y: 7, type: 'type3' },{ x: 0.6, y: 14, type: 'type4' }]"
      :intervalColor="['#FACC14', '#2FC25B', '#1890FF']"
      :intervalRange="{use: true, axis: 'x', limit: [0.25, 0.5]}"
      :isPercent="{x: true, y: false}"
    ></g2-scatter-point>
    <g2-area
      style="height: 300px; width: 800px; margin: 0 auto;"
      :isSmooth="true"
      :axisName="{name:'年份', value:'GDP(亿美元)', type:'国家'}"
    ></g2-area>
    <g2-pie
      style="height: 300px; width: 800px; margin: 0 auto;"
      :type="'pie'"
      :axisName="{name:'年份', value:'GDP(亿美元)'}"
    ></g2-pie>
    <g2-pie
      style="height: 300px; width: 800px; margin: 0 auto;"
      :type="'ring'"
      :axisName="{name:'年份', value:'GDP(亿美元)'}"
      :guide="{name:'全部', value:6}"
    ></g2-pie>
    <g2-pie
      style="height: 300px; width: 800px; margin: 0 auto;"
      :type="'ring'"
      :axisName="{name:'年份', value:'GDP(亿美元)'}"
      :guide="{value:6}"
    ></g2-pie>
    <g2-pie
      style="height: 300px; width: 800px; margin: 0 auto;"
      :type="'ring'"
      :axisName="{name:'类别', value:'人次(次)'}"
      :data="[{name:'登录', value:1500},{name:'未登录', value:500}]"
      :guide="{name:'登录', value:'75%'}"
    ></g2-pie>
    <g2-pie
      style="height: 300px; width: 800px; margin: 0 auto;"
      :type="'nightingale'"
      :axisName="{name:'年份', value:'GDP(亿美元)'}"
    ></g2-pie>
    <g2-pie
      style="height: 300px; width: 800px; margin: 0 auto;"
      :type="'nightingale'"
      :axisName="{name:'年份', value:'GDP(亿美元)'}"
      :innerRadius="0"
    ></g2-pie>
    <g2-word-cloud style="height: 400px; width: 600px; margin: 0 auto;"></g2-word-cloud>
    <g2-column
      style="height: 300px; width: 800px; margin: 0 auto;"
      :is-bar="false"
      :data="[{name: '1997', value: 86085},{name: '2007', value: 144776},{name: '2017', value: 193868}]"
    ></g2-column>
    <g2-column style="height: 300px; width: 800px; margin: 0 auto;" :type="'dodge'" :is-bar="false"></g2-column>
    <g2-column style="height: 300px; width: 800px; margin: 0 auto;" :type="'fold'" :is-bar="false"></g2-column>
    <g2-column
      style="height: 300px; width: 800px; margin: 0 auto;"
      :is-bar="true"
      :data="[{name: '1997', value: 86085},{name: '2007', value: 144776},{name: '2017', value: 193868}]"
    ></g2-column>
    <g2-column style="height: 300px; width: 800px; margin: 0 auto;" :type="'dodge'" :is-bar="true"></g2-column>
    <g2-column style="height: 300px; width: 800px; margin: 0 auto;" :type="'fold'" :is-bar="true"></g2-column>
    <g2-histogram
      style="height: 300px; width: 800px; margin: 0 auto;"
      :bins="0"
      :bin-width="10"
      :data="[50,50,49,64,61]"
      :axisName="{x: '年龄', y: '数量'}"
      :useTooltip="true"
    ></g2-histogram>
    <g2-double-axis-column
      style="height: 300px; width: 800px; margin: 0 auto;"
      :axis-name="{name: '年份',value1: '数量',value2: '占比'}"
      :useTooltip="true"
      :data="[{ name: '1997', value1: 86085, value2: 0.3 },{ name: '2007', value1: 144776, value2: 0.2 },{ name: '2017', value1: 193868, value2: 0.6 }]"
    ></g2-double-axis-column>
    <g2-sparkline
      style="height: 200px; width: 300px; margin: 0 auto;"
      :type="'line'"
      :color="'#1890FF'"
    ></g2-sparkline>
    <g2-sparkline
      style="height: 200px; width: 300px; margin: 0 auto;"
      :type="'area'"
      :color="'#2FC25B'"
    ></g2-sparkline>
    <g2-sparkline
      style="height: 200px; width: 300px; margin: 0 auto;"
      :type="'interval'"
      :color="'#FACC14'"
    ></g2-sparkline>
    <g2-progress-bar
      style="height: 45px; width: 300px; margin: 0 auto;"
      :data="[{name:'中国', value: 8878}, {name:'其他', value: 1231}]"
      :color="['#FFB6C1', '#e8e8e8']"
      :mark-line="{use: true, name: '均值', value: 5000, lineColor: '#1890FF', labelColor: '#000000', labelSize:'14'}"
      :guide="{showName: false, showValue: false}"
      :is-percent="false"
    ></g2-progress-bar>
    <g2-progress-bar
      style="height: 45px; width: 300px; margin: 0 auto;"
      :data="[{name:'中国', value: 8878}, {name:'其他', value: 1231}]"
      :color="['#FFB6C1', '#e8e8e8']"
      :mark-line="{use: true, name: '均值', value: 9999, lineColor: '#1890FF', labelColor: '#000000', labelSize:'14'}"
      :guide="{showName: false, showValue: false}"
      :is-percent="false"
    ></g2-progress-bar>
    <g2-progress-bar
      style="height: 45px; width: 300px; margin: 0 auto;"
      :data="[{name:'中国', value: 8878}, {name:'其他', value: 1231}]"
      :color="['#FFB6C1', '#e8e8e8']"
      :guide="{showName: true, showValue: true, labelColor: '#000000', labelSize:'14'}"
      :is-percent="false"
    ></g2-progress-bar>

     <g2-progress-bar
      style="height: 26px; width: 300px; margin: 0 auto;"
      :data="[{name:'中国', value: 8878}, {name:'其他', value: 1231}]"
      :color="['#FFB6C1', '#e8e8e8']"
      :guide="{showName: false, showValue: false}"
      :mark-line="{use:false}"
      :is-percent="false"
    ></g2-progress-bar>
    <g2-progress-bar
      style="height: 45px; width: 300px; margin: 0 auto;"
      :data="[{ name: '中国', value: 0 }, { name: '其他', value: 1 }]"
      :color="['#FF7C81','#F0F2F5']"
      :mark-line="{use:false}"
      :guide="{showName: true, showValue: true, labelColor: '#000000', labelSize:'14'}"
      :is-percent="true"
    ></g2-progress-bar>
    <g2-custom
      style="height: 300px; width: 800px; margin: 0 auto;"
      :option="customOption"
      :data="[{ name: 'test1', value: 123 }, { name: 'test2', value: 246 }]"
    ></g2-custom>
    <g2-map-bubble style="height: 500px; width: 500px; margin: 0 auto;"></g2-map-bubble>
    <g2-map-fill :color="{type:'mapping', mapping: '#e5f5e0-#31a354'}" style="height: 500px; width: 500px; margin: 0 auto;"></g2-map-fill>
    <g2-map-fill :color="{type:'specify'}" style="height: 500px; width: 500px; margin: 0 auto;"></g2-map-fill>

  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    customOption (chart, dataset, data) {
      let dv = dataset.createView().source(data)
      chart.source(dv)
      chart.interval().position('name*value')
    }
  },
  mounted () {}
}
</script>
