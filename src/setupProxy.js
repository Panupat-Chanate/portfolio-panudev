const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use("/send", 
        createProxyMiddleware({
            target: "https://portfolio-panudev-server.herokuapp.com",
            changeOrigin: true
        })
    )
}