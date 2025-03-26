const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const webpack = require('webpack');


const PATHS = require('./PATHS');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',

    entry: {
        main: `${PATHS.src}/js/main/main.js`, 
        admin: `${PATHS.src}/js/pages/admin/admin.js`,
        home: `${PATHS.src}/js/pages/home/home.js`,
        logs: `${PATHS.src}/js/pages/logs/logs.js`,
        applications: `${PATHS.src}/js/pages/applications/applications.js`,
        login: `${PATHS.src}/js/pages/login/login.js`, 


        




        



    },


});

