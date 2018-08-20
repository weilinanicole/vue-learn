const path = require('path');
const Clean = require('clean-webpack-plugin');
const html = require('html-webpack-plugin');
const Mini = require('mini-css-extract-plugin');
const Vue = require('vue-loader/lib/plugin');
let data = require('./src/json/data.js');
module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('dist')
    },
    devServer: {
        port: 8080,
        open: true,
        setup: function(app) {
            app.get('/login', function(req, res) {
                res.end(JSON.stringify(data))
            })
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.js$/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(eot|svg|ttf|woff)$/,
            use: ['file-loader']
        }, {
            test: /\.(png|jpg|jpe?g|svg|gif)$/i,
            use: ['url-loader']
        }]
    },
    plugins: [
        new Vue(),
        new Clean('dist'),
        new html({
            filename: 'index.html',
            template: './src/index.html',
            minify: {
                minimize: true,
                minifyCSS: true,
                minifyJS: false,
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new Mini()
    ]
}