/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-09-17 15:08:38
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-20 14:19:11
 * @Description: 全局注册图表
 */

import Vue from 'vue'
// 折线图
import g2Line from '@/components/g2Components/line'
// 雷达图
import g2Radar from '@/components/g2Components/radar'
// 镜像分面(转置)
import g2MirrorInterval from '@/components/g2Components/mirrorInterval'
// 液体填充
import g2Liquidfill from '@/components/g2Components/liquidfill'
// 气泡图
import g2Bubble from '@/components/g2Components/bubble'
// 散点图
import g2ScatterPoint from '@/components/g2Components/scatterPoint'

const Components = {
  g2Line,
  g2Radar,
  g2MirrorInterval,
  g2Liquidfill,
  g2Bubble,
  g2ScatterPoint
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
