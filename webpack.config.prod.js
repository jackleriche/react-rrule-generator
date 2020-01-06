const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        port: 8090,
    },
});
