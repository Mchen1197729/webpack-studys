const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: "development",

  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    /*
    * 1.filename&chunkFilename使用contenthash来更好的利用浏览器的缓存
    * */
    filename: '[name].[contenthash].js',
    /*
    * 1.output.chunkFilename用来指定那些非入口文件的文件名
    * */
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  /*
  * 1.添加source-map功能 便于调试代码中出现的错误
  * */
  devtool: 'inline-source-map',

  /*
  * 1.使用webpack-dev-server来实现自动刷新浏览器
  * */
  devServer: {
    //This tells webpack-dev-server to serve the files from the dist directory on localhost:8080(default)
    contentBase: './dist'
  },

  module: {
    rules: []
  },

  plugins: [
    //每次构建之前先将上次dist目录清除掉 options.cleanStaleWebpackAssets:false->保留index.html文件
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    new HtmlWebpackPlugin({
      title: 'Caching'
    })
  ]
}
