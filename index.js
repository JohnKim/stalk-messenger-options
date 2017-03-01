var fs    = require('fs');
var argv  = require('optimist').argv;

var loadJsonSync = function(filePath) {

  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', filePath);

  if( filePath ){
    try {
      var data = fs.readFileSync(filePath);
      return JSON.parse(data.toString());
    } catch (ex) {
      console.error('Error starting session server: ' + ex);
      process.exit(1);
    }
  }
  return {};
};

var config = loadJsonSync(argv.config);
module.exports = config;
