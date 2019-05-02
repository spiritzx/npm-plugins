const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清除先前打包文件
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 打包html

// 生成html模板函数
let getHtmlTemplate = function (name, tit) {
    return {
        template: './src/views/' + name + '.html',// 文件模板位置
        filename: './views/' + name + '.html',// 输出的位置
        chunks: [name, 'common'],// 允许引入的文件 
        inject: 'body',// 生成引入文件的标签位置
        // favicon : './favicon.ico',// 添加特定favicon路径到输出的html文档中
        hash: true,// 是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值
        title: tit,// 生成的html文档的标题
    }
}

module.exports = {
  entry: {
    index: "./src/js/index.ts"
  }, // 入口文件
  output: {
    path: path.resolve(__dirname, "dist"), //将js文件打包到dist/js的目录
    filename: "[name].min.js"
  }, // 出口文件
  module: {
    rules: [
      // exclude 排除，不需要编译的目录，提高编译速度
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }, // 处理对应模块:如html,css,图片
  plugins: [
    // new CleanWebpackPlugin("dist"),
    // new HtmlWebpackPlugin(getHtmlTemplate("index", "首页")),
    // new webpack.HotModuleReplacementPlugin()
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
