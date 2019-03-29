>基于 [Vue](https://cn.vuejs.org/index.html) 和 [AntV/G2](https://antv.alipay.com/zh-cn/g2/3.x/index.html) 的可视化组件库

![](https://travis-ci.com/wupeiwen/vue-g2.svg?branch=master)
[![](https://img.shields.io/npm/v/vue-g2.svg)](https://www.npmjs.com/package/vue-g2)
![](https://img.shields.io/bundlephobia/min/vue-g2.svg)
![](https://img.shields.io/npm/dt/vue-g2.svg)
[![](https://img.shields.io/badge/-详细文档-green.svg)](https://wupeiwen.github.io/vue-g2)

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
开发环境已经搭建完毕, 在需要使用可视化图表的页面通过 html 标签的形式使用, 如：
```
<template>
  <g2-radar :is-show-area="false" :show-legend="false"
    :axis-name="{a:'companya'}" 
    :data="[{item: 'Design',a: 70},{item: 'Development',a: 60},
      {item: 'Marketing',a: 50},{item: 'Users',a: 40},
      {item: 'Test',a: 60}]">
  </g2-radar>
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
<g2-radar :is-show-area="false" :show-legend="false" :axis-name="{a:'companya',b:'companyb',c:'companyc'}" :data="[{item: 'Design',a: 70},{item: 'Development',a: 60},{item: 'Marketing',a: 50},{item: 'Users',a: 40},{item: 'Test',a: 60}]"></g2-radar>

## 指南
### 折线图(g2-line)
------
#### · 基础折线图
```
<g2-line :is-smooth="false" :padding="['auto', 100]"
 :data="[{ name: '1997', value: 86085 },
  { name: '2007', value: 144776 },
  { name: '2017', value: 193868 }]"
 :axis-name="{name:'年份', value:'GDP(亿美元)'}">
</g2-line>
```
<g2-line :is-smooth="false" :padding="['auto', 100]" :data="[{ name: '1997', value: 86085 },{ name: '2007', value: 144776 },{ name: '2017', value: 193868 }]" :axis-name="{name:'年份', value:'GDP(亿美元)'}"></g2-line>
#### · 多条折线图
```
<g2-line :is-smooth="false" :padding="['auto', 100]"
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
<g2-line :is-smooth="false" :padding="['auto', 100]" :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-line>
#### · 曲线折线图
```
<g2-line :is-smooth="true" :padding="['auto', 100]"
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
<g2-line :is-smooth="true" :padding="['auto', 100]" :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-line>

### 柱状图(g2-column)
------
#### · 基础柱状图
```
<g2-column :is-bar="false"
 :data="[{name: '1997', value: 86085},{name: '2007', value: 144776}
  ,{name: '2017', value: 193868}]"
 :axis-name="{name:'年份', value:'GDP(亿美元)'}">
</g2-column>
```
<g2-column :is-bar="false" :data="[{name: '1997', value: 86085},{name: '2007', value: 144776},{name: '2017', value: 193868}]" :axis-name="{name:'年份', value:'GDP(亿美元)'}"></g2-column>
#### · 分组柱状图
```
<g2-column :type="'dodge'" :is-bar="false"
 :data="[
  { name: '1997', value: 86085, type: 'America' },
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
  { name: '2017', value: 36865, type: 'Germany' }]"
 :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}">  
</g2-column>
```
<g2-column :type="'dodge'" :is-bar="false" :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-column>
#### · 堆叠柱状图
```
<g2-column :type="'fold'" :is-bar="false"
 :data="[
  { name: '1997', value: 86085, type: 'America' },
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
  { name: '2017', value: 36865, type: 'Germany' }]"
 :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}">
</g2-column>
```
<g2-column :type="'fold'" :is-bar="false" :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-column>
#### · 基础条形图
```
<g2-column :is-bar="true" 
 :data="[{name: '1997', value: 86085},{name: '2007', value: 144776}
  ,{name: '2017', value: 193868}]"
 :axis-name="{name:'年份', value:'GDP(亿美元)'}">
</g2-column>
```
<g2-column :is-bar="true" :data="[{name: '1997', value: 86085},{name: '2007', value: 144776},{name: '2017', value: 193868}]"></g2-column>
#### · 分组条形图
```
<g2-column :type="'dodge'" :is-bar="true"
 :data="[
  { name: '1997', value: 86085, type: 'America' },
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
  { name: '2017', value: 36865, type: 'Germany' }]"
 :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}">
