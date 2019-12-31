### 词云图(g2-word-cloud)
------
```vue
<g2-word-cloud :height="300" :width="600"
  :data="[{ 'value': 6, 'name': 'Analysis' }, { 'value': 6, 'name': 'Data Mining' },
   { 'value': 6, 'name': 'Data Vis' }, { 'value': 6, 'name': 'Design' },
   { 'value': 6, 'name': 'Grammar' }, { 'value': 6, 'name': 'Graphics' },
   { 'value': 6, 'name': 'Graph' }, { 'value': 6, 'name': 'Hierarchy' },
   { 'value': 6, 'name': 'Labeling' }, { 'value': 6, 'name': 'Layout' },
   { 'value': 6, 'name': 'Quantitative' }, { 'value': 6, 'name': 'Relation' },
   { 'value': 6, 'name': 'Statistics' }, { 'value': 6, 'name': '可视化' },
   { 'value': 6, 'name': '数据' }, { 'value': 6, 'name': '数据可视化' }]"
  :use-image="true" :imageSrc="'base64/url'">
</g2-word-cloud>
<g2-word-cloud :height="300" :width="600"
  :data="[{ 'value': 6, 'name': 'Analysis' }, { 'value': 6, 'name': 'Data Mining' },
   { 'value': 6, 'name': 'Data Vis' }, { 'value': 6, 'name': 'Design' },
   { 'value': 6, 'name': 'Grammar' }, { 'value': 6, 'name': 'Graphics' },
   { 'value': 6, 'name': 'Graph' }, { 'value': 6, 'name': 'Hierarchy' },
   { 'value': 6, 'name': 'Labeling' }, { 'value': 6, 'name': 'Layout' },
   { 'value': 6, 'name': 'Quantitative' }, { 'value': 6, 'name': 'Relation' },
   { 'value': 6, 'name': 'Statistics' }, { 'value': 6, 'name': '可视化' },
   { 'value': 6, 'name': '数据' }, { 'value': 6, 'name': '数据可视化' }]"
  :use-image="false">
</g2-word-cloud>
```
<g2-word-cloud :height="300" :width="600" :use-image="true"></g2-word-cloud>
<g2-word-cloud :height="300" :width="600" :use-image="false"></g2-word-cloud>