module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/17pyrtflow/'
      : '/' ,
      outputDir: "dist",
      lintOnSave: true,
      runtimeCompiler: false,
      productionSourceMap: false,
      devServer: {
        open: process.platform === "darwin",
        port: 8000,
        https: false,
        hotOnly: false,
        proxy: null,
        disableHostCheck: true,
      },

      transpileDependencies: [
        'vuetify'
      ]
  }