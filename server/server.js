var compression = require('compression');
var path = require('path');
var morgan = require('morgan')
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var app_dir = path.resolve(__dirname, '../dist/app');

app.use(compression({level: 7}));
app.use(express.static(app_dir));
app.use(morgan('combined'));

app.get('/', function(req, res) {
	res.sendfile(app_dir + '\index.html');
});

app.listen(port, function() {
	console.log("Server listening on port " + port + ".");
});