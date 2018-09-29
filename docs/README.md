>基于 [Vue](https://cn.vuejs.org/index.html) 和 [AntV/G2](https://antv.alipay.com/zh-cn/g2/3.x/index.html) 的可视化组件库

## 快速开始
### 安装依赖
------
可以通过 npm 添加依赖
```
  npm i vue-g2 --save
```
或者通过 yarn 添加依赖
```
  yarn add vue-g2 --save
```

### 引入
------
在 Vue 项目的 main.js 中写入以下内容：
```
import Vue from 'vue'
import 'vue-g2'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
```
以上代码便完成了 vue-g2 的引入。

### 开始使用
------
开发环境已经搭建完毕，在需要使用可视化图表的页面通过 html 标签的形式使用，如：
```
<template>
  <g2-radar :id="'radar-demo'" :isShowArea="false" :showLegend="true"></g2-radar>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style lang="less">
</style>
```
<g2-radar :id="'demo'" :is-show-area="false" :show-legend="true"></g2-radar>

## 指南
### 折线图(g2-line)
------
```
<g2-line :id="'line'" :is-smooth="true" :padding="['auto', 100]" 
 :data="[{ name: '1997', value: 86085, type: 'America' },
  { name: '2007', value: 144776, type: 'America' },
  { name: '2017', value: 193868, type: 'America' },
  { name: '1997', value: 9616, type: 'China' },
  { name: '2007', value: 35715, type: 'China' },
  { name: '2017', value: 122503, type: 'China' },
  { name: '1997', value: 44122, type: 'Japan' },
  { name: '2007', value: 45153, type: 'Japan' },
  { name: '2017', value: 48675, type: 'Japan' },
  { name: '1997', value: 22159, type: 'Germany' },
  { name: '2007', value: 34447, type: 'Germany' },
  { name: '2017', value: 36865, type: 'Germany' }
 ]"
 :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}">
</g2-line>
```
<g2-line :id="'line'" :is-smooth="true" :padding="['auto', 100]" :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-line>

### 雷达图(g2-radar)
------
#### * 基础雷达图
```
<g2-radar :id="'radar'" :is-show-area="true" :show-legend="true"
  :axis-name="{a:'companya' ,b:'companyb'}">
</g2-radar>
```
<g2-radar :id="'radar'" :is-show-area="true" :show-legend="true" :axis-name="{a:'company-a' ,b:'company-b'}"></g2-radar>
#### * 雷达图(线)
```
<g2-radar :id="'radar'" :is-show-area="false" :show-legend="true" :axis-name="{a:'company-a' ,b:'company-b'}"></g2-radar>
```
<g2-radar :id="'radar'" :is-show-area="false" :show-legend="true" :axis-name="{a:'company-a' ,b:'company-b'}"></g2-radar>

### 分面
------
#### * 镜像分面(转置)(g2-mirror-interval)
```
<g2-mirror-interval :id="'mirror-interval'" :padding="[50, 100]"></g2-mirror-interval>
```
<g2-mirror-interval :id="'mirror-interval'" :padding="[50, 100]"></g2-mirror-interval>

### 气泡图(g2-bubble)
------
```
<g2-bubble :id="'bubble'" :padding="[60, 'auto']"></g2-bubble>
```
<g2-bubble :id="'bubble'" :padding="[60, 'auto']"></g2-bubble>

### 散点图(g2-scatter-point)
------
#### * 基础散点图
```
<g2-scatter-point :id="'scatter-point'" :data="[{ x: 20, y: 5 },{ x: 30, y: 10 }]">
</g2-scatter-point>
```
<g2-scatter-point :id="'scatter-point'" :data="[{ x: 20, y: 5 },{ x: 30, y: 10 }]"></g2-scatter-point>

#### * 多色散点图
```
<g2-scatter-point :id="'scatterPoint2'" :show-legend="true"
 :data="[{ x: 20, y: 5, type: 'type1' },{ x: 20, y: 10, type: 'type2' },
  { x: 30, y: 10, type: 'type1' },{ x: 30, y: 5, type: 'type2' },
  { x: 20, y: 7, type: 'type3' },{ x: 15, y: 14, type: 'type4' }]">
</g2-scatter-point>
```
<g2-scatter-point :id="'scatterPoint2'" :show-legend="true"
    :data="[{ x: 20, y: 5, type: 'type1' },{ x: 20, y: 10, type: 'type2' },
    { x: 30, y: 10, type: 'type1' },{ x: 30, y: 5, type: 'type2' },
    { x: 20, y: 7, type: 'type3' },{ x: 15, y: 14, type: 'type4' }]">
</g2-scatter-point>

