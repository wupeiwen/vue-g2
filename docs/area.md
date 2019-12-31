### 面积图(g2-area)
------
```vue
<g2-area :is-smooth="true" :padding="['auto', 100]"
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
</g2-area>
```
<g2-area :is-smooth="true" :padding="['auto', 100]" :axis-name="{name:'年份', value:'GDP(亿美元)', type:'国家'}"></g2-area>