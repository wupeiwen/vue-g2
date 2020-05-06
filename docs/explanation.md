## 高度、宽度以及内边距
------
### 1.高度和宽度
所有图表均可通过`style="height: <Int>px; width: <Int>px; margin: 0 auto;"`配置高度；
```vue
 <g2-xxx style="height: 400px; width: 600px; margin: 0 auto;"></g2-xxx>
```
### 2.内边距
迷你图的内边距默认为0，除此之外的图表的通过`:padding="[<Int>/'auto', <Int>/'auto']`配置内边距;
```vue
 <g2-xxx :padding="[15, 10]'></g2-xxx>
```

## 坐标轴颜色
------
### 1.颜色说明
支持字符串、16进制、rgb、rgba等形式的数值
``````other
'white'
'#000000' / '#000'
'rgb(255,255,255)' / 'rgba(255,255,255,1)'
``````

### 2.通用调整方案
适用于: 
* area 面积图
* bubble 气泡图
* column 柱状图/条形图
* double-axis-column  双Y轴柱状图/条形图 (三个轴，x,y1,y2)
* line 折线图
* scatter-point 散点图

```vue
  <g2-xxx :axisColor="{ lineColor: '#123', labelColor: '#456 }"><g2-xxx >
```

### 3.需要特殊调整
适用于: 
* histogram 直方图

```vue
  <g2-histogram :axisColor="{ titleColor: '#123', labelColor: '#456' }"><g2-histogram>
```

适用于:
* mirror-interval 镜像分面柱图

```vue
  <g2-mirror-interval :axisColor="{ labelColor: '#456' }"><g2-mirror-interval>
```

适用于: 
* liquidfill 液体填充 

```vue
  <g2-liquidfill :color="{ backgroundColor: '#123', labelColor: '#456' }"><g2-liquidfill>
```

适用于:
* progress-bar 进度条 

```vue
  <!-- 标记线 -->
  <g2-progress-bar :markLine: {lineColor: '#1890FF',labelColor: '#000000'}><g2-progress-bar>
  <!-- 辅助元素 -->
  <g2-progress-bar :guide: {labelColor:'#000000',labelSize:'14'}><g2-progress-bar>
```

## Tooptip
------
除迷你图外，useTooltip默认为使用(true)状态，将其值置为false即可关闭
```vue
  <g2-xxx :useTooltip="false"></g2-xxx>
```