var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/components/ReactBricks',
    output: {
        path: path.resolve('lib'),
        filename: 'ReactBricks.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/,
              loader: 'babel-loader',
              exclude: /(node_modules|build)/              
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
    plugins: [new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })]
}
