const path = require('path')

module.exports = {
  mode: "development",

  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        /*
        * 1.先使用css-loader解析css文件
        *   然后使用style-loader生成style标签将样式插入到html文件中
        *
        * 2.{importLoaders:1}表示在使用css-loader之前使用一次postcss-loader
        *
        * 3.使用顺序：less-loader/sass-loader(预处理)->postcss-loader(后处理)->css-loader->style-loader
        *
        * 4.配置postcss-loader不要写在postcss.config.js文件中 直接写在postcss-loader的options选项中
        *   **但是一定要在package.json中添加browserslist配置
        *     因为autoprefixer是根据browserslist的配置来进行添加前缀的**
        *
        * */
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              indent: 'postcss',
              plugins: [
                require('autoprefixer')(),
                require('cssnano')()
              ]
            }
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        /*
        * 1.url-loader将图片资源转换成base64格式的字符串
        *   (可以直接用于img标签的src属性,也可以用于css的background-image属性:url(base64...))
        *
        * 2.如果图片体积大于options.limit则自动使用file-loader进行转换(fallback默认值是file-loader)
        *
        * 3.而且url-loader默认使用esModule(可以使用tree-shaking)(esModule的默认值为:true)
        *
        * */
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },]
      },
      {
        test: /\.svg$/,
        /*
        * 1.url-loader默认将svg图片转换成base64格式的字符串
        *
        * 2.而svg-url-loader将svg图片转换成utf8格式的字符串(体积更小)
        *
        * 3.options.encoding:设置将要用那种形式来转换svg图片(默认是none:用utf8字符串格式)
        *   options.encoding:'base64'->以base64格式来转换svg图片(相当于是使用url-loader)
        * */
        use: [
          {
            // loader: "url-loader",
            loader: "svg-url-loader",
            options: {
              encoding: 'none',
              // encoding: 'base64',
              limit: 15 * 1024
            }
          }
        ]
      },
      {
        test: /\.xml$/,
        /*
        * 1.xml-loader用于处理xml文件 就是将xml文件转换成json对象格式
        *
        * */
        use: ['xml-loader']
      }
    ]
  }
}
