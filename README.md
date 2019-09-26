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
npm i @antv/g2 @antv/data-set vue-g2 --save
```
或者通过 yarn 添加依赖
```
yarn add @antv/g2 @antv/data-set vue-g2
```

### 引入
------
在 Vue 项目的 main.js 中写入以下内容：
```js
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
```vue
<template>
  <g2-pie type="pie" :axis-name="{ name: '年份', value: 'GDP(亿美元)' }"
    :data="[{ name: '2016', value: 2 }, { name: '2017', value: 1 }, { name: '2018', value: 3 }]"
    :label-option="{ show: true, offset: 20 }">
  </g2-pie>
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
![饼图](https://raw.githubusercontent.com/wupeiwen/vue-g2/dev/public/vue-g2-pie.gif "饼图-外部label")

## 关于自定义图表
目前可以通过`<g2-custom></g2-custom>`标签来实现自定义图表，满足更复杂的业务需求。实现过程可参考如下代码：
```vue
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
      // chart 为图表实例，dataset 为数据集实例
      const data = [{ name: 'test1', value: 123 }, { name: 'test2', value: 246 }]
      const dv = dataset.createView().source(data)
      chart.source(dv)
      chart.interval().position('name*value')
    }
  }
}
</script>

<style lang="less">
</style>
```
