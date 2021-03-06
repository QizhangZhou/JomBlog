/**
 * Created by Administrator on 2/19/2017.
 */

var webpack = require("webpack");
module.exports = {
    entry: [
       // "webpack-dev-server/client?http://0.0.0.0:3000",
       // "webpack/hot/only-dev-server",
        "./src/index.js"],
    output: {
        path: __dirname,
        // publicPath:"/public/",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "react-hot-loader!jsx-loader!babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader?modules"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                exclude: /node_modules/,
                loader: "file-loader!img-loader?progressive=true"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(),
        //new webpack.optimize.CommonsChunkPlugin({name:'vendor', filename:'vendor.bundle.js'}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}