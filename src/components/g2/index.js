/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-30 15:55:56
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-17 16:22:19
 * @Description: 全局注册图表
 */
import Vue from 'vue'
import g2Histogram from '@/components/g2/histogram'
import g2Pie from '@/components/g2/pie'
import g2Radar from '@/components/g2/radar'
import g2GroupedColumn from '@/components/g2/groupedColumn'
import g2ScatterPoint from '@/components/g2/scatterPoint'
import g2Bubble from '@/components/g2/bubble'

const Components = {
  g2Histogram,
  g2Pie,
  g2Radar,
  g2GroupedColumn,
  g2ScatterPoint,
  g2Bubble
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
