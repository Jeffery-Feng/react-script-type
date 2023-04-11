const proxy = require("http-proxy-middleware"); //react 脚手架内置的不需要安装

module.exports = function (app) {
    app.use(
        proxy.createProxyMiddleware('/api',{
            target:"https://api.zhiyileiju.cn/api",//需要代理的后端地址
            changeOrigin:true,//控制服务器中请求头中host字段值
            pathRewrite:{'^/api':''} // 把api1替换成空字符串，URL加api1后路径不对，所以加这种方式用空字符串去替换api1来保证url正确（重写请求路径）
        })
    )
}
