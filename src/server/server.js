var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../../build")));
console.log('Server Listening on Port ' + port);

app.listen(port);