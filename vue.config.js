module.exports = {
    filenameHashing: false,
    productionSourceMap: false,
    chainWebpack: config => {
        config.plugin('html').tap( options => {
            options[0].minify = false;
            return options;
        });
    },
    configureWebpack: config => {
        return {
            devServer: {
                proxy: {
                    '/wp-json': {
                        target: 'http://olgashyw.beget.tech',
                        secure: false,
                        changeOrigin: true
                    }
                }
            }
        }
    }
}