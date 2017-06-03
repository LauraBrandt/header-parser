var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/api/whoami', function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  var lang = req.headers['accept-language'].split(',')[0];
  var os = req.headers['user-agent'].match(/\((.*?)\)/)[1];
  
  var final = {'IP Address' : ip,
                'Language' : lang,
                'Operating System' : os
  };

  res.end(JSON.stringify(final));
});

app.listen(port, function () {
  console.log('App listening on port', port);
});