# 词云图(g2-word-cloud)
>词云是一种有效的文本数据可视化方法，常用于展示大量文本数据。在词云中，一般来说，权重较高的词相比于权重低的词更容易被人所注意，因此能够帮助用户对比文本的组成及其权重。
------
## 普通词云图
```vue
<g2-word-cloud :height="300" :width="600"
  :data="[
   { 'value': 6, 'name': 'Analysis' }, { 'value': 6, 'name': 'Data Mining' },
   { 'value': 6, 'name': 'Data Vis' }, { 'value': 6, 'name': 'Design' },
   { 'value': 6, 'name': 'Grammar' }, { 'value': 6, 'name': 'Graphics' },
   { 'value': 6, 'name': 'Graph' }, { 'value': 6, 'name': 'Hierarchy' },
   { 'value': 6, 'name': 'Labeling' }, { 'value': 6, 'name': 'Layout' },
   { 'value': 6, 'name': 'Quantitative' }, { 'value': 6, 'name': 'Relation' },
   { 'value': 6, 'name': 'Statistics' }, { 'value': 6, 'name': '可视化' },
   { 'value': 6, 'name': '数据' }, { 'value': 6, 'name': '数据可视化' }
  ]"
  :use-image="false">
</g2-word-cloud>
```
<g2-word-cloud :height="300" :width="600" :use-image="false"></g2-word-cloud>

## 使用图片遮罩的词云图
`imageSrc`属性需要传入遮罩图片base64, 不使用该属性时默认为云朵。
```vue
<g2-word-cloud :height="300" :width="600"
  :data="[
   { 'value': 6, 'name': 'Analysis' }, { 'value': 6, 'name': 'Data Mining' },
   { 'value': 6, 'name': 'Data Vis' }, { 'value': 6, 'name': 'Design' },
   { 'value': 6, 'name': 'Grammar' }, { 'value': 6, 'name': 'Graphics' },
   { 'value': 6, 'name': 'Graph' }, { 'value': 6, 'name': 'Hierarchy' },
   { 'value': 6, 'name': 'Labeling' }, { 'value': 6, 'name': 'Layout' },
   { 'value': 6, 'name': 'Quantitative' }, { 'value': 6, 'name': 'Relation' },
   { 'value': 6, 'name': 'Statistics' }, { 'value': 6, 'name': '可视化' },
   { 'value': 6, 'name': '数据' }, { 'value': 6, 'name': '数据可视化' }
  ]"
  :use-image="true" :imageSrc="'base64/url'">
</g2-word-cloud>
```
<g2-word-cloud :height="300" :width="600" :use-image="true"></g2-word-cloud>