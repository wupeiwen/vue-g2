/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-30 15:55:56
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-20 14:18:37
 * @Description: 全局注册图表
 */
import Vue from 'vue'
import g2Histogram from '@/components/g2/histogram'
import g2Pie from '@/components/g2/pie'
import g2GroupedColumn from '@/components/g2/groupedColumn'

const Components = {
  g2Histogram,
  g2Pie,
  g2GroupedColumn
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
