const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    devServer: {
        contentBase: './dist'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'MVVM Task_1.2'
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.san$/,
                use: 'san-loader'
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    }
}