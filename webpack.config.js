/*
 * @Description: 
 * @Author: liujunhua
 * @Date: 2020-11-13 14:40:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-16 15:36:34
 */
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'byte-download.js',
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
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['dist']
    }),
  ]
}