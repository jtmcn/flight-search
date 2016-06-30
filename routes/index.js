'use strict';
const fs = require('fs');

// include all routes in this folder
module.exports = server => {
  fs.readdirSync('./routes')
    .forEach(file => {
      if (file.substr(-3, 3) === '.js' && file !== 'index.js')
        require('./' + file.replace('.js', ''))(server);
    });
};
