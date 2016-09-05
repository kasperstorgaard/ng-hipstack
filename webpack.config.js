module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'angular2']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },
    devtool: 'source-map',
    node: {
        fs: 'empty'
    }
};
