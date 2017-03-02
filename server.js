/**
 * Created by Administrator on 2/19/2017.
 */
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config")

new WebpackDevServer(webpack(config),{
    publicPath:config.output.publicPath,
    hot:true,
    historyApiFallback:true
}).listen(8000,"localhost",function(err,result){
    if(err){
        return console.log(err);
    }
    console.log('Listening at http://localhost:8000/');
});