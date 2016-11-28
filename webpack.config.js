'use strict';
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/app.js',
    output: {
        path: 'guide',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin('style.css', {allChunks: true})
    ],
    resolve: {
        alias: {
            components: path.join(__dirname, 'app/components'),
            utils: path.join(__dirname, 'app/utils')
        }
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass')
        }, {
            test: /\.svg$|\.png$/,
            loader: "file-loader?hash=sha512&digest=hex&name=[hash].[ext]"
        }]
    },
    postcss: [
        require('autoprefixer-core'),
        require('postcss-mixins'),
        require('postcss-simple-vars'),
        require('postcss-nested')
    ]
}