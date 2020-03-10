var express = require('express');
var app = express();

app.set('view engine', 'jade');
var port = process.env.PORT || 3000;

var publicDir = require('path').join(__dirname, '/public');
app.use(express.static(publicDir));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.render('loginpage');
})
app.post('/HomePage', function(req, res) {
    res.render('homepage');
})
var server = app.listen(port, function() {});