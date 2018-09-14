/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-30 15:55:56
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-14 14:41:46
 * @Description: 全局注册图表
 */
import Vue from 'vue'
import g2Point from '@/components/g2/point'
import g2Histogram from '@/components/g2/histogram'
import g2Pie from '@/components/g2/pie'
import g2MirrorInterval from '@/components/g2/mirrorInterval'
import g2Radar from '@/components/g2/radar'
import g2Liquidfill from '@/components/g2/liquidfill'
import g2GroupedColumn from '@/components/g2/groupedColumn'

// export default {
//   install: function (vue) {
//     vue.component('g2Point', g2Point)
//     vue.component('g2Histogram', g2Histogram)
//     vue.component('g2Pie', g2Pie)
//     vue.component('g2MirrorInterval', g2MirrorInterval)
//     vue.component('g2Radar', g2Radar)
//     vue.component('g2Liquidfill', g2Liquidfill)
//     vue.component('g2GroupedColumn', g2GroupedColumn)
//   }
// }

const Components = {
  g2Point,
  g2Histogram,
  g2Pie,
  g2MirrorInterval,
  g2Radar,
  g2Liquidfill,
  g2GroupedColumn
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
