const merge = require('webpack-merge');
var path = require('path');
const common = require('./webpack.config.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    entry: { main: './src/demo/index.js' },
    output: {
        path: path.resolve(__dirname, 'demo'),
        filename: 'main.js',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'demo'),
        compress: true,
        port: 9000,
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './public/index.html', to: './index.html' },
        ]),
    ],
});
