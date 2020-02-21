const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    entry: { main: './src/lib/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    mode: 'production',
    devtool: 'nosources-source-map',
    devServer: {
        historyApiFallback: false,
    },
});
