var webpack = require('karma-webpack');
var webpackConfig = require('./webpack.config');

module.exports = function(config) {
    config.set({
        plugins: [
            webpack,
            require('karma-webpack'),
            require('karma-tap'),
            require('karma-chrome-launcher'),
            require('karma-phantomjs-launcher')
        ],
        basePath: '',
        frameworks: ['tap'],
        files: ['src/**/*.spec.js'],
        // exclude: ['node_modules'],
        preprocessors: {
            'src/**/*.spec.js': ['webpack'],
            'src/**/*.js': ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
        // falsepacconcurrency: Infinity
    });
};
