const webpack = require('webpack');
const path = require('path');           
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.join(__dirname, 'src'),

    entry: './index.js',
    
    module:{
        rules: [
            {
              test: /\.(js)$/i,
              exclude: /node_modules/,
              
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ],
        
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    devtool: 'eval',
    devServer: {
        port: 4200,
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: "My Page TItle",
            template: './index.html',
        }),
        
    ],

    resolve: {
        alias: {
            'smarta': path.join(__dirname, 'src/smarta')
        },
    },

    mode: 'development',
};
