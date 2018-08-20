const path = require('path');
const Vue = require('vue-loader/lib/plugin');
const Clean = require('clean-webpack-plugin');
const html = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist')
    },
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
                use: ['babel-loader']
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(eot|svg|ttf|woff)$/,
                use: ['file-loader']
            }, {
                test: /\.(gif|png|jpg|jpe?g)/i,
                use: ['url-loader']
            }

        ]
    },
    plugins: [
        new Vue(),
        new Clean('dist'),
        new html({
            filename: 'index.html',
            template: './src/index.html',
            minify: {
                minimize: true,
                minifyJS: false,
                minifyCSS: true,
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ]
}