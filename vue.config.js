const path = require('path')

module.exports = {
  publicPath: '/',
  outputDir: 'lib',
  lintOnSave: true,
  runtimeCompiler: false,
  productionSourceMap: true,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@$': path.join(__dirname, 'src')
      }
    },
    externals: process.env.TARGET === 'bundle' ? [
      { 'vue': 'vue' },
      { '@antv/g2': '@antv/g2' },
      { '@antv/data-set': '@antv/data-set' }
    ] : []
  }
}
