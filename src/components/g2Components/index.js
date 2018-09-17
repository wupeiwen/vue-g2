/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-09-17 15:08:38
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-09-17 16:22:42
 * @Description: 全局注册图表
 */

import Vue from 'vue'
import g2Line from '@/components/g2Components/line'
import g2MirrorInterval from '@/components/g2Components/mirrorInterval'
import g2Liquidfill from '@/components/g2Components/liquidfill'

const Components = {
  g2Line,
  g2MirrorInterval,
  g2Liquidfill
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
