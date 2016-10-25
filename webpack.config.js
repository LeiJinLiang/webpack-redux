var path = require('path');
module.exports = {
    entry : './main.js',
    output : {
        path : __dirname,
        filename : 'bundle.js'
    },
    module : {
        loaders: [ {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        },{
            test : /\.css$/,
            loader: 'style!css'
        }]
    },
    resolve	: {
        extensions : ['','.js','.json','.coffee','.css']
    }
}