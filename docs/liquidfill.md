### 液体填充图(g2-liquidfill)
------
```vue
<g2-liquidfill style="width: 300px;margin: auto;" :height="300"
 :max-value="1" :is-percent="true" :data="[{ name: '中国', value: 0.6 }]"
 :axis-name="{name:'国家', value:'GDP占比'}">
</g2-liquidfill>
<g2-liquidfill style="width: 300px;margin: auto;" :height="300"
 :max-value="1" :is-percent="true" :data="[{ name: '中国', value: 0.6 }]"
 :axis-name="{name:'国家', value:'GDP占比'}"
 :color="{ backgroundColor: '', labelColor: '' }">
</g2-liquidfill>
```
<g2-liquidfill style="width: 300px;margin: auto;" :max-value="1" :is-percent="true" :data="[{ name: '中国', value: 0.6 }]"
    :axis-name="{name:'国家', value:'GDP占比'}"></g2-liquidfill>

<g2-liquidfill style="width: 300px;margin: auto;" :max-value="1" :is-percent="true" :data="[{ name: '中国', value: 0.6 }]"
    :axis-name="{name:'国家', value:'GDP占比'}" :color="{ backgroundColor: 'red', labelColor: 'yellow' }"></g2-liquidfill>