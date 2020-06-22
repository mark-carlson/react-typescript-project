/* eslint @typescript-eslint/no-var-requires: 0 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const production = process.env.NODE_ENV === 'production';
const development = !production;

const plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
    }),
    new webpack.LoaderOptionsPlugin({
        debug: false,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'react-typescript-project',
    }),
    new MiniCssExtractPlugin({
        filename: development ? '[name].css' : '[name].[hash].css',
        chunkFilename: development ? '[id].css' : '[id].[hash].css',
    }),
];

const sourceDirs = [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'mocks')];
const buildDir = path.resolve(__dirname, 'dist');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');

if (development) {
    plugins.push(new webpack.NamedModulesPlugin());
}

if (production) {
    plugins.push(
        new CleanWebpackPlugin(),
        new LodashModuleReplacementPlugin(),
        new webpack.optimize.SplitChunksPlugin({
            name: 'vendor',
            minChunks: Infinity,
        }),
        new webpack.optimize.SplitChunksPlugin({
            name: 'manifest',
            minChunks: Infinity,
        }),
        new UglifyJsPlugin({
            sourceMap: true,
            parallel: true,
            uglifyOptions: {
                safari10: true,
            },
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: true,
        }),
        new FaviconsWebpackPlugin({
            logo: path.resolve(__dirname, 'assets/images/typescript_react.png'),
            mode: 'webapp',
            devMode: 'webapp',
            favicons: {
                icons: {
                    android: false,
                    appleIcon: false,
                    appleStartup: false,
                    coast: false,
                    favicons: true,
                    firefox: false,
                    windows: false,
                    yandex: false,
                },
            },
        }),
    );
}

const devTool = development ? 'cheap-module-source-map' : 'source-map';

module.exports = {
    mode: production ? 'production' : 'development',
    optimization: {
        splitChunks: {
            chunks: production ? 'all' : 'async',
        },
        noEmitOnErrors: true,
    },
    context: path.resolve(__dirname),
    entry: {
        main: ['./src/index'],
    },
    output: {
        path: buildDir,
        filename: production ? '[name].[chunkhash].js' : '[name].js',
        chunkFilename: production ? '[name].[chunkhash].js' : '[name].js',
        sourceMapFilename: '[file].map',
        publicPath: '/',
        crossOriginLoading: 'anonymous',
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.yaml', '.css', '.sass', '.scss', '.svg'],
    },
    devtool: devTool,
    plugins: plugins,
    stats: {
        colors: true,
    },
    devServer: {
        historyApiFallback: true,
        port: 9000,
        proxy: [
            {
                context: ['/api'],
                target: 'http://localhost:3001',
            },
        ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: sourceDirs,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        babelrc: true,
                    },
                },
            },
            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre',
                exclude: nodeModulesDir,
            },
            {
                test: /\.tsx?$/,
                use: ['source-map-loader'],
                enforce: 'pre',
                include: sourceDirs,
                exclude: nodeModulesDir,
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
            {
                test: /\.svg/,
                use: '@svgr/webpack',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.module\.s(a|c)ss$/,
                loader: [
                    development ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: development,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: development,
                        },
                    },
                ],
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                loader: [
                    development ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: development,
                        },
                    },
                ],
            },
        ],
    },
};
