# 散点图(g2-scatter-point)
>通过观察散点图上数据点的分布情况，我们可以推断出变量间的相关性。如果变量之间不存在相互关系，那么在散点图上就会表现为随机分布的离散的点，如果存在某种相关性，那么大部分的数据点就会相对密集并以某种趋势呈现。数据的相关关系主要分为：正相关（两个变量值同时增长）、负相关（一个变量值增加另一个变量值下降）、不相关、线性相关、指数相关等。那些离点集群较远的点我们称为离群点或者异常点。
------
## 基础散点图
```vue
<g2-scatter-point :data="[{ x: 20, y: 5 },{ x: 30, y: 10 }]">
</g2-scatter-point>
```
<g2-scatter-point :data="[{ x: 20, y: 5 },{ x: 30, y: 10 }]"></g2-scatter-point>

## 基于类别分类的多色散点图
```vue
<g2-scatter-point :show-legend="true"
 :data="[{ x: 20, y: 5, type: 'type1' },{ x: 20, y: 10, type: 'type2' },
  { x: 30, y: 10, type: 'type1' },{ x: 30, y: 5, type: 'type2' },
  { x: 20, y: 7, type: 'type3' },{ x: 15, y: 14, type: 'type4' }]">
</g2-scatter-point>
```
<g2-scatter-point :show-legend="true"
    :data="[{ x: 20, y: 5, type: 'type1' },{ x: 20, y: 10, type: 'type2' },
    { x: 30, y: 10, type: 'type1' },{ x: 30, y: 5, type: 'type2' },
    { x: 20, y: 7, type: 'type3' },{ x: 15, y: 14, type: 'type4' }]">
</g2-scatter-point>

## 基于x(y)轴数值范围分类的多色散点图
```vue
<g2-scatter-point :show-legend="true"
 :data="[{ x: 0.2, y: 5, type: 'type1' },{ x: 0.15, y: 10, type: 'type2' },
  { x: 0.35, y: 10, type: 'type1' },{ x: 0.9, y: 5, type: 'type2' },
  { x: 0.45, y: 7, type: 'type3' },{ x: 0.6, y: 14, type: 'type4' }]"
  :is-percent="{x: true, y: false}"
  :interval-color="['#FACC14', '#2FC25B', '#1890FF']"
  :interval-range="{use: true, axis: 'x', limit: [0.25, 0.5]}">
</g2-scatter-point>
```
<g2-scatter-point :show-legend="true"
    :data="[{ x: 0.2, y: 5, type: 'type1' },{ x: 0.15, y: 10, type: 'type2' },
    { x: 0.35, y: 10, type: 'type1' },{ x: 0.9, y: 5, type: 'type2' },
    { x: 0.45, y: 7, type: 'type3' },{ x: 0.6, y: 14, type: 'type4' }]"
    :is-percent="{x: true, y: false}"
    :interval-color="['#FACC14', '#2FC25B', '#1890FF']"
    :interval-range="{use: true, axis: 'x', limit: [0.25, 0.5]}">
</g2-scatter-point>