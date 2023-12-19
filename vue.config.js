const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/pages/Home/Home.js',
      template: 'public/index.html',
      title: '中国高等教育学生信息网（学信网）',
    },
    login: {
      entry: 'src/pages/Login/Login.js',
      template: 'public/index.html',
      title: '登录_学信网'
    },
    register: {
      entry: 'src/pages/Register/Register.js',
      template: 'public/index.html',
      title: '实名注册_学信网'
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