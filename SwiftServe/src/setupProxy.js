const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://swift-serve-bt21.onrender.com/',
            changeOrigin: true,
        })
    );
};
