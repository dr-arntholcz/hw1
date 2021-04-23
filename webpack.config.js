const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const { resolve } = require('path');
module.exports = {
    entry: ['./js/main.js'],
    plugins: [new HtmlWebpackPlugin({
            template: __dirname + "/index.html",
            inject: 'body'
        }),
        // new MiniCssExtractPlugin({
        //     filename: "[name].css",
        // }),
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    // [style-loader](/loaders/style-loader)
                    { loader: 'style-loader' },
                    // [css-loader](/loaders/css-loader)
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            { test: /\.(js)$/, use: 'babel-loader' },
            {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
        ]
    },

}