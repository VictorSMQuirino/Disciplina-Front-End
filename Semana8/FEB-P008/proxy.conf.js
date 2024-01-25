const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    target: 'https://pt.wikipedia.org',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/w/api.php',
    },
  }));
};
