const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:3030',
            changeOrigin: true,
            onProxyReq: (proxyReq, req, res) => {
                proxyReq.setHeader('api-key', 'VkFb5pjNSNYoiQj4vYNGFoR3IjRwRNY2BvlJR54VCZungJdk2cJzW1hfGofruKVY');
            },
            // logLevel: "debug",
            pathRewrite: { '^/api': ''}
        })
    );
};