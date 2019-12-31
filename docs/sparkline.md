# 迷你图(g2-sparkline)
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