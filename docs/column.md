# 柱状图(g2-column)
------
## 基础柱状图
```vue
<g2-column :is-bar="false"
 :data="[{name: '1997', value: 86085},{name: '2007', value: 144776}
  ,{name: '2017', value: 193868}]"
 :axis-name="{name:'年份', value:'GDP(亿美元)'}">
</g2-column>
```
<g2-column :is-bar="false" :data="[{name: '1997', value: 86085},{name: '2007', value: 144776},{name: '2017', value: 193868}]" :axis-name="{name:'年份', value:'GDP(亿美元)'}"></g2-column>

## 分组柱状图
```vue
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

## 堆叠柱状图
```vue
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

## 基础条形图
```vue
<g2-column :is-bar="true" 
 :data="[{name: '1997', value: 86085},{name: '2007', value: 144776}
  ,{name: '2017', value: 193868}]"
 :axis-name="{name:'年份', value:'GDP(亿美元)'}">
</g2-column>
```
<g2-column :is-bar="true" :data="[{name: '1997', value: 86085},{name: '2007', value: 144776},{name: '2017', value: 193868}]"></g2-column>

## 分组条形图
```vue
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

## 堆叠条形图
```vue
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

## 双y(x)轴柱状图(g2-double-axis-column)
```vue
<g2-double-axis-column
 :axis-name="{name: '年份',value1: '数量',value2: '占比'}"
 :data="[{ name: '1997', value1: 86085, value2: 0.3 },
  { name: '2007', value1: 144776, value2: 0.2 },
  { name: '2017', value1: 193868, value2: 0.6 }]">
</g2-double-axis-column>
```
<g2-double-axis-column :axis-name="{name: '年份',value1: '数量',value2: '占比'}" :data="[{ name: '1997', value1: 86085, value2: 0.3 },{ name: '2007', value1: 144776, value2: 0.2 },{ name: '2017', value1: 193868, value2: 0.6 }]"></g2-double-axis-column>

## 直方图(g2-histogram)
------
```vue
<g2-histogram :bin-width="4"
 :bins="0" :data="[1,2,3,4,5,6,7,8,9,10]">
</g2-histogram>
```
<g2-histogram :bin-width="4" :bins="0"></g2-histogram>

## 镜像分面-转置(g2-mirror-interval)
------
```vue
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