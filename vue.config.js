module.exports = {
  publicPath: './',
  assetsDir: 'assets',

  chainWebpack: config => {
  config.module
    .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
        .loader('px2rem-loader')
        .options({
          remUnit: 37.5
        })
},

  productionSourceMap: false
}