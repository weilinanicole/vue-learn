const path = require('path');
const querystring = require('querystring');
const Clean = require('clean-webpack-plugin');
const Css = require('mini-css-extract-plugin');
const Html = require('html-webpack-plugin');
const Vue = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development',
    entry: {
        'index': './src/js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('dist')
    },
    devServer: {
        port: 8080,
        open: true,
        setup(app) {
            app.get('/login', function(req, res) {
                if (req.query.userName == '张三' && req.query.userPwd == '123') {
                    res.end(JSON.stringify({
                        code: 1,
                        msg: '登陆成功'
                    }))
                } else {
                    res.end(JSON.stringify({
                        code: 0,
                        msg: '登陆失败'
                    }))
                }
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
        }]
    },
    plugins: [
        new Vue(),
        new Clean('dist'),
        new Css(),
        new Html({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}