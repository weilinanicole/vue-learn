const path = require('path');
const Clean = require('clean-webpack-plugin');
const Html = require('html-webpack-plugin');
const Css = require('mini-css-extract-plugin');
const Vue = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist')
    },
    plugins: [
        new Vue(),
        new Clean(['dist']),
        new Html({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new Css({
            filename: '[name].css'
        })
    ],
    devServer: {
        port: 8080,
        open: true
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
            }, {
                test: /\.css$/,
                use: [Css.loader, 'css-loader']
            }, {
                test: /\.scss$/,
                use: [Css.loader, 'css-loader', 'sass-loader']
            }, {
                test: /\.(jpg|jpe?g|png|gif|svg])/i,
                use: ['url-loader']
            }
        ]

    }
}