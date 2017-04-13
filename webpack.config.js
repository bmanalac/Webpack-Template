const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Path files
const path_prod = path.resolve(__dirname, 'dist');

// Plugin(s) variables
const extractPlugin = new ExtractTextPlugin({filename: 'main.css'});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path_prod,
        filename: 'bundle.js',
        // publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            }, {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }, {
                test: /\.html$/,
                use: ['html-loader']
            }, {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: '/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({template: 'src/index.html'}),
        new CleanWebpackPlugin(['dist']),
        new OptimizeAssetsPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
