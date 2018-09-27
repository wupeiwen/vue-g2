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
  <g2-pie :id="'pie'"></g2-pie>
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
<g2-pie :id="'pie'"></g2-pie>

## 指南
### 折线图(g2-line)
------
```
<g2-line :id="'line'" :isSmooth="true" :padding="['auto', 100]" 
:axisName="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-line>
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
<g2-liquidfill :id="'liquidfill'" :height="300" :maxValue="1" :isPercent="true" 
  :data="[{ name: '中国', value: 0.6 }]" :axisName="{name:'国家', value:'GDP占比'}">
</g2-liquidfill>
```
<g2-liquidfill :id="'liquidfill'" :height="300" :maxValue="1" :isPercent="true" :data="[{ name: '中国', value: 0.6 }]" :axisName="{name:'国家', value:'GDP占比'}"></g2-liquidfill>

### 镜像分面柱图(g2-mirrorInterval)
------
```
<g2-mirrorInterval :id="'mirrorInterval'" :padding="[50, 100]"></g2-mirrorInterval>
```
<g2-mirrorInterval :id="'mirrorInterval'" :padding="[50, 100]"></g2-mirrorInterval>

### 气泡图(g2-bubble)
------
```
<g2-bubble :id="'bubble'" :padding="[50, 100]"></g2-bubble>
```
<g2-bubble :id="'bubble'" :padding="[50, 100]"></g2-bubble>

### 散点图(g2-scatterPoint)
------
```
<g2-scatterPoint :id="'scatterPoint'" :padding="[50, 100]"></g2-scatterPoint>
```
<g2-scatterPoint :id="'scatterPoint'" :padding="[50, 100]"></g2-scatterPoint>

### 面积图(g2-area)
------
```
<g2-area :id="'area'" :isSmooth="true" :padding="['auto', 100]" :axisName="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-area>
```
<g2-area :id="'area'" :isSmooth="true" :padding="['auto', 100]" :axisName="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-area>
