var webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const wp = require('babili-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // 页面入口文件配置
    entry : {
        'index': './public/react/index.js'
    },
    // 入口文件输出配置
    output : {
        path : __dirname + '/build',
        filename : '[name].bundle.js',
        publicPath:'/'
    },
    devServer:{
        contentBase:'./build',//服务器开启的位置
        port:3000,
        host:'localhost',
        historyApiFallback:true,//是否使用H5里HISTORYapi
        proxy:{// 利用开发服务器代理请求
            "/search_api":{
                // 目标域名
                target:'http://m.feiniu.com',
                // 是否改变域名
                changeOrigin: true,
                // 替换请求内容
                pathRewrite:{'^/search_api': '/'}
            },
            "/find_api":{
                // 目标域名
                target:'http://www.meilele.com',
                // 是否改变域名
                changeOrigin: true,
                // 替换请求内容
                pathRewrite:{'^/find_api': '/'}
            }
        }
        
    },
    module: {
        // 加载器配置
        rules:[
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: { presets: ["react","es2015"] }
                }],
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use: ["css-loader",'sass-loader']
                })
            },
            {
    　　　　　　test: /\.(png|jpg)$/,
    　　　　　　use: [ 'url-loader?name=images/[name].[ext]']
    　　　　}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({//注意，当开心webpack-dev-server的时候不会打包页面到build里，真正执行webpack来打包的时候是会输出过去的
            template:'./public/react/index.html',
            filename:'index.html'
        }),
        new ExtractTextPlugin({
            filename:'app.css',
            allChunks:true
        })
    ]
}