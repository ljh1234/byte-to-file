/*
 * @Description: 
 * @Author: liujunhua
 * @Date: 2020-11-13 14:40:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-20 15:25:08
 */
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'byte-download.js',
    library: 'byteDownload',
    libraryExport: 'default',
    globalObject: 'this',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['dist']
    })
  ]
}