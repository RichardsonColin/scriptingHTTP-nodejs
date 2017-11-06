const https = require('https');
var args = process.argv.slice(2);

function getAndPrintHTMLParams(options) {
  var reqOptions = {
    host: options.host,
    path: options.path
  };

  https.get(reqOptions, function (response) {
    let responseBodyData = "";

    response.on('data', function (data) {
      responseBodyData += data;
      console.log(responseBodyData);
    });
  });
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTMLParams(requestOptions);