</g2-column>
```
<g2-column :type="'dodge'" :is-bar="true"></g2-column>
#### · 堆叠条形图
```
<g2-column :type="'fold'" :is-bar="true"
 :data="[
  { name: '1997', value: 86085, type: 'America' },
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
  { name: '2017', value: 36865, type: 'Germany' }]"
 :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}">
</g2-column>
```
<g2-column :type="'fold'" :is-bar="true"></g2-column>

### 双y(x)轴柱状图(g2-double-axis-column)
```
<g2-double-axis-column
 :axis-name="{name: '年份',value1: '数量',value2: '占比'}"
 :data="[{ name: '1997', value1: 86085, value2: 0.3 },
  { name: '2007', value1: 144776, value2: 0.2 },
  { name: '2017', value1: 193868, value2: 0.6 }]">
</g2-double-axis-column>
```
<g2-double-axis-column :axis-name="{name: '年份',value1: '数量',value2: '占比'}" :data="[{ name: '1997', value1: 86085, value2: 0.3 },{ name: '2007', value1: 144776, value2: 0.2 },{ name: '2017', value1: 193868, value2: 0.6 }]"></g2-double-axis-column>

### 直方图(g2-histogram)
------
```
<g2-histogram :bin-width="4"
 :bins="0" :data="[1,2,3,4,5,6,7,8,9,10]">
</g2-histogram>
```
<g2-histogram :bin-width="4" :bins="0"></g2-histogram>

### 镜像分面-转置(g2-mirror-interval)
------
```
<g2-mirror-interval :padding="[50, 100]"
  :data="[
    { name: '1997', value: 86085, type: 'America' },
    { name: '2007', value: 144776, type: 'America' },
    { name: '2017', value: 193868, type: 'America' },
    { name: '1997', value: 9616, type: 'China' },
    { name: '2007', value: 35715, type: 'China' },
    { name: '2017', value: 122503, type: 'China' }]"
  :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}">
</g2-mirror-interval>
```
<g2-mirror-interval :padding="[50, 100]"  :data="[{ name: '1997', value: 86085, type: 'America' },{ name: '2007', value: 144776, type: 'America' },{ name: '2017', value: 193868, type: 'America' },{ name: '1997', value: 9616, type: 'China' },{ name: '2007', value: 35715, type: 'China' },{ name: '2017', value: 122503, type: 'China' }]">
</g2-mirror-interval>

### 雷达图(g2-radar)
------
#### · 基础雷达图
```
<g2-radar :is-show-area="true" :show-legend="true"
  :axis-name="{a:'companya',b:'companyb',c:'companyc'}"
  :data="[{item: 'Design',a: 70,b: 30,c: 11},
   {item: 'Development',a: 60,b: 70,c: 11},
   {item: 'Marketing',a: 50,b: 60,c: 11},
   {item: 'Users',a: 40,b: 50,c: 11},
   {item: 'Test',a: 60,b: 70,c: 11}]">
</g2-radar>
```
<g2-radar :is-show-area="true" :show-legend="true" :axis-name="{a:'companya',b:'companyb',c:'companyc'}" :data="[{item: 'Design',a: 70,b: 30,c: 11},{item: 'Development',a: 60,b: 70,c: 11},{item: 'Marketing',a: 50,b: 60,c: 11},{item: 'Users',a: 40,b: 50,c: 11},{item: 'Test',a: 60,b: 70,c: 11}]">
</g2-radar>

#### · 雷达图(线)
```
<g2-radar :is-show-area="false" :show-legend="true"
  :axis-name="{a:'companya',b:'companyb',c:'companyc'}"
  :data="[{item: 'Design',a: 70,b: 30,c: 11},
   {item: 'Development',a: 60,b: 70,c: 11},
   {item: 'Marketing',a: 50,b: 60,c: 11},
   {item: 'Users',a: 40,b: 50,c: 11},
   {item: 'Test',a: 60,b: 70,c: 11}]">
</g2-radar>
```
<g2-radar :is-show-area="false" :show-legend="true" :axis-name="{a:'companya',b:'companyb',c:'companyc'}" :data="[{item: 'Design',a: 70,b: 30,c: 11},{item: 'Development',a: 60,b: 70,c: 11},{item: 'Marketing',a: 50,b: 60,c: 11},{item: 'Users',a: 40,b: 50,c: 11},{item: 'Test',a: 60,b: 70,c: 11}]">
</g2-radar>

### 气泡图(g2-bubble)
------
```
<g2-bubble :padding="[60, 'auto']" 
  :data="[
    { x: 20, y: 5, size: 15, type: 'type1' },
    { x: 30, y: 10, size: 8, type: 'type2' },
    { x: 15, y: 20, size: 15, type: 'type3' }
  ]">
