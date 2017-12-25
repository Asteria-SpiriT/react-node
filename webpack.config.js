const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const clientPath = path.join(__dirname, '/client/');
const PORT = "8999";

module.exports = {
    entry: {
        app: './client/index.js'
    },
    output: {
        path: path.join(__dirname, '/public/'),
        filename: 'js/[name].js'
    },
    resolve: {
        // 自动扩展文件后缀，require时可以不写后缀
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react']
                        }
                    }
                ]
            },
            // {
            //     test: /\.css$/,
            //     exclude: ['node_modules'],
            //     loaders: ['style-loader', 'css-loader?importLoaders=1']
            // },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        // contentBase: './public',
        hot: true,
        noInfo: true,
        port: PORT
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin({
            filename: 'css/vendor.css',
            disable: false,
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: 'views/index.html',
            template: clientPath + 'views/index.html',
            inject: true,
            chunks: ['app']
        })
    ]
}