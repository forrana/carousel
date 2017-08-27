const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './'),
        publicPath: 'js/',
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: [/node_modules/],
              use: [{
                loader: 'babel-loader',
                options: {
                  presets: ['es2015'],
                },
              }],
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
};
