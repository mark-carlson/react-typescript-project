/* eslint @typescript-eslint/no-var-requires: 0 */
/* eslint camelcase: 0 */
/* eslint @typescript-eslint/camelcase: 0 */
/* eslint @typescript-eslint/explicit-function-return-type: 0 */
const path = require('path');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const src_path = path.resolve(__dirname, '../src');
const stories_path = path.resolve(__dirname, '../stories');

const node_modules_path = path.resolve(__dirname, '../node_modules');

const tsconfig_path = path.resolve(__dirname, '../tsconfig.json');

const typescriptRule = {
    test: /\.tsx?$/,
    include: [src_path, stories_path],
    exclude: [node_modules_path],
    use: [
        {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                babelrc: true,
            },
        },
    ],
};

const svgRule = {
    test: /\.svg/,
    use: '@svgr/webpack',
};

const sassModuleRule = {
    test: /\.module\.s(a|c)ss$/,
    loader: [
        'style-loader',
        {
            loader: 'css-loader',
            options: {
                modules: true,
                sourceMap: true,
            },
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true,
            },
        },
    ],
};

const sassRule = {
    test: /\.s(a|c)ss$/,
    exclude: /\.module.(s(a|c)ss)$/,
    loader: [
        'style-loader',
        'css-loader',
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true,
            },
        },
    ],
};

const cssRule = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
};

module.exports = ({ config }) => {
    config.module.rules = [typescriptRule, sassModuleRule, sassRule, cssRule, svgRule];
    config.resolve.extensions.push('.ts', '.tsx', '.svg', '.css', '.sass', '.scss');
    config.resolve.plugins = [
        new TsConfigPathsPlugin({
            configFile: tsconfig_path,
        }),
    ];

    return config;
};
