var express     = require('express'),
    app         = express();

app.get('/', function (req, res) {
  res.send('App is responding to requests');
});

var child; // Outer scope, available in both functions.

app.get('/fade', function (req, res) {
  var fork = require('child_process').fork;
  child = fork('./sequences/fade.js');
});

app.get('/off', function (req, res) {
  // (might be a good idea to check if child exists and is running first...)
  child.kill('SIGHUP');
  var fork = require('child_process').fork;
  child = fork('./sequences/off.js');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})
