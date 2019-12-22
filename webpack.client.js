const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
//客户端的webpack
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
            },
            {
                test:/\.css$/,
                use:[
                  'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            modules:true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: "./src/index.csr.html",
          filename: "index.csr.html",
          inject: true
      })
    ]
}
