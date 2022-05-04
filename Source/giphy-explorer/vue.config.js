/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  publicPath: "",
  //   ? '//'
  //   : '/',
  // transpileDependencies: [
  //   'vuetify',
  // ],
  // lintOnSave: process.env.NODE_ENV !== 'production',
  // devServer: {
  //   overlay: {
  //     warnings: true,
  //     errors: true,
  //   },
  // },
  configureWebpack: {
    devtool: "source-map",
    plugins: [
      new HtmlWebpackPlugin({
        filename: "health.html",
        inject: false,
        template: "src/assets/health-template.html",
        templateParameters: {
          VUE_APP_HEALTH_VALUE: process.env.VUE_APP_HEALTH_VALUE
        }
      })
    ]
  }
};
