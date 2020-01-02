# 迷你图(g2-sparkline)
>隐藏了轴、图例、便签等元素的极简图表，通常用在较小面积的区域，目前有`line`折线、`area`面积、`interval`柱状三种类别。
## 迷你折线图
```vue
<g2-sparkline
 :axis-name="{name: '日期', value: '数值'}"
 :data="[{name:'2018-01', value: 86085}...]"
 :color="'#1890FF'"
 :is-percent="false"
 :type="'line'">
</g2-sparkline>
```
<g2-sparkline :type="'line'" :axis-name="{name: '日期', value: '数值'}" :color="'#1890FF'" :is-percent="false"></g2-sparkline>

## 迷你面积图
```vue
<g2-sparkline
 :axis-name="{name: '日期', value: '数值'}"
 :data="[{name:'2018-01', value: 86085}...]"
 :color="'#2FC25B'"
 :is-percent="false"
 :type="'area'">
</g2-sparkline>
```
<g2-sparkline :type="'area'" :axis-name="{name: '日期', value: '数值'}" :color="'#2FC25B'" :is-percent="false"></g2-sparkline>

## 迷你柱状图
```vue
<g2-sparkline
 :axis-name="{name: '日期', value: '数值'}"
 :data="[{name:'2018-01', value: 86085}...]"
 :color="'#FACC14'"
 :is-percent="false"
 :type="'interval'">
</g2-sparkline>
```
<g2-sparkline :type="'interval'" :axis-name="{name: '日期', value: '数值'}" :color="'#FACC14'" :is-percent="false"></g2-sparkline>