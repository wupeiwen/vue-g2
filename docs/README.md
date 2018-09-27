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
  <g2-radar :id="'demo'" :isShowArea="false" :showLegend="true"></g2-radar>
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
<g2-radar :id="'demo'" :isShowArea="false" :showLegend="true"></g2-radar>

## 指南
### 折线图(g2-line)
------
```
<g2-line :id="'line'" :isSmooth="true" :padding="['auto', 100]" 
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
 :axisName="{name:'年份', value:'GDP(亿美元)', type:'国家'}">
</g2-line>
```
<g2-line :id="'line'" :isSmooth="true" :padding="['auto', 100]" :axisName="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-line>

### 雷达图(g2-radar)
------
```
<g2-radar :id="'radar'" :isShowArea="false" :showLegend="true"></g2-radar>
```
<g2-radar :id="'radar'" :isShowArea="false" :showLegend="true"></g2-radar>

### 液体填充(g2-liquidfill)
------
```
<g2-liquidfill style="width: 300px;margin: auto;" :id="'liquidfill'" :height="300" 
 :maxValue="1" :isPercent="true" :data="[{ name: '中国', value: 0.6 }]" 
 :axisName="{name:'国家', value:'GDP占比'}">
</g2-liquidfill>
```
<g2-liquidfill style="width: 300px;margin: auto;" :id="'liquidfill'" :maxValue="1" :isPercent="true" :data="[{ name: '中国', value: 0.6 }]"
    :axisName="{name:'国家', value:'GDP占比'}"></g2-liquidfill>

### 镜像分面柱图(g2-mirrorInterval)
------
```
<g2-mirrorInterval :id="'mirrorInterval'" :padding="[50, 100]"></g2-mirrorInterval>
```
<g2-mirrorInterval :id="'mirrorInterval'" :padding="[50, 100]"></g2-mirrorInterval>

### 气泡图(g2-bubble)
------
```
<g2-bubble :id="'bubble'" :padding="[60, 'auto']"></g2-bubble>
```
<g2-bubble :id="'bubble'" :padding="[60, 'auto']"></g2-bubble>

### 散点图(g2-scatterPoint)
------
#### 基础散点图
```
<g2-scatterPoint :id="'scatterPoint'" :data="[{ x: 20, y: 5 },{ x: 30, y: 10 }]">
</g2-scatterPoint>
```
<g2-scatterPoint :id="'scatterPoint'" :data="[{ x: 20, y: 5 },{ x: 30, y: 10 }]"></g2-scatterPoint>

#### 多色散点图
```
<g2-scatterPoint :id="'scatterPoint2'" :showLegend="true"
 :data="[{ x: 20, y: 5, type: 'type1' },{ x: 20, y: 10, type: 'type2' },
  { x: 30, y: 10, type: 'type1' },{ x: 30, y: 5, type: 'type2' },
  { x: 20, y: 7, type: 'type3' },{ x: 15, y: 14, type: 'type4' }]">
</g2-scatterPoint>
```
<g2-scatterPoint :id="'scatterPoint2'" :showLegend="true"
    :data="[{ x: 20, y: 5, type: 'type1' },{ x: 20, y: 10, type: 'type2' },
    { x: 30, y: 10, type: 'type1' },{ x: 30, y: 5, type: 'type2' },
    { x: 20, y: 7, type: 'type3' },{ x: 15, y: 14, type: 'type4' }]">
</g2-scatterPoint>


### 面积图(g2-area)
------
```
<g2-area :id="'area'" :isSmooth="true" :padding="['auto', 100]" 
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
 :axisName="{name:'年份', value:'GDP(亿美元)', type:'国家'}">
</g2-area>
```
<g2-area :id="'area'" :isSmooth="true" :padding="['auto', 100]" :axisName="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-area>
