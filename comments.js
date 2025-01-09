// Create Web Server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/comments', function(req, res) {
	fs.readFile(__dirname + '/comments.json', function(err, data) {
		res.setHeader('Content-Type', 'application/json');
		res.send(data);
	});
});

app.post('/comments', function(req, res) {
	fs.readFile(__dirname + '/comments.json', function(err, data) {
		var comments = JSON.parse(data);
		comments.push(req.body);
		fs.writeFile(__dirname + '/comments.json', JSON.stringify(comments, null, 4), function(err) {
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(comments));
		});
	});
});

app.listen(3000);
console.log('Server is running on port 3000');