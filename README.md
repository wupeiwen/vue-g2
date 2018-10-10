>基于 [Vue](https://cn.vuejs.org/index.html) 和 [AntV/G2](https://antv.alipay.com/zh-cn/g2/3.x/index.html) 的可视化组件库

[查看在线文档](https://wupeiwen.github.io/vue-g2)
[查看npm](https://www.npmjs.com/package/vue-g2)

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
  <g2-pie :id="'pie3'" :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"
   :data="[{ name: '2016', value: 2 },{ name: '2017', value: 1 },{ name: '2018', value: 3 }]"
   :label-option="{show:true, offset: 20}">
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
![饼图](https://github.com/wupeiwen/vue-g2/tree/dev/public/vue-g2-pie.gif "饼图-外部label")



