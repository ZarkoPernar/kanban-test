const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const CONFIG = require('./config')

module.exports = function (env) {
    return {
        devtool: 'cheap-module-source-map',
        entry: {
            app: CONFIG.APP_PATH + CONFIG.CLIENT_ENTRY_FILE,
        },
        output: {
            path: CONFIG.CLIENT_OUTPUT_PATH,
            filename: 'bundle-[chunkhash].js',
        },
        devServer: CONFIG.WEBPACK_DEV_SERVER_CONFIG,
        plugins: [
            new HtmlWebpackPlugin(Object.assign({}, CONFIG.HtmlWebpackPlugin, {
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    // removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,
                },
                inject: true,
            })),

            new ExtractTextPlugin('styles.css'),

            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'commons-[chunkhash].js',
                minChunks: 2,
            }),

            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),

            new SWPrecacheWebpackPlugin({
                cacheId: 'pazi-policija-v1',
                filename: 'service-worker.js',
                maximumFileSizeToCacheInBytes: 4194304,
                minify: true,
                staticFileGlobs: [
                    'public/**/*.css',
                    'public/**/*.js',
                    'public/**/*.html',
                ],
                stripPrefix: 'public/',
            }),
        ],
        module: {
            rules: [{
                    test: /\.js$/,
                    use: ['babel-loader'],
                    include: [
                        path.resolve('src'),
                        path.resolve('node_modules/preact-compat/src'),
                    ],
                    exclude: ['.spec.']

                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }, {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: 'css-loader'
                    })
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                        {
                            loader: 'image-webpack-loader',
                            query: {
                                progressive: true,
                                optimizationLevel: 7,
                                interlaced: false,
                                pngquant: {
                                    quality: '65-90',
                                    speed: 4
                                }
                            }
                        }
                    ]
                },
            ]
        }
    }
}
