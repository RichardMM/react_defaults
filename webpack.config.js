const path = require('path')

module.exports = {
    mode:'development',
    entry:{
        app:['@babel/polyfill', './src/js/index.js']
    },
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            type: 'javascript/auto',
            test:/\.js?$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            query:{
                presets:['@babel/react', '@babel/env'],
                plugins:['@babel/plugin-proposal-class-properties']
            }
        }]
    },
    resolve:{
        alias:{
            'node-fetch$': "node-fetch/lib/index.js"
        }
    }

}