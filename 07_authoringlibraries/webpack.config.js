const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    /*
    * 1.向外暴露的苦=库的名字就是webpack-numbers.js
    * */
    filename: 'webpack-numbers.js',
    path: path.resolve(__dirname, 'dist'),
    /*
    * 1.library属性指明打包后该库的名称
    * */
    library: 'webpackNumbers',
    /*
    * 1.umd这个选项表示该库可以在AMD和CommonJS模块下使用
    * */
    libraryTarget: 'umd',
  },

  devtool: 'source-map',

  optimization: {
    runtimeChunk: true
  },

  /*
  * 1.使用externals属性将lodash声明为peerDependence 而不是将lodash打包进这个库中
  * */
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    }
  }
}

// module.exports = ['source-map']
//     .map(devtool => ({
//       mode: 'development',
//       entry: './src/index.js',
//       output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'webpack-numbers.js'
//       },
//       devtool,
//       optimization: {
//         runtimeChunk: true
//       }
//     }))
