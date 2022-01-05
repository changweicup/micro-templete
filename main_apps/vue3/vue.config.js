
module.exports = {
  outputDir: 'main-vue3',
  publicPath: '/',
  productionSourceMap: false,
  devServer: {
    hot: false,
    disableHostCheck: true,
    port: 3000,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  lintOnSave: false,
  // 自定义webpack配置
  configureWebpack: {
    output: {
      jsonpFunction: 'webpackJsonp-main-vue3'
    },
    module: {
      rules: [{
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }]
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          isCustomElement: (tag) => /^micro-app/.test(tag)
        }
        return options
      })
  }
}
