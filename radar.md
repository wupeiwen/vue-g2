# 雷达图(g2-radar)
>雷达图是以相同点开始的轴上表示的三个或更多个定量变量的二维图形的形式显示多变量数据的图形方法。轴的相对位置和角度通常是不知情的。
------
## 基础雷达图
```vue
<g2-radar :is-show-area="true" :show-legend="true"
  :axis-name="{a:'companya',b:'companyb',c:'companyc'}"
  :data="[{item: 'Design',a: 70,b: 30,c: 11},
   {item: 'Development',a: 60,b: 70,c: 11},
   {item: 'Marketing',a: 50,b: 60,c: 11},
   {item: 'Users',a: 40,b: 50,c: 11},
   {item: 'Test',a: 60,b: 70,c: 11}]">
</g2-radar>
```
<g2-radar :is-show-area="true" :show-legend="true" :axis-name="{a:'companya',b:'companyb',c:'companyc'}" :data="[{item: 'Design',a: 70,b: 30,c: 11},{item: 'Development',a: 60,b: 70,c: 11},{item: 'Marketing',a: 50,b: 60,c: 11},{item: 'Users',a: 40,b: 50,c: 11},{item: 'Test',a: 60,b: 70,c: 11}]">
</g2-radar>

## 基础雷达图(线)
```vue
<g2-radar :is-show-area="false" :show-legend="true"
  :axis-name="{a:'companya',b:'companyb',c:'companyc'}"
  :data="[{item: 'Design',a: 70,b: 30,c: 11},
   {item: 'Development',a: 60,b: 70,c: 11},
   {item: 'Marketing',a: 50,b: 60,c: 11},
   {item: 'Users',a: 40,b: 50,c: 11},
   {item: 'Test',a: 60,b: 70,c: 11}]">
</g2-radar>
```
<g2-radar :is-show-area="false" :show-legend="true" :axis-name="{a:'companya',b:'companyb',c:'companyc'}" :data="[{item: 'Design',a: 70,b: 30,c: 11},{item: 'Development',a: 60,b: 70,c: 11},{item: 'Marketing',a: 50,b: 60,c: 11},{item: 'Users',a: 40,b: 50,c: 11},{item: 'Test',a: 60,b: 70,c: 11}]">
</g2-radar>