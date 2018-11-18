module.exports = {
    entry: __dirname + '/src/ManageSystem.js',
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    devtool: 'eval-source-map',  //生成source file
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.jsx?$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
        ]
    }
};
