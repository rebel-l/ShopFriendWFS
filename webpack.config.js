const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
    mode: 'development',    // TODO: separate production and development
    entry: {
        app: './src/index.jsx'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.s([ac])ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            minify: true,
            hash: true
        }),
        new WebpackPwaManifest({
            name: 'Shop for Friends',
            short_name: 'ShopFriend',
            description: 'Go shopping for your friends!',
            background_color: '#ffffff',
            icons: [
                {
                    src: './src/assets/icon.png',
                    sizes: [96, 128, 192, 256, 384, 512]
                },
                {
                    src: './src/assets/icon.png',
                    size: '1024x1024',
                    purpose: 'maskable'
                }
            ],
            ios: true,
            publicPath: '.'
        })
    ]
};
