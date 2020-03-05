var express = require('express');
var app = express();

app.set('view engine', 'jade');
var port = process.env.PORT || 3000;
// them file public
var publicDir = require('path').join(__dirname, '/public');
app.use(express.static(publicDir));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// trang mac dinh
app.get("/", (req, res) => {
    res.render('loginpage');
})
app.post('/HomePage', (req, res) => {
    res.render('homepage');
})
var server = app.listen(port, function() {});