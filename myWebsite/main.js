var apiai = require('apiai');

var app = apiai('1d34fe5d482e422c997b255f587c4a4f');

var request = app.textRequest('5 minutes');

request.on('response', function(response) {
    console.log(response);
});

request.end();