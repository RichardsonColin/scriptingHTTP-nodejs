const https = require('https');


function getHTML (options, callback) {

  var reqOptions = {
    host: options.host,
    path: options.path
  };

  https.get(requestOptions, function (response) {
    let responseBodyData = "";

    response.on('data', function (data) {
      responseBodyData += data;
      callback(responseBodyData);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);