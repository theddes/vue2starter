'use strict'
const webpack = require('webpack')
const config = require('./webpack.base')

const WebpackBrowserPlugin = require('webpack-browser-plugin')

config.output.publicPath = '/'
config.entry.src = ['webpack-hot-middleware/client', config.entry.src]
config.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new WebpackBrowserPlugin({
        browser: 'Chrome',
        port: 4000,
        url: 'http://localhost'
    })
)

config.module.loaders.push({
    test: /\.css$/,
    loader: 'style-loader!css-loader!postcss-loader'
})

module.exports = config
