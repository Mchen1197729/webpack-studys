const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: "development",

  entry: {
    // 这两个入口文件中都import _ from 'lodash' 使用了公共的模块
    // 很有可能将依赖分别打包进两个出口文件中 所以需要使用webpack.optimize.CommonsChunkPlugins
    app: path.resolve(__dirname, 'src/index.js'),
    print: path.resolve(__dirname, 'src/print.js')
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: []
  },

  plugins: [
    //每次构建之前先将上次dist目录清除掉
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  // 提取公共的模块
  optimization: {
    splitChunks: {
      chunks: "all",
      name: 'lodash' // 自定义名称
    }
  }
}
