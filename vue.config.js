const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  configureWebpack: {
    optimization: {
      minimize: false
    },
    resolve: {
      alias: {
        'assets': '@/assets'
      }
    }
  }
})