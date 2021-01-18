const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

const externals = [
  'https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js',
  'https://cdn.bootcdn.net/ajax/libs/vue-router/3.1.6/vue-router.min.js'
]
const external = {
  'vue': 'Vue',
  'vue-router': 'VueRouter'
}

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'main.js',
    publicPath: '/'
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  externals: process.env.NODE_ENV === 'production' ? external : {},
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@/components': path.resolve(__dirname, './src/components'),
      '@/utils': path.resolve(__dirname, './src/common/utils')
    }
  },
  module: {
    rules: [{
      // ts文件
      test: /\.ts$/,
      loader: 'ts-loader',
      options: { appendTsSuffixTo: [/\.vue$/] }
    }, {
      // vue文件
      // 避免[VueLoaderPlugin Error] No matching rule for .vue files found.
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      // css文件
      test: /\.css$/,
      use: ['style-loader', 'css-loader'] // 可以是数组的格式，指定需要的loader,这里顺序需要注意一下，执行的时候是先执行  css-loader -> style-laoder
      // 这里也可以传入参数
    }, {
      // scss\sass 文件
      test: /\.s[ac]ss$/i,
      use: [
        // 将 JS 字符串生成为 style 节点
        'style-loader',
        // 将 CSS 转化成 CommonJS 模块
        'css-loader',
        // 将 Sass 编译成 CSS
        'sass-loader'
      ]
    }, {
      // 处理 字体文件的 loader
      test: /\.(ttf|eot|svg|woff|woff2)$/,
      use: 'url-loader'
    }, {
      // 图片资源
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      loader: 'url-loader',
      options: {
        esModule: false, // 这里设置为false
        name: '[name].[ext]',
        limit: 10240
      }
    }, {
      // eslint
      enforce: 'pre',
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }]
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  devServer: {
    contentBase: './dist',
    compress: false,
    port: 8080,
    stats: 'errors-only',
    host: 'localhost',
    hot: true, // HRM
    historyApiFallback: true // 支持 vue-router history mode
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      env: process.env.NODE_ENV === 'production' ? 'pro' : 'dev',
      cdn: externals
    }),
    new VueLoaderPlugin() // vue-loader 15 后迁移 https://vue-loader.vuejs.org/migrating.html#a-plugin-is-now-required
  ]
}
