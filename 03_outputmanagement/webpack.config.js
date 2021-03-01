const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: "development",

  // entry: path.resolve(__dirname, 'src/index.js'),
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    print: path.resolve(__dirname, 'src/print.js')
  },

  output: {
    // filename: 'bundle.js',
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
  ]
}
