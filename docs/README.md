>基于 [Vue](https://cn.vuejs.org/index.html) 和 [AntV/G2](https://antv.alipay.com/zh-cn/g2/3.x/index.html) 的可视化组件库

## 快速开始
### 安装
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
效果图：

![vue-g2 饼图](http://7xu37n.com1.z0.glb.clouddn.com/vue-g2%E9%A5%BC%E5%9B%BE.jpg)

## 进度
目前完成了直方图（g2-groupedColumn）、柱状图（g2-histogram）、液体填充（g2-液体填充）、镜像分面柱图（g2-mirrorInterval）、饼图（g2-pie）、散点图（g2-point）、雷达图（g2-radar）的封装工作。

## 指南 （待完善）
### 直方图（g2-groupedColumn）

### 柱状图（g2-histogram）

### 液体填充（g2-liquidfill）

### 镜像分面柱图（g2-mirrorInterval）

### 饼图（g2-pie）
<!-- ![vue-g2 饼图](http://7xu37n.com1.z0.glb.clouddn.com/vue-g2%E9%A5%BC%E5%9B%BE.jpg) -->
### 散点图（g2-point）

### 雷达图（g2-radar）



