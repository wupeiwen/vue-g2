## 颜色说明
支持字符串、16进制、rgb、rgba等形式的数值
``````other
'white'
'#000000' / '#000'
'rgb(255,255,255)' / 'rgba(255,255,255,1)'
``````

## 坐标轴颜色参数
------
### 1.通用调整方案
适用于: 
* area 面积图
* bubble 气泡图
* column 柱状图/条形图
* double-axis-column  双Y轴柱状图/条形图 (三个轴，x,y1,y2)
* line 折线图
* scatter-point 散点图

``````js
  axisColor: { lineColor: '#123', labelColor: '#456' }
``````


### 2.需要特殊调整
适用于: 
* histogram 直方图

``````js
  axisColor: { titleColor: '#123', labelColor: '#456' }
``````

适用于:
* mirror-interval 镜像分面柱图

``````js
  axisColor: { labelColor: '#456' }
``````

适用于: 
* liquidfill 液体填充 

``````js
  color: { backgroundColor: '#123', labelColor: '#456' }
``````

适用于:
* progress-bar 进度条 

``````js
  // 标记线
  markLine: {lineColor: '#1890FF',labelColor: '#000000'}
  // 辅助元素
  guide: {labelColor:'#000000',labelSize:'14'}
``````

(注: radar 还未作调整)

## 隐藏或使用图表的tooptip
useTooltip默认为使用(true)状态，关闭的话将值置为false即可
``````js
  useTooltip: false
``````