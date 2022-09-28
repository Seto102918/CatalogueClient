
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

let config = {
    target: 'node', // [A]

    entry: './index.js', // [B]

    output: {
        path: path.join(__dirname, '.build/server'), 
        filename: 'bundle.js',
    },

    externals: [webpackNodeExternals()],

    module: {
        rules: [
            {
            test: /\.css$/, // [E]
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            exportOnlyLocals: true,
                            exportLocalsConvention: 'camelCase',
                            localIdentName: '[local]_[hash:base64:5]'
                        },
                    }
                }
            ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  }
                }
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
        ],
    },
};

module.exports = config;