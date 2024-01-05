const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
    entry: {
        popup: path.resolve('src/popup/index.tsx'),
        options: path.resolve('src/options/index.tsx'),
        contentScript: path.resolve('src/contentScript/contentScript.tsx'),
        newTab: path.resolve('src/newTab/index.tsx'),
        sidebar: path.resolve("src/background/index-sidebar.tsx"),
        background: path.resolve('src/background/background.tsx'),
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.tsx?$/,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader', // postcss loader needed for tailwindcss
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [tailwindcss, autoprefixer],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|ttf|eot|webp)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    "plugins": [
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new Dotenv(),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve('src/static'),
                to: path.resolve('dist')
            },
            ]
        }),
        ...getHtmlPlugins([
            'popup',
            'options',
            'newTab',
        ]),
        new HtmlPlugin({
            filename: 'sidebar.html',
            template: 'src/background/sidebar.html',
            chunks: ['sidebar'],
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.js', '.ts'],
        plugins: [new TsconfigPathsPlugin()]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },

    // THIS PREVENTS THE SIDEBAR FROM RENDERING ON OTHER PAGES
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //     }
    // }
}

function getHtmlPlugins(chunks) {
    return chunks.map(chunk => new HtmlPlugin({
        title: 'Aid-vertize',
        filename: `${chunk}.html`,
        chunks: [chunk]
    }))
}