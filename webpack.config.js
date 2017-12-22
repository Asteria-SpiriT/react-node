const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const clientPath = path.join(__dirname, '/client/');

module.exports = {
    entry: {
        app: './client/index.js'
    },
    output: {
        path: path.join(__dirname, '/public/'),
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: {
                    loader: ExtractTextPlugin.extract('style-loader!css-loader!sass-loader')
                }
            }
        ]
    },
    plugin: [
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