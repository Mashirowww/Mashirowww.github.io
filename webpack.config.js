const path = require('path')
const { Module } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
module.exports={
    mode: 'production',
    entry:"./src/index.ts",
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {   
                test:/\.ts$/,//对象是以ts结尾的文件
                use:'ts-loader' //对其使用tsloader
            },
            {
                test:/\.less$/,
                use:[ //从上向下执行
                    "style-loader",
                    "css-loader",
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                     [
                                        "postcss-preset-env",
                                        {
                                            browsers:"last 2 versions"
                                        }
                                     ]
                                ]
                            }
                        }
                    },
                    "less-loader",
                ]
            }
        ]
    },
    //配置webpack插件
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:"贪食蛇",
            template:"./src/index.html"
        })
    ],
    //模块引入
    resolve:{
        extensions:['.ts','.js']
    },
    //配置内置服务器
    devServer: {
        // contentBase: "./public",
        static:'./dist',
    }
};