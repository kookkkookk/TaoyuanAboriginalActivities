const path = require('path');
const webpack = require('webpack');
const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: 'index'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js?[hash:8]',
        publicPath: process.env.NODE_ENV === "development" ? "/" : "./"
    },
    devServer: {
        compress: true,
        port: 3000,
        stats: {
            assets: true,
            cached: false,
            chunkModules: false,
            chunkOrigins: false,
            chunks: false,
            colors: true,
            hash: false,
            modules: false,
            reasons: false,
            source: false,
            version: false,
            warnings: false
        },
        proxy: {
            // '/api/*': {
            //     target: 'http://XXX.com.tw',
            //     changeOrigin: true,
            // },
        },
    },  
    resolve: {
        modules: [
            path.resolve('src'),
            path.resolve('src/html'),
            path.resolve('src/js'),
            path.resolve('src/js/pages'),
            path.resolve('src/vue'),
            path.resolve('src/vue/vuePage'),
            path.resolve('src/api'),
            path.resolve('src/images'),
            path.resolve('node_modules')
        ],
        extensions: ['.js', '.styl', '.vue']
    },
    plugins: [
       new webpack.LoaderOptionsPlugin({
            vue: {
                postcss: [require('autoprefixer')(
                    {
                        browsers: ['> 1%', 'last 5 versions', 'Firefox >= 45', 'iOS >=8', 'Safari >=8','ie >= 10']
                    }
                )]
            }
       })
    ],
    module:{
        rules:[
            {
                test: /\.(html)$/,
                use: 'file-loader?name=[name].[ext]',
                include: path.resolve('src')
            },
            {
                test: /\.(json)$/,
                use: 'file-loader?name=[path][name].[ext]',
                include: path.resolve('src/api')
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
                include: path.resolve('src/css'),
            },
            {
                test: /\.(pug)$/,
                use: ['file-loader?name=[name].html', 'pug-html-loader?exports=false&pretty'],
                include: path.resolve('src')
            },
            {
                test: /\.(vue)$/,
                use: 'vue-loader',
                include: path.resolve('src')
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader',
                include: path.resolve('src')
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: 'url-loader?limit=2000&name=[path][name].[ext]?[hash:8]',
                include: path.resolve('src')
            },
            {
                test: /\.(styl)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader'
                ],
                include: path.resolve('src')
            },
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ],
                include: path.resolve('src')
            }
        ]
    },
    resolveLoader: {
        alias: {
            'scss-loader': 'sass-loader',
        },
    },
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
    },
};

module.exports = config;
