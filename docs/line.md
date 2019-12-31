# 折线图(g2-line)
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