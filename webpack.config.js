const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        app: "app.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        publicPath: "/"
    },
    devServer: {
        // Using contentBase with HtmlWebpackPlugin has no effect. contentBase serves static files. 'index.html' generated by HtmlWebpackPlugin is not static, it's compiled by webpack.
        // contentBase: path.join(__dirname, "public"),
        publicPath: '/',
        port: 3000
    },
    resolve: {
        extensions: [".js", ".jsx", ".min.js", ".json", ".css", ".scss", ".jpg", ".pdf"],
        modules: [
            path.resolve(__dirname, 'vendors'),
            'node_modules',
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'src/assets/js'),
            path.resolve(__dirname, 'src/assets/js/effects'),
            path.resolve(__dirname, 'src/assets/js/modules'),
            path.resolve(__dirname, 'src/assets/pdf'),
            path.resolve(__dirname, 'src/assets/styles/scss'),
            path.resolve(__dirname, 'src/assets/styles/scss/partials'),
            path.resolve(__dirname, 'src/assets/img'),
            path.resolve(__dirname, 'src/components')
        ]
    },
    module: {
        rules: [
            {
                test: /\.s?css/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.pdf$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'pdf/',
                            publicPath: 'pdf/'
                        }
                }]
            },
            {
                test: /\.jsx?$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env',
                            'react',
                            'stage-0'
                        ]
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            inject: true,
            hash: true
        }),
        // removes dist and rebuilds new one each time
        new CleanWebpackPlugin(['dist'])
    ]
};
