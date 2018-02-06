var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.use('/store', function(req, res, next) {
	console.log('Jestem pośrednikiem przy żądaniu do /store');
	next();
});

app.get('/store', function(req, res) {
	console.log('To jest sklep');
	res.end();
});

app.listen(3000, function() {
	console.log('Aplikacja nasłuchuje na http://localhost:3000');
})

app.use(function(req, res, next) {
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});