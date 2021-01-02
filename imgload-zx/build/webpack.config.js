/*
 * @Descripttion: 打包配置
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2019-05-01 01:40:31
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-02 13:26:53
 */
const path = require("path");

module.exports = {
  entry: {
    imgLoad: "./src/utils/imgLoad.ts"
  }, // 入口文件
  output: {
    path: path.resolve(__dirname, "../dist/"), //将js文件打包到dist的目录
    filename: "[name].min.js",
    library: 'numberWord', // 指定类库名,主要用于直接引用的方式(比如使用script 标签)
    libraryExport: "default", // 对外暴露default属性，就可以直接调用default里的属性
    globalObject: 'this', // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
    libraryTarget: 'umd' // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
  }, // 出口文件
  module: {
    rules: [
      // exclude 排除，不需要编译的目录，提高编译速度
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      // 补充内容，如果你要优化代码，这里重新配置即可。这样，就会把 index 里面的 抽出来了。
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }, // 处理对应模块:如html,css,图片
  plugins: [],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  mode: "production"
};