</g2-bubble>
```
<g2-bubble :padding="[60, 'auto']"></g2-bubble>

### 散点图(g2-scatter-point)
------
#### · 基础散点图
```
<g2-scatter-point :data="[{ x: 20, y: 5 },{ x: 30, y: 10 }]">
</g2-scatter-point>
```
<g2-scatter-point :data="[{ x: 20, y: 5 },{ x: 30, y: 10 }]"></g2-scatter-point>

#### · 基于类别分类的多色散点图
```
<g2-scatter-point :show-legend="true"
 :data="[{ x: 20, y: 5, type: 'type1' },{ x: 20, y: 10, type: 'type2' },
  { x: 30, y: 10, type: 'type1' },{ x: 30, y: 5, type: 'type2' },
  { x: 20, y: 7, type: 'type3' },{ x: 15, y: 14, type: 'type4' }]">
</g2-scatter-point>
```
<g2-scatter-point :show-legend="true"
    :data="[{ x: 20, y: 5, type: 'type1' },{ x: 20, y: 10, type: 'type2' },
    { x: 30, y: 10, type: 'type1' },{ x: 30, y: 5, type: 'type2' },
    { x: 20, y: 7, type: 'type3' },{ x: 15, y: 14, type: 'type4' }]">
</g2-scatter-point>

#### · 基于x(y)轴数值范围分类的多色散点图
```
<g2-scatter-point :show-legend="true"
 :data="[{ x: 0.2, y: 5, type: 'type1' },{ x: 0.15, y: 10, type: 'type2' },
  { x: 0.35, y: 10, type: 'type1' },{ x: 0.9, y: 5, type: 'type2' },
  { x: 0.45, y: 7, type: 'type3' },{ x: 0.6, y: 14, type: 'type4' }]"
  :is-percent="{x: true, y: false}"
  :interval-color="['#FACC14', '#2FC25B', '#1890FF']"
  :interval-range="{use: true, axis: 'x', limit: [0.25, 0.5]}">
</g2-scatter-point>
```
<g2-scatter-point :show-legend="true"
    :data="[{ x: 0.2, y: 5, type: 'type1' },{ x: 0.15, y: 10, type: 'type2' },
    { x: 0.35, y: 10, type: 'type1' },{ x: 0.9, y: 5, type: 'type2' },
    { x: 0.45, y: 7, type: 'type3' },{ x: 0.6, y: 14, type: 'type4' }]"
    :is-percent="{x: true, y: false}"
    :interval-color="['#FACC14', '#2FC25B', '#1890FF']"
    :interval-range="{use: true, axis: 'x', limit: [0.25, 0.5]}">
</g2-scatter-point>

### 面积图(g2-area)
------
```
<g2-area :is-smooth="true" :padding="['auto', 100]"
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
<g2-area :is-smooth="true" :padding="['auto', 100]" :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-area>

