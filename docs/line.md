# 折线图(g2-line)
>在折线图中，数据是递增还是递减、增减的速率、增减的规律（周期性、螺旋性等）、峰值等特征都可以清晰地反映出来。所以，折线图常用来分析数据随时间的变化趋势，也可用来分析多组数据随时间变化的相互作用和相互影响。例如可用来分析某类商品或是某几类相关的商品随时间变化的销售情况，从而进一步预测未来的销售情况。在折线图中，一般水平轴（X轴）用来表示时间的推移，并且间隔相同；而垂直轴（Y轴）代表不同时刻的数据的大小。
------
## 基础折线图
```vue
<g2-line :is-smooth="false" :padding="['auto', 100]"
 :data="[{ name: '1997', value: 86085 },
  { name: '2007', value: 144776 },
  { name: '2017', value: 193868 }]"
 :axis-name="{name:'年份', value:'GDP(亿美元)'}">
</g2-line>
```
<g2-line :is-smooth="false" :padding="['auto', 100]" :data="[{ name: '1997', value: 86085 },{ name: '2007', value: 144776 },{ name: '2017', value: 193868 }]" :axis-name="{name:'年份', value:'GDP(亿美元)'}"></g2-line>

## 多条折线图
```vue
<g2-line :is-smooth="false" :padding="['auto', 100]"
 :data="[{ name: '1997', value: 86085, type: 'America' },
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
  { name: '2017', value: 36865, type: 'Germany' }
 ]"
 :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}">
</g2-line>
```
<g2-line :is-smooth="false" :padding="['auto', 100]" :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-line>

## 曲线折线图
```vue
<g2-line :is-smooth="true" :padding="['auto', 100]"
 :data="[{ name: '1997', value: 86085, type: 'America' },
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
  { name: '2017', value: 36865, type: 'Germany' }
 ]"
 :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}">
</g2-line>
```
<g2-line :is-smooth="true" :padding="['auto', 100]" :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-line>