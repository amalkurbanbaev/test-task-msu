const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const paths = require('./paths')

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: paths.build,
        filename: '[name].[contenthash].bundle.js',
        clean: true,
    },
    devtool: false,
    optimization: {
        runtimeChunk: 'single',
        splitChunks: { chunks: 'all' },
        minimize: true,
    },
})