### 饼图(g2-pie)
------
#### · 基础饼图
```
<g2-pie :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"
 :data="[{ name: '2016', value: 2 },{ name: '2017', value: 1 },{ name: '2018', value: 3 }]">
</g2-pie>
```
<g2-pie :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"></g2-pie>
#### · 饼图--外部label
```
<g2-pie :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"
 :data="[{ name: '2016', value: 2 },{ name: '2017', value: 1 },{ name: '2018', value: 3 }]"
 :label-option="{show:true, offset: 20}">
</g2-pie>
```
<g2-pie :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}" :label-option="{show:true, offset: 20}"></g2-pie>
#### · 饼图--内部label
```
<g2-pie :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"
 :data="[{ name: '2016', value: 2 },{ name: '2017', value: 1 },{ name: '2018', value: 3 }]"
 :label-option="{show:true, offset: -20}">
</g2-pie>
```
<g2-pie :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}" :label-option="{show:true, offset: -20}"></g2-pie>
#### · 基础环图
```
<g2-pie :type="'ring'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"
 :data="[{ name: '2016', value: 2 },{ name: '2017', value: 1 },{ name: '2018', value: 3 }]">
</g2-pie>
```
<g2-pie :type="'ring'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"></g2-pie>
#### · 环图--辅助文字
```
<g2-pie :type="'ring'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"
 :data="[{ name: '2016', value: 2 },{ name: '2017', value: 1 },{ name: '2018', value: 3 }]"
 :guide="{name:'全部', value:6}">
</g2-pie>

<g2-pie :type="'ring'" :axis-name="{name:'类别', value:'人次(次)'}"
  :data="[{name:'登录', value:1500},{name:'未登录', value:500}]"
  :guide="{name:'登录', value:'75%'}">
</g2-pie>
```
<g2-pie :type="'ring'" :axis-name="{name:'年份', value:'GDP(亿美元)'}" :guide="{name:'全部', value:6}"></g2-pie>
<g2-pie :type="'ring'" :axis-name="{name:'类别', value:'人次(次)'}" :data="[{name:'登录', value:1500},{name:'未登录', value:500}]" :guide="{name:'登录', value:'75%'}"></g2-pie>
#### · 南丁格尔玫瑰图
```
<g2-pie :type="'nightingale'"
 :axis-name="{name:'年份', value:'GDP(亿美元)'}"
 :data="[{ name: '2016', value: 2 },{ name: '2017', value: 1 },{ name: '2018', value: 3 }]"
 :inner-radius="0">
</g2-pie>
```
<g2-pie :type="'nightingale'" :axis-name="{name:'年份', value:'GDP(亿美元)'}" :inner-radius="0"></g2-pie>
#### · 南丁格尔玫瑰环图
```
<g2-pie :type="'nightingale'"
 :axis-name="{name:'年份', value:'GDP(亿美元)'}">
 :data="[{ name: '2016', value: 2 },{ name: '2017', value: 1 },{ name: '2018', value: 3 }]"
</g2-pie>
```
<g2-pie :type="'nightingale'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"></g2-pie>

### 迷你图(g2-sparkline)
#### · 迷你折线图
```
<g2-sparkline
 :axis-name="{name: '日期', value: '数值'}"
 :data="[{name:'2018-01', value: 86085}...]"
 :color="'#1890FF'"
 :is-percent="false"
 :type="'line'">
</g2-sparkline>
```
<g2-sparkline :type="'line'" :axis-name="{name: '日期', value: '数值'}" :color="'#1890FF'" :is-percent="false"></g2-sparkline>
#### · 迷你面积图
```
<g2-sparkline
 :axis-name="{name: '日期', value: '数值'}"
 :data="[{name:'2018-01', value: 86085}...]"
 :color="'#2FC25B'"
 :is-percent="false"
 :type="'area'">
</g2-sparkline>
```
<g2-sparkline :type="'area'" :axis-name="{name: '日期', value: '数值'}" :color="'#2FC25B'" :is-percent="false"></g2-sparkline>
#### · 迷你柱状图
```
<g2-sparkline
 :axis-name="{name: '日期', value: '数值'}"
 :data="[{name:'2018-01', value: 86085}...]"
 :color="'#FACC14'"
 :is-percent="false"
 :type="'interval'">
</g2-sparkline>
```
<g2-sparkline :type="'interval'" :axis-name="{name: '日期', value: '数值'}" :color="'#FACC14'" :is-percent="false"></g2-sparkline>

### 进度条(g2-progress-bar)
#### · 基础进度条
```
<g2-progress-bar
  :data="[{name:'中国', value: 0.88}, {name:'其他', value: 0.12}]"
  :color="['#FF7C81','#F0F2F5']"
  :mark-line="{use: false}"
  :guide="{showName: true, showValue: true, 
   labelColor: '#000000', labelSize:'14'}"
  :is-percent="true">
</g2-progress-bar>

<g2-progress-bar
  :data="[{name:'中国', value: 8878}, {name:'其他', value: 1231}]"
  :color="['#FF7C81','#F0F2F5']"
  :mark-line="{use: false}"
  :guide="{showName: true, showValue: true, 
   labelColor: '#000000', labelSize:'14'}"
  :is-percent="false">
</g2-progress-bar>
```
<div style="width:300px;">
 <g2-progress-bar
  :data="[{name:'中国', value: 0.88}, {name:'其他', value: 0.12}]"
  :color="['#FF7C81','#F0F2F5']"
  :mark-line="{use: false}"
  :guide="{showName: true, showValue: true, labelColor: '#000000', labelSize:'14'}"
  :is-percent="true">
 </g2-progress-bar>
