'use strict'
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.dev')
const chalk = require('chalk')

const app = express()

const compiler = webpack(config)

// https://github.com/webpack/webpack-dev-middleware for more options etc
const devMiddleWare = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        assetsSort: 'name',
        children: false,
        chunkModules: false,
        chunks: false,
        colors: true,
        modules: false
    }
})
app.use(devMiddleWare)
app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res) => {
    const fs = devMiddleWare.fileSystem
    devMiddleWare.waitUntilValid(() => {
        res.end(fs.readFileSync(path.join(config.output.path, '../index.html')))
    })
})

app.listen(4000, () => {
    console.log(`| Listening at http://localhost:4000\n` + chalk.blue.bold('  Launching app when ready...\n'))
})