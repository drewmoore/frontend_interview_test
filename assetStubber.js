const path = require('path');

// Basic stubbing of assets such as images and fonts for running tests. Simply
// returns asset filename as text value.
module.exports = {
  process(src, filename, config, options) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};
