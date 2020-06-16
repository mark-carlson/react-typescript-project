/* eslint @typescript-eslint/no-var-requires: 0 */
const path = require('path');

module.exports = {
    preset: 'ts-jest',
    roots: ['<rootDir>/test'],
    modulePaths: ['<rootDir>/src'],
    testRegex: '^.+(t|T)est\\.tsx?$',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFilesAfterEnv: ['<rootDir>/test/setupEnzyme.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    moduleNameMapper: {
        '\\.(svg|jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/test/fileMock.ts',
        '\\.(css|less|sass|scss)$': '<rootDir>/test/fileMock.ts',
    },
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: path.resolve(__dirname, 'reports'),
            },
        ],
    ],
    coverageReporters: ['json', 'html', 'text', 'cobertura'],
    coverageDirectory: path.resolve(__dirname, 'reports', 'coverage'),
    globals: {
        'ts-jest': {
            babelConfig: {
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
                    '@babel/plugin-transform-runtime',
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
            },
        },
    },
};
