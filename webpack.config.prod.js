const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'nosources-source-map',
    devServer: {
        historyApiFallback: false,
    },
});
