const path = require('path')
// webpack提供的核心插件
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new webpack.ProgressPlugin(),
  ]
}