</div>
<div style="width:300px;">
 <g2-progress-bar
  :data="[{name:'中国', value: 8878}, {name:'其他', value: 1231}]"
  :color="['#FF7C81','#F0F2F5']"
  :mark-line="{use: false}"
  :guide="{showName: true, showValue: true, labelColor: '#000000', labelSize:'14'}"
  :is-percent="false">
 </g2-progress-bar>
</div>

#### · 隐藏辅助元素的进度条
```
<g2-progress-bar
 :data="[{name:'中国', value: 0.88}, {name:'其他', value: 0.12}]"
 :guide="{showName: false, showValue: false}"
 :mark-line="{use: false}"
 :is-percent="true">
</g2-progress-bar>
```
<div style="width:300px;">
  <g2-progress-bar :data="[{name:'中国', value: 0.88}, {name:'其他', value: 0.12}]" :guide="{showName: false, showValue: false}" :mark-line="{use: false}":is-percent="true"></g2-progress-bar>
</div>

#### · 带有标记线的进度条
```
<g2-progress-bar
 :data="[{name:'中国', value: 0}, {name:'其他', value: 5000}]"
 :color="['#FFB6C1', '#e8e8e8']"
 :guide="{showName: false, showValue: false}"
 :mark-line="{use: true, name: '均值', value: 0, lineColor: '#1890FF',labelColor:'#000000', labelSize: '14'}"
 :is-percent="false">
</g2-progress-bar>
<g2-progress-bar
 :data="[{name:'中国', value: 5000}, {name:'其他', value: 5000}]"
 :color="['#FFB6C1', '#e8e8e8']"
 :guide="{showName: false, showValue: false}"
 :mark-line="{use: true, name: '均值', value: 5000, lineColor: '#1890FF',labelColor:'#000000', labelSize: '14'}"
 :is-percent="false">
</g2-progress-bar>
<g2-progress-bar
 :data="[{name:'中国', value: 8878}, {name:'其他', value: 1231}]"
 :color="['#FFB6C1', '#e8e8e8']"
 :guide="{showName: false, showValue: false}"
 :mark-line="{use: true, name: '均值', value: 9999, lineColor: '#1890FF',labelColor:'#000000', labelSize: '14'}"
 :is-percent="false">
</g2-progress-bar>

```
<div style="width:300px;">
<g2-progress-bar
 :data="[{name:'中国', value: 8878}, {name:'其他', value: 1231}]"
 :color="['#FFB6C1', '#e8e8e8']"
 :guide="{showName: false, showValue: false}"
 :mark-line="{use: true, name: '最小值', value: 0, lineColor: '#1890FF',labelColor:'#000000', labelSize: '14'}"
 :is-percent="false">
</g2-progress-bar>
<g2-progress-bar
 :data="[{name:'中国', value: 8878}, {name:'其他', value: 1231}]"
 :color="['#FFB6C1', '#e8e8e8']"
 :guide="{showName: false, showValue: false}"
 :mark-line="{use: true, name: '均值', value: 5000, lineColor: '#1890FF',labelColor:'#000000', labelSize: '14'}"
 :is-percent="false">
</g2-progress-bar>
<g2-progress-bar
 :data="[{name:'中国', value: 8878}, {name:'其他', value: 1231}]"
 :color="['#FFB6C1', '#e8e8e8']"
 :guide="{showName: false, showValue: false}"
 :mark-line="{use: true, name: '最大值', value: 10109, lineColor: '#1890FF',labelColor:'#000000', labelSize: '14'}"
 :is-percent="false">
</g2-progress-bar>
</div>

### 其他
------
#### · 液体填充(g2-liquidfill)
```
<g2-liquidfill style="width: 300px;margin: auto;" :height="300"
 :max-value="1" :is-percent="true" :data="[{ name: '中国', value: 0.6 }]"
 :axis-name="{name:'国家', value:'GDP占比'}">
</g2-liquidfill>
<g2-liquidfill style="width: 300px;margin: auto;" :height="300"
 :max-value="1" :is-percent="true" :data="[{ name: '中国', value: 0.6 }]"
 :axis-name="{name:'国家', value:'GDP占比'}"
 :color="{ backgroundColor: '', labelColor: '' }">
</g2-liquidfill>
```
<g2-liquidfill style="width: 300px;margin: auto;" :max-value="1" :is-percent="true" :data="[{ name: '中国', value: 0.6 }]"
    :axis-name="{name:'国家', value:'GDP占比'}"></g2-liquidfill>

