var express = require('express'),
	app = express(),
	port = process.env.PORT || 8080;

	app.get('/', function(req, res) {
		res.send('I am here123456');
	});
	app.listen(port, function(err){
		console.log('listening on ' + port)
	});