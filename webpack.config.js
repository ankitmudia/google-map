const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: 'google-map-packages',
        libraryTarget: 'umd',  // makes it compatible with commonjs and es modules
    },
    resolve: {
        extensions: ['.js', '.jsx'],  // resolve both JS and JSX extensions
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,  // apply Babel to .js and .jsx files
                exclude: /node_modules/,  // do not transpile dependencies
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,  // add a loader for CSS if necessary
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    externals: {
        react: 'react',  // exclude React from the bundle, to be installed by the consumer
        'react-dom': 'react-dom',
    },
    devtool: 'source-map',  // generate source maps for easier debugging
};
