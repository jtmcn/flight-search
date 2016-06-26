/*jslint node: true, stupid: true */
'use strict';
var fs = require('fs');

// include all routes in this folder
module.exports = function(server) {
    fs.readdirSync('./routes')
        .forEach(function(file) {
            if (file.substr(-3, 3) === '.js' && file !== 'index.js') {
                require('./' + file.replace('.js', ''))(server);
            }
        });
};
