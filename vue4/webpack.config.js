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
        open: true,
        setup: function(app) {
            app.get('/login', function(req, res) {
                let username = req.query.name;
                let userpwd = req.query.pwd;
                if (username == 'zs' && userpwd == 123) {
                    res.end(JSON.stringify({ code: 1, name: username, pwd: userpwd }))
                } else {
                    res.end(JSON.stringify({ code: 0, msg: '登录失败，请重新填写用户信息' }))
                }
            })
        }
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
            template: './src/index.html'
        })
    ]
}