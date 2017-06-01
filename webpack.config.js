module.exports = {
    entry: './app/src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public/dist'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                query: {configFileName: './app/tsconfig.json'},
                exclude: /node_modules/ 
            }
        ]
    }
};