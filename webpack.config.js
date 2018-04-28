var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        app: "app"
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
        extensions: [".js", ".min.js", ".json", ".css", ".scss", ".jpg"],
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'src/assets/js'),
            path.resolve(__dirname, 'src/assets/styles/scss'),
            path.resolve(__dirname, 'src/assets/img'),
            path.resolve(__dirname, 'vendors')
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            hash: true
        }),
        // removes dist and rebuilds new one each time
        new CleanWebpackPlugin(['dist'])
    ],
    module: {
        rules: [
            {
                test: /\.s?css/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
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
            }
        ]
    }
};
