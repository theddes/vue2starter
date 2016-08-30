'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const postcss = [
    require('autoprefixer')({
        browsers: ['last 2 versions', 'ie > 8']
    }),
    require('postcss-apply'),
    require('postcss-nested'),
    require('postcss-reporter'),
    require('postcss-font-magician')({
        // hosted: '../fonts'
    })
]

module.exports = {
    entry: {
        src: './src/index.js'
    },
    output: {
        path: path.join(__dirname, '../public/'),
        filename: '[name].js',
        publicPath: './'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.css', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loaders: ['vue']
            },
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: [/node_modules/]
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    babel: {
        babelrc: false,
        presets: [
            ['es2015', {modules: false}],
            'stage-1'
        ],
        plugins: [
            'transform-vue-jsx'
        ]
    },
    postcss,
    vue: {
        loaders: {},
        postcss
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html',
            filename: '../index.html',
            title: 'Vue 2.0 App',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ]
}
