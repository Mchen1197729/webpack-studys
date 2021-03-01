const path = require('path')

module.exports = {
  mode: 'production',

  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: 'usage',
                    //modules:false表示不会将ES6模块化的js文件转换成CommonJS模块化
                    modules: false
                  }
                ]
              ]
            }
          }
        ],
        // 此处的作用是:将除了node_modules目录中的.js文件全都标记为无副作用的代码(有利于tree-shaking)
        // 如果有些.js文件确实是有副作用的,例如用于polyfill的文件,
        // 那么sideEffects属性可以接受一个数组,数组的元素就是有副作用的文件的路径(相对路径、绝对路径和glob模式)
        sideEffects: false
      }
    ]
  },
}
