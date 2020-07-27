const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
    devServer: {
        host: "0.0.0.0",
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
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
            ]
        })

    ]
};
