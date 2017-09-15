var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './example/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
    entry: './example/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'build.js'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/,
              loader: 'babel-loader',
              exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"]
    },
    plugins: [HtmlWebpackPluginConfig,
        new webpack.LoaderOptionsPlugin({
            debug: true
        })]
}
