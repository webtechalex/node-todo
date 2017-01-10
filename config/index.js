var configValues = require('./config');

module.exports = {
  getDbConnectionString: function() {
    return 'mongodb://' + configValues.uname +
    ':' + configValues.pwd + '@ds157258.mlab.com:57258/nodetodosample';
  }
};
