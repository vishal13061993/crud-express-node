var express = require('express');
var app = module.exports = express();

app.get('/', function(req, res, next) {
  res.send(JSON.stringify(global.products));
});

