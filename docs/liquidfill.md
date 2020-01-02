# 液体填充图(g2-liquidfill)
>用于展示单一类别的占比情况，图形中有水纹的波动效果。
------
```vue
<g2-liquidfill style="width: 300px;margin: auto;" :height="300"
 :max-value="1" :is-percent="true" :data="[{ name: '中国', value: 0.6 }]"
 :axis-name="{name:'国家', value:'GDP占比'}"
 :color="{ backgroundColor: '#1890FF', labelColor: '#000000' }">
</g2-liquidfill>
```
<g2-liquidfill style="width: 300px;margin: auto;" :max-value="1" :is-percent="true" :data="[{ name: '中国', value: 0.6 }]"
    :axis-name="{name:'国家', value:'GDP占比'}" :color="{ backgroundColor: '#1890FF', labelColor: '#000000' }"></g2-liquidfill>