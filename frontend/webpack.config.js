var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, argv) => {
    const watchMode = argv.liveReload || false
    const modeEnv = argv.mode || 'development'
    const isProd = modeEnv === 'production'

    const optimizations = {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
        minimizer: [],
    }

    if (isProd) {
        optimizations.minimizer.push(new UglifyJsPlugin())
    }

    return {
        entry: { main: './src/index.tsx' },
        output: {
            filename: watchMode
                ? 'assets/[name].[hash].js'
                : 'assets/[name].[chunkhash].js',
            path: path.resolve(__dirname, '../api/static'),
            publicPath: '/',
        },
        devServer: {
            contentBase: path.join(__dirname, '../api/static'),
            compress: true,
            port: 8000,
            watchContentBase: true,
            progress: true,
            hot: true,
            open: true,
            historyApiFallback: true,
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            alias: { Components: path.resolve(__dirname, 'src/Components/') },
        },
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [{ loader: 'ts-loader' }],
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({ template: './public/index.html' }),
            new WebpackNotifierPlugin({ alwaysNotify: false }),
        ],
        performance: {
            hints: false,
        },
        optimization: optimizations,
    }
}
