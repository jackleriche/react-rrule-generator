const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
var path = require('path');

module.exports = merge(common, {
    entry: { main: './src/lib/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        libraryTarget: 'umd',
    },
    mode: 'production',
    externals: {
        react: 'react',
        reactDom: 'react-dom',
    },
});
