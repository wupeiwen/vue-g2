>vue-g2 | 基于 [Vue](https://cn.vuejs.org/index.html) 和 [AntV/G2](https://antv.alipay.com/zh-cn/g2/3.x/index.html) 的可视化组件库

![](https://travis-ci.com/wupeiwen/vue-g2.svg?branch=master)
[![](https://img.shields.io/npm/v/vue-g2.svg)](https://www.npmjs.com/package/vue-g2)
![](https://img.shields.io/bundlephobia/min/vue-g2.svg)
![](https://img.shields.io/npm/dt/vue-g2.svg)
[![](https://img.shields.io/badge/-详细文档-green.svg)](https://wupeiwen.github.io/vue-g2)

## 在vue-cli中使用
------
### 1.安装依赖
可以通过 npm 添加依赖
```npm
npm i @antv/g2@3.5.15 @antv/data-set@0.9.6 vue-g2 --save
```
或者通过 yarn 添加依赖
```yarn
yarn add @antv/g2@3.5.15 @antv/data-set@0.9.6 vue-g2
```

### 2.引入依赖
在 main.js 中写入以下内容：
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

### 3.Vue组件中使用
在需要使用可视化图表的vue组件中通过 html 标签的形式使用, 如：
```vue
<template>
  <g2-pie type="pie" 
    :axis-name="{ name: '年份', value: 'GDP(亿美元)' }"
    :data="data"
    :label-option="{ show: true, offset: 20 }">
  </g2-pie>
</template>

<script>
export default {
  data () {
    return {
      data: [
        { name: '2016', value: 2 }, 
        { name: '2017', value: 1 }, 
        { name: '2018', value: 3 }
      ]
    }
  }
}
</script>

<style>
</style>
```
![饼图](https://raw.githubusercontent.com/wupeiwen/vue-g2/develop/public/vue-g2-pie.gif "饼图-外部标签")

## 在nuxt.js(ssr)中使用
------
### 1.安装依赖
可以通过 npm 添加依赖
```npm
npm i @antv/g2@3.5.15 @antv/data-set@0.9.6 vue-g2 --save
```
或者通过 yarn 添加依赖
```yarn
yarn add @antv/g2@3.5.15 @antv/data-set@0.9.6 vue-g2
```

### 2.新建插件
在 plugins 文件夹中新建 vue-g2.client.js 文件，并写入以下内容：
```js
import 'vue-g2'
```

### 3.引入插件
将插件引入nuxt.config.js
```js
  plugins: [
    { src: '~/plugins/vue-g2.client' }
  ]
```

### 4.Vue组件中使用
在需要使用可视化图表的vue组件中通过 html 标签的形式使用, 如：
```vue
<template>
  <g2-pie type="pie" 
    :axis-name="{ name: '年份', value: 'GDP(亿美元)' }"
    :data="data"
    :label-option="{ show: true, offset: 20 }">
  </g2-pie>
</template>

<script>
export default {
  data () {
    return {
      data: [
        { name: '2016', value: 2 }, 
        { name: '2017', value: 1 }, 
        { name: '2018', value: 3 }
      ]
    }
  }
}
</script>
```
![饼图](https://raw.githubusercontent.com/wupeiwen/vue-g2/develop/public/vue-g2-pie-nuxt.png "饼图")

## 在浏览器中直接使用
------
目前可以通过`http://unpkg.com/vue-g2`获取最新版本，也可通过`http://unpkg.com/vue-g2@x.x.x/lib/vue-g2.umd.js`获取指定版本。在页面上引入 js 即可开始使用。(需要引入vue、g2、data-set等前置依赖)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>通过CDN使用vue-g2</title>
</head>
<body>
  <!-- 使用雷达图组件 -->
  <div id="example">
    <g2-radar
     style="width: 500px; height: 500px; margin: 0 auto;" 
     :is-show-area="false" 
     :show-legend="false"
     :axis-name="{a:'companya'}" 
     :data="[{item: 'Design',a: 70},{item: 'Development',a: 60},
      {item: 'Marketing',a: 50},{item: 'Users',a: 40},
      {item: 'Test',a: 60}]">
    </g2-radar>
  </div>
  <!-- CDN方式引入 vue -->
  <script src="//unpkg.com/vue"></script>
  <!-- CDN方式引入 @antv/g2 -->
  <script src="//unpkg.com/@antv/g2@3.5.7/build/g2.js"></script>
  <!-- CDN方式引入 @antv/data-set -->
  <script src="//unpkg.com/@antv/data-set@0.9.6/build/data-set.js"></script>
  <!-- CDN方式引入 vue-g2 -->
  <script src="//unpkg.com/vue-g2/lib/vue-g2.umd.js"></script>
  <script>
    new Vue({
      el: '#example'
    })
  </script>
</body>
</html>
```
![雷达图](https://raw.githubusercontent.com/wupeiwen/vue-g2/develop/public/vue-g2-radar.png "雷达图")