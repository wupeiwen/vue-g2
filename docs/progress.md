# 进度条(g2-progress-bar)
## 基础进度条
```vue
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

## 隐藏辅助元素的进度条
```vue
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

## 带有标记线的进度条
```vue
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