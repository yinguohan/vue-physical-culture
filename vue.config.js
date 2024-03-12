const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/pages/Home/Home.js',
      template: 'public/index.html',
      title: '创展体育',
    },
    login: {
      entry: 'src/pages/Login/Login.js',
      template: 'public/index.html',
      title: '登录_创展体育'
    },
    register: {
      entry: 'src/pages/Register/Register.js',
      template: 'public/index.html',
      title: '实名注册'
    }
  },
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