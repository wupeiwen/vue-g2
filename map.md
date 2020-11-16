# 地图
------

## 气泡地图(g2-map-bubble)
```
<template>
<!-- map-data: 地图底图使用genjson数据，组件的默认数据为上海市 -->
<g2-map-bubble
  style="width:600px;height:600px;margin:0 auto;"
  :padding="[20,20]"
  :map-data="genjson" 
  :data="[
    {'name': '嘉定区', 'lat': '31.381', 'lng': '121.25367', 'value': 10},
    {'name': '徐汇区', 'lat': '31.190', 'lng': '121.444', 'value': 20},
    {'name': '浦东新区', 'lat': '31.041', 'lng': '121.779', 'value': 30}
  ]"
  :map-config="{
    backgroundColor: '#dddddd',
    opacity: 0.85,
    lineColor: '#b1b1b1',
    lineWidth: 0.5
  }"
  :bubble-config="{
    backgroundColor: '#ff2f29',
    opacity: 0.45,
    lineColor: '#ffffff',
    lineWidth: 0.5,
    size: [2, 30]
  }">
</g2-map-bubble>
</template>

<script>
export default = {
  name: 'app',
  computed: {
    geojson: function() {
      <!-- 加载本地的genjson数据 -->
      <!-- 中国区域的数据可通过该地址下载 http://datav.aliyun.com/tools/atlas/#&lat=30.332329214580188&lng=106.72278672066881&zoom=3.5 -->
      return require('shanghai.geo.json')
    }
  }
}
</script>
```
<g2-map-bubble style="width:600px;height:600px;margin:0 auto;">
</g2-map-bubble>

## 填充地图--颜色模式-区间映射(g2-map-fill)
```
<template>
<!-- map-data: 地图底图使用genjson数据，组件的默认数据为上海市 -->
<!-- color: 颜色模式-区间映射 -->
<g2-map-fill
  style="width:600px;height:600px;margin:0 auto;"
  :padding="[20,20]"
  :map-data="genjson" 
  :data="[
    {name: '嘉定区', value: 10},
    {name: '徐汇区', value: 20},
    {name: '浦东新区', value: 30}
  ]"
  :map-config="{
    backgroundColor: '#dddddd',
    opacity: 0.85,
    lineColor: '#b1b1b1',
    lineWidth: 0.5
  }"
  :color="{
    type: 'mapping',
    mapping: '#e5f5e0-#31a354'
  }">
</g2-map-fill>
</template>

<script>
export default = {
  name: 'app',
  computed: {
    geojson: function() {
      <!-- 加载本地的genjson数据 -->
      <!-- 中国区域的数据可通过该地址下载 http://datav.aliyun.com/tools/atlas/#&lat=30.332329214580188&lng=106.72278672066881&zoom=3.5 -->
      return require('shanghai.geo.json')
    }
  }
}
</script>
```
<g2-map-fill style="width:600px;height:600px;margin:0 auto;">
</g2-map-fill>

## 填充地图--颜色模式-指定颜色(g2-map-fill)
```
<template>
<!-- map-data: 地图底图使用genjson数据，组件的默认数据为上海市 -->
<!-- data: 通过color属性指定颜色 -->
<!-- color: 颜色模式-指定颜色 -->
<g2-map-fill
  style="width:600px;height:600px;margin:0 auto;"
  :padding="[20,20]"
  :map-data="geojson"
  :data="[
    {name: '嘉定区', value: 10, color: 'red'},
    {name: '徐汇区', value: 20, color: 'yellow'},
    {name: '浦东新区', value: 30, color: 'blue'}
  ]"
  :map-config="{
    backgroundColor: '#dddddd',
    opacity: 0.85,
    lineColor: '#b1b1b1',
    lineWidth: 0.5
  }"
  :color="{
    type: 'specify'
  }">
</g2-map-fill>
</template>

<script>
export default = {
  name: 'app',
  computed: {
    geojson: function() {
      <!-- 加载本地的genjson数据 -->
      <!-- 中国区域的数据可通过该地址下载 http://datav.aliyun.com/tools/atlas/#&lat=30.332329214580188&lng=106.72278672066881&zoom=3.5 -->
      return require('shanghai.geo.json')
    }
  }
}
</script>
```
<g2-map-fill
  style="width:600px;height:600px;margin:0 auto;"
  :padding="[20,20]"
  :map-data="geojson"
  :data="[
    {name: '嘉定区', value: 10, color: 'red'},
    {name: '徐汇区', value: 20, color: 'yellow'},
    {name: '浦东新区', value: 30, color: 'blue'}
  ]"
  :map-config="{
    backgroundColor: '#dddddd',
    opacity: 0.85,
    lineColor: '#b1b1b1',
    lineWidth: 0.5
  }"
  :color="{
    type: 'specify'
  }">
</g2-map-fill>




