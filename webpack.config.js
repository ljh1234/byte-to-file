/*
 * @Description: 
 * @Author: liujunhua
 * @Date: 2020-11-13 14:40:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-13 16:42:31
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    port: 4000
  }
}