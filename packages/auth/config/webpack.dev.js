// Merge the common webpack config with the dev webpack config
const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');


const devConfig = {
    mode: 'development',
    output: {
        //  Public path is used for nested paths
        publicPath: 'http://localhost:8082/',
        // template for created files
    },
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthApp': './src/bootstrap'
            },
            shared: ['react', 'react-dom']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
// Common takes precedence over dev
module.exports = merge(commonConfig, devConfig);