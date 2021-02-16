'use strict';

let path = require('path');

module.exports = {
   mode: 'production',
   entry: './scripts/script.js',
   output: {
      filename: 'bundle.js',
      path: __dirname + '/scripts'
   },
   watch: true,

   devtool: "source-map",

   module: {}
};
