const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')

module.exports = {
    output: { publicPath: '/' },
    entry: `${paths.src}/index.js`,
    target: 'web',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Best Movies | Home',
            template: `${paths.public}/index.html`,
            filename: 'index.html',
            favicon: `${paths.public}/favicon.png`,
            minify: { collapseWhitespace: true },
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}