<g2-liquidfill style="width: 300px;margin: auto;" :max-value="1" :is-percent="true" :data="[{ name: '中国', value: 0.6 }]"
    :axis-name="{name:'国家', value:'GDP占比'}" :color="{ backgroundColor: 'red', labelColor: 'yellow' }"></g2-liquidfill>

#### · 带图片遮罩的词云(g2-word-cloud)
```
<g2-word-cloud :height="300" :width="600"
  :data="[{ 'value': 6, 'name': 'Analysis' }, { 'value': 6, 'name': 'Data Mining' },
   { 'value': 6, 'name': 'Data Vis' }, { 'value': 6, 'name': 'Design' },
   { 'value': 6, 'name': 'Grammar' }, { 'value': 6, 'name': 'Graphics' },
   { 'value': 6, 'name': 'Graph' }, { 'value': 6, 'name': 'Hierarchy' },
   { 'value': 6, 'name': 'Labeling' }, { 'value': 6, 'name': 'Layout' },
   { 'value': 6, 'name': 'Quantitative' }, { 'value': 6, 'name': 'Relation' },
   { 'value': 6, 'name': 'Statistics' }, { 'value': 6, 'name': '可视化' },
   { 'value': 6, 'name': '数据' }, { 'value': 6, 'name': '数据可视化' }]"
  :use-image="true" :imageSrc="'base64/url'">
</g2-word-cloud>
<g2-word-cloud :height="300" :width="600"
  :data="[{ 'value': 6, 'name': 'Analysis' }, { 'value': 6, 'name': 'Data Mining' },
   { 'value': 6, 'name': 'Data Vis' }, { 'value': 6, 'name': 'Design' },
   { 'value': 6, 'name': 'Grammar' }, { 'value': 6, 'name': 'Graphics' },
   { 'value': 6, 'name': 'Graph' }, { 'value': 6, 'name': 'Hierarchy' },
   { 'value': 6, 'name': 'Labeling' }, { 'value': 6, 'name': 'Layout' },
   { 'value': 6, 'name': 'Quantitative' }, { 'value': 6, 'name': 'Relation' },
   { 'value': 6, 'name': 'Statistics' }, { 'value': 6, 'name': '可视化' },
   { 'value': 6, 'name': '数据' }, { 'value': 6, 'name': '数据可视化' }]"
  :use-image="false">
</g2-word-cloud>
```
<g2-word-cloud :height="300" :width="600" :use-image="true"></g2-word-cloud>
<g2-word-cloud :height="300" :width="600" :use-image="false"></g2-word-cloud>

### 自定义图表(g2-custom)
------
```
<!-- 通过<g2-custom>标签实现简单柱图 -->
<template>
    <g2-custom :option="customOption"></g2-custom>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  },
  methods: {
    customOption (chart, dataset) {
      <!-- chart 为图表实例，dataset为数据集实例 -->
      let data = [{ name: 'test1', value: 123 }, { name: 'test2', value: 246 }]
      let dv = dataset.createView().source(data)
      chart.source(dv)
      chart.interval().position('name*value')
    }
  }
}
</script>

<style lang="less">
</style>
```

## 通用参数
### 颜色说明
支持字符串、16进制、rgb、rgba等形式的数值
``````
'white'
'#000000' / '#000'
'rgb(255,255,255)' / 'rgba(255,255,255,1)'
``````

### 坐标轴颜色参数
------
#### 1.通用调整方案
适用于: 
* area 面积图
* bubble 气泡图
* column 柱状图/条形图
* double-axis-column  双Y轴柱状图/条形图 (三个轴，x,y1,y2)
* line 折线图
* scatter-point 散点图
``````
  axisColor:{ lineColor: '#123', labelColor: '#456' }
``````


#### 2.需要特殊调整
适用于: 
* histogram 直方图 
``````
  axisColor:{ titleColor: '#123', labelColor: '#456' }
``````
适用于:
* mirror-interval 镜像分面柱图
``````
  axisColor:{ labelColor: '#456' }
``````
适用于: 
* liquidfill 液体填充 
``````
  color:{ backgroundColor: '#123', labelColor: '#456' }
``````
适用于:
* progress-bar 进度条 
``````
  标记线  markLine:{lineColor: '#1890FF',labelColor: '#000000'}
  辅助元素 guide: {labelColor:'#000000',labelSize:'14'}
``````

(注: pie radar 还未作调整)

### 隐藏或使用图表的tooptip
useTooltip默认为使用(true)状态，关闭的话将值置为false即可
``````
  useTooltip: false
``````
