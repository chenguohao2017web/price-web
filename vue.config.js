let path = require('path');
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
    publicPath: "./",
    devServer: {
        proxy: {
            "/api" :{
                target: "server.com:8080",
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    chainWebpack:(config)=>{
        config.resolve.alias
        //set第一个参数：设置的别名，第二个参数：设置的路径
        .set('@',resolve('./src'))
        .set('components',resolve('./src/components'))
        .set('assets',resolve('./src/assets'))
　　　　
    },
    lintOnSave: false
}