/*
 * @Description: 
 * @Author: liujunhua
 * @Date: 2020-11-16 15:06:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-17 15:22:12
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './test/src/test.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'test/bundle')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['test/bundle']
    }),
    new HtmlWebpackPlugin({
      template: './test/src/index.html'
    }),
    
  ],
  devServer: {
    port: 4000,
    proxy: {
      '/': {
        // target: 'http://172.16.1.99:18801',
        // target: 'http://172.16.1.111:18801',
        target: 'http://172.16.1.73:18801',
        changeOrigin: true
      }
    }
  }
}