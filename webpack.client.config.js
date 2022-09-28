const webpack = require('webpack');
const dotenv = require('dotenv-webpack');

const config = {
    target: 'web',
    mode: 'production',
    entry: './src/index.js',

    output: {
        path: __dirname + '/public',
        filename: 'scripts/bundle.js',
        publicPath: `/`,
    },

    devServer: { 
        historyApiFallback: true
    },

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  }
                }
            },
            {
                test: /\.css$/,
                use: [
                  { loader: 'style-loader' },
                  { loader: 'css-loader' },
                ],
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: [
                  { loader: 'style-loader' },
                  { loader: 'css-loader' },
                  { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ],
    },

    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser.js',
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
        }),
        new dotenv({
            systemvars: true,
        }),
    ]
};

module.exports = config;