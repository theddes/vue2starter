'use strict'
const path = require('path')
const webpack = require('webpack')
const chalk = require('chalk')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const config = require('./webpack.base')
const pkg = require('../package')

config.output.publicPath = '/'
config.output.path = path.join(__dirname, '../public')
config.plugins[0].options.filename = 'index.html'

config.entry.vendor = Object.keys(pkg.dependencies).filter(name => {
    // update the code if you want to
    // remove some dependencies you don't need in the vendor bundle
    return true
})
config.output.filename = '[name].[chunkhash:8].js'

config.plugins.push(
    new ProgressBarPlugin({
        complete: chalk.green('='),
        clear: false,
        format: '  build [:bar] ' + chalk.blue.bold(':percent') + ' - :elapsed seconds',
        renderThrottle: 3,
        width: 100
    }),
    new ExtractTextPlugin('styles.[contenthash:8].css'),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        comments: false
    }),
    // extract vendor chunks
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.[chunkhash:8].js'
    })
)

config.module.loaders.push({
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
        loader: 'css-loader!postcss-loader',
        fallbackLoader: 'style-loader'
    })
})
config.vue.loaders.css = ExtractTextPlugin.extract({
    loader: 'css-loader',
    fallbackLoader: 'vue-style-loader'
})

module.exports = config
