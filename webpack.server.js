const path = require("path")
const nodeExternals = require("webpack-node-externals")
//服务端的webpack
module.exports = {
  target: "node",
  mode: "development",
  entry: './server/index',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'build')
  },
  //打包时忽略node_modules
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets:[
            "@babel/preset-react",
            ["@babel/preset-env"]
          ]
        }
      },
      {
        test:/\.css$/,
        use:['isomorphic-style-loader',{
          loader:'css-loader',
          options:{
            modules:true
          }
        }]
      }
    ]
  }
}
