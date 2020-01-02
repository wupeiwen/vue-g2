# 气泡图(g2-bubble)
> 散点图的变种，因形状类似于气泡取名气泡图。气泡图通过气泡的位置、颜色以及面积大小，分析数据之间的相关性，比较和展示不同类别圆点之间的关系。
------
```vue
<g2-bubble :padding="[60, 'auto']" 
  :data="[
    { x: 20, y: 5, size: 15, type: 'type1' },
    { x: 30, y: 10, size: 8, type: 'type2' },
    { x: 15, y: 20, size: 15, type: 'type3' }
  ]">
</g2-bubble>
```
<g2-bubble :padding="[60, 'auto']"></g2-bubble>