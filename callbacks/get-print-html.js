const https = require('https');

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    let responseBodyData = "";

    response.on('data', function (data) {
      responseBodyData += data;
      console.log(responseBodyData);
    });
  });
}
getAndPrintHTML();