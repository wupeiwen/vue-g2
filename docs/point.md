# 散点图(g2-scatter-point)
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