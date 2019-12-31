/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-09-17 15:08:38
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2019-12-31 10:33:54
 * @Description: 图表组件自动化全局注册
 */

import Vue from 'vue'

const requireComponent = require.context(
  // 其组件目录的相对路径
  '@/components/g2Components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /[a-zA-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 设置组件的 PascalCase 命名
  const componentName = `g2-${fileName.replace(/^\.\/(.*)\.\w+$/, '$1')}`

  if (typeof window !== 'undefined' && window.Vue) {
    // 全局注册组件
    window.Vue.component(
      componentName,
      // 如果这个组件选项是通过 `export default` 导出的，
      // 那么就会优先使用 `.default`，
      // 否则回退到使用模块的根。
      componentConfig.default || componentConfig)
  } else {
    Vue.component(
      componentName,
      componentConfig.default || componentConfig
    )
  }
})
