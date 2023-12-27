// Merge the common webpack config with the dev webpack config
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            // Gets dependencies from package.json instead of manually listing them
            shared: packageJson.dependencies
        }),
     
    ]
};
// Common takes precedence over dev
module.exports = merge(commonConfig, devConfig);