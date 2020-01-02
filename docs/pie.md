# 饼图(g2-pie)
>饼图广泛得应用在各个领域，用于表示不同分类的占比情况，通过弧度大小来对比各种分类。饼图通过将一个圆饼按照分类的占比划分成多个区块，整个圆饼代表数据的总量，每个区块（圆弧）表示该分类占总体的比例大小，所有区块（圆弧）的加和等于 100%。可以很好地帮助用户快速了解数据的占比分配。
------
## 基础饼图
```vue
<g2-pie :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"
 :data="[{ name: '2016', value: 2 },{ name: '2017', value: 1 },{ name: '2018', value: 3 }]">
</g2-pie>
```
<g2-pie :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"></g2-pie>

## 饼图--外部标签
```vue
<g2-pie :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"
 :data="[{ name: '2016', value: 2 },{ name: '2017', value: 1 },{ name: '2018', value: 3 }]"
 :label-option="{show:true, offset: 20}">
</g2-pie>
```
<g2-pie :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}" :label-option="{show:true, offset: 20}"></g2-pie>

## 饼图--内部标签
```vue
<g2-pie :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}"
 :data="[{ name: '2016', value: 2 },{ name: '2017', value: 1 },{ name: '2018', value: 3 }]"
 :label-option="{show:true, offset: -20}">
</g2-pie>
```
<g2-pie :type="'pie'" :axis-name="{name:'年份', value:'GDP(亿美元)'}" :label-option="{show:true, offset: -20}"></g2-pie>