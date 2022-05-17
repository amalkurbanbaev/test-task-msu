const { merge } = require('webpack-merge')
const ESLintPlugin = require('eslint-webpack-plugin')
const paths = require('./paths')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: './build',
        hot: true,
        port: 3000,
        historyApiFallback: true,
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: { chunks: 'all' },
        minimize: true,
    },
    plugins: [
        new ESLintPlugin({
            context: './src',
            files: ['.'],
        }),
    ],
})
