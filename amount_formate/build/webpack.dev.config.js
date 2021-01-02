/*
 * @Descripttion: demo开发配置
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-02 20:11:23
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-02 22:20:31
 */

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 打包html

module.exports = {
  entry: {
    index: "./src/js/main.ts"
  }, // 入口文件
  output: {}, // 出口文件
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        // exclude 排除，不需要编译的目录，提高编译速度
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
  plugins: [
    // 打包页面
    new HtmlWebpackPlugin({
      template: "./src/view/index.html"
    }), 
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  mode: "development",
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "./dist"),
    quiet: false, //控制台中不输出打包的信息
    noInfo: false,
    // hot: true, //开启热点
    inline: true, //开启页面自动刷新
    lazy: false, //不启动懒加载
    progress: true, //显示打包的进度
    watchOptions: {
      aggregateTimeout: 300
    },
    port: "8888" //设置端口号
    //反向代理
    // proxy: {}
  } // 开发服务器配置
};
