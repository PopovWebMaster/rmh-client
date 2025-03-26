const merge = require('webpack-merge');
// const baseWebpackConfig = require('./webpack.base.conf');
const buildWebpackConfig = require('./webpack.build.conf');

const webpack = require('webpack');


// const PATHS = require('./PATHS');
// const CONSTANTS = require('./CONSTANTS');

const buildDevWebpackConfig = merge(buildWebpackConfig, {

    plugins: [
        new webpack.DefinePlugin({
            'IS_DEVELOPMENT': JSON.stringify( false ),
            'IS_PRODUCTION': JSON.stringify( true ),
        }),

    ] 
});

module.exports = new Promise( ( resolve, reject ) => {
    resolve( buildDevWebpackConfig )
});