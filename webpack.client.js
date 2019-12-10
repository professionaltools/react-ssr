const path = require("path")
//服务端的webpack
module.exports = {
    mode: "development",
    entry: './client/index',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        "@babel/preset-react",
                        ["@babel/preset-env"]
                    ]
                }
            }
        ]
    }
}
