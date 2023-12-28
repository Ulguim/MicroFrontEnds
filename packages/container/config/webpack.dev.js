// Merge the common webpack config with the dev webpack config
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    output: {
        //  Public path is used for nested paths
        publicPath: 'http://localhost:8080/',
    },
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {

                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
                auth: 'auth@http://localhost:8082/remoteEntry.js',
                dashboard: 'dashboard@http://localhost:8083/remoteEntry.js',
            },
            // Gets dependencies from package.json instead of manually listing them
            shared: packageJson.dependencies
        }),


     
    ]
};
// Common takes precedence over dev
module.exports = merge(commonConfig, devConfig);