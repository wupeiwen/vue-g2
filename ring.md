# 环图
>环图，其本质是饼图将中间区域挖空。饼图的整体性太强，我们会将注意力集中在比较饼图内各个扇形之间占整体比重的关系。但如果我们将两个饼图放在一起，饼图很难同时对比两个图。环图在解决上述问题时，采用了让我们更关注长度而不是面积的做法。这样我们就能相对简单的对比不同的环图。同时环图相对于饼图空间的利用率更高，比如我们可以使用它的空心区域显示文本信息，比如标题等。
------
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

