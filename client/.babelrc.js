module.exports = function(api) {
    api.cache(true);
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        browsers: 'last 2 versions',
                    },
                },
            ],
            '@babel/preset-typescript',
            '@babel/preset-react',
        ],
        plugins: [
            [
                '@babel/plugin-proposal-decorators',
                {
                    legacy: true,
                },
            ],
            [
                '@babel/plugin-proposal-class-properties',
                {
                    loose: true,
                },
            ],
            'react-hot-loader/babel',
        ],
    };
};