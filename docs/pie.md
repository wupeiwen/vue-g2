# 饼图(g2-pie)
------
## 基础饼图
```vue
<g2-pie :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"
 :data="[{ name: '2016', value: 2 },{ name: '2017', value: 1 },{ name: '2018', value: 3 }]">
</g2-pie>
```
<g2-pie :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"></g2-pie>

## 饼图--外部label
```vue
<g2-pie :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"
 :data="[{ name: '2016', value: 2 },{ name: '2017', value: 1 },{ name: '2018', value: 3 }]"
 :label-option="{show:true, offset: 20}">
</g2-pie>
```
<g2-pie :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}" :label-option="{show:true, offset: 20}"></g2-pie>

## 饼图--内部label
```vue
<g2-pie :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"
 :data="[{ name: '2016', value: 2 },{ name: '2017', value: 1 },{ name: '2018', value: 3 }]"
 :label-option="{show:true, offset: -20}">
</g2-pie>
```
<g2-pie :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}" :label-option="{show:true, offset: -20}"></g2-pie>

## 基础环图
```vue
<g2-pie :type="'ring'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"
 :data="[{ name: '2016', value: 2 },{ name: '2017', value: 1 },{ name: '2018', value: 3 }]">
</g2-pie>
```
<g2-pie :type="'ring'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"></g2-pie>

## 环图--辅助文字
```vue
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

## 南丁格尔玫瑰图
```vue
<g2-pie :type="'nightingale'"
 :axis-name="{name:'年份', value:'GDP(亿美元)'}"
 :data="[{ name: '2016', value: 2 },{ name: '2017', value: 1 },{ name: '2018', value: 3 }]"
 :inner-radius="0">
</g2-pie>
```
<g2-pie :type="'nightingale'" :axis-name="{name:'年份', value:'GDP(亿美元)'}" :inner-radius="0"></g2-pie>

## 南丁格尔玫瑰环图
```vue
<g2-pie :type="'nightingale'"
 :axis-name="{name:'年份', value:'GDP(亿美元)'}">
 :data="[{ name: '2016', value: 2 },{ name: '2017', value: 1 },{ name: '2018', value: 3 }]"
</g2-pie>
```
<g2-pie :type="'nightingale'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"></g2-pie>