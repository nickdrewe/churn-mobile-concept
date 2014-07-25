var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();

app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(serveStatic('public', {index: ['index.html']}));

app.listen(3000);
