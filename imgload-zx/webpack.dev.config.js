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
    path: path.resolve(__dirname, "dis"), //将js文件打包到dist/js的目录
    filename: "js/[name].min.js",
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
  plugins: [
    new CleanWebpackPlugin("dist"),
    new HtmlWebpackPlugin(getHtmlTemplate("index", "首页")),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.splitChunks({
    //   names: 'imgLoad'
    // })
  ],
  // optimization: {
  //   splitChunks: {
  //     // 抽离入口文件公共模块为commmons模块
  //     cacheGroups: {
  //       commons: {
  //         name: "commons",
  //         chunks: "initial",
  //         minChunks: 2
  //       }
  //     }
  //   }
  // },
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