### 面积图(g2-area)
------
```
<g2-area :id="'area'" :is-smooth="true" :padding="['auto', 100]" 
 :data="[{ name: '1997', value: 86085, type: 'America' },
  { name: '2007', value: 144776, type: 'America' },
  { name: '2017', value: 193868, type: 'America' },
  { name: '1997', value: 9616, type: 'China' },
  { name: '2007', value: 35715, type: 'China' },
  { name: '2017', value: 122503, type: 'China' },
  { name: '1997', value: 44122, type: 'Japan' },
  { name: '2007', value: 45153, type: 'Japan' },
  { name: '2017', value: 48675, type: 'Japan' },
  { name: '1997', value: 22159, type: 'Germany' },
  { name: '2007', value: 34447, type: 'Germany' },
  { name: '2017', value: 36865, type: 'Germany' }
 ]"
 :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}">
</g2-area>
```
<g2-area :id="'area'" :is-smooth="true" :padding="['auto', 100]" :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-area>

### 饼图(g2-pie)
------
#### * 基础饼图
```
<g2-pie :id="'pie'" :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"></g2-pie>
```
<g2-pie :id="'pie'" :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"></g2-pie>
#### * 饼图--内部label
```
<g2-pie :id="'pie2'" :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"
 :label-option="{show:true}">
</g2-pie>
```
<g2-pie :id="'pie2'" :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}" :label-option="{show:true}"></g2-pie>
#### * 基础环图
```
<g2-pie :id="'ring'" :type="'ring'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"></g2-pie>
```
<g2-pie :id="'ring'" :type="'ring'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"></g2-pie>
#### * 环图--辅助文字
```
<g2-pie :id="'ring2'" :type="'ring'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"
 :guide="{name:'全部', value:6}">
</g2-pie>

<g2-pie :id="'ring3'" :type="'ring'" :axis-name="{name:'类别', value:'人次(次)'}" 
  :data="[{name:'登录', value:1500},{name:'未登录', value:500}]" 
  :guide="{name:'登录', value:'75%'}">
</g2-pie>
```
<g2-pie :id="'ring2'" :type="'ring'" :axis-name="{name:'年份', value:'GDP(亿美元)'}" :guide="{name:'全部', value:6}"></g2-pie>
<g2-pie :id="'ring3'" :type="'ring'" :axis-name="{name:'类别', value:'人次(次)'}" :data="[{name:'登录', value:1500},{name:'未登录', value:500}]" :guide="{name:'登录', value:'75%'}"></g2-pie>
#### * 南丁格尔玫瑰图
```
<g2-pie :id="'nightingale'" :type="'nightingale'" 
 :axis-name="{name:'年份', value:'GDP(亿美元)'}"
 :inner-radius="0">
</g2-pie>
```
<g2-pie :id="'nightingale'" :type="'nightingale'" :axis-name="{name:'年份', value:'GDP(亿美元)'}" :inner-radius="0"></g2-pie>
#### * 南丁格尔玫瑰环图
```
<g2-pie :id="'nightingale2'" :type="'nightingale'"
 :axis-name="{name:'年份', value:'GDP(亿美元)'}">
</g2-pie>
```
<g2-pie :id="'nightingale2'" :type="'nightingale'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"></g2-pie>

### 其他
------
#### * 液体填充(g2-liquidfill)
```
<g2-liquidfill style="width: 300px;margin: auto;" :id="'liquidfill'" :height="300" 
 :max-value="1" :is-percent="true" :data="[{ name: '中国', value: 0.6 }]" 
 :axis-name="{name:'国家', value:'GDP占比'}">
</g2-liquidfill>
```
<g2-liquidfill style="width: 300px;margin: auto;" :id="'liquidfill'" :max-value="1" :is-percent="true" :data="[{ name: '中国', value: 0.6 }]"
    :axis-name="{name:'国家', value:'GDP占比'}"></g2-liquidfill>
#### * 带图片遮罩的词云
```
<g2-word-cloud :id="'wordcloud'" :height="400" 
  :data="[{ 'value': 6, 'name': 'Analysis' }, { 'value': 6, 'name': 'Data Mining' },
   { 'value': 6, 'name': 'Data Vis' }, { 'value': 6, 'name': 'Design' },
   { 'value': 6, 'name': 'Grammar' }, { 'value': 6, 'name': 'Graphics' },
   { 'value': 6, 'name': 'Graph' }, { 'value': 6, 'name': 'Hierarchy' },
   { 'value': 6, 'name': 'Labeling' }, { 'value': 6, 'name': 'Layout' },
   { 'value': 6, 'name': 'Quantitative' }, { 'value': 6, 'name': 'Relation' },
   { 'value': 6, 'name': 'Statistics' }, { 'value': 6, 'name': '可视化' },
   { 'value': 6, 'name': '数据' }, { 'value': 6, 'name': '数据可视化' }]">
</g2-word-cloud>
```
<g2-word-cloud :id="'wordcloud'" :height="400"></g2-word-cloud>
