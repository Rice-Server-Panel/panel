const config = require("./config.json")

console.log("----------------------")
console.log("|     Rice Panel     |")
console.log("|     by Jozo_85     |")
console.log("----------------------")

var path = require('path');
const mongoose = require('mongoose');

mongoose.connect(config.database.url, {

    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("[LOG] Connect to database")
})

const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


app.get('/', function(req, res) {
    res.render('pages/index', {name: config.web.name});
})

app.get('/panel/login', function(req, res) {
    res.render('pages/panel/login', {name: config.web.name});
})



app.listen(config.web.port, () => {
    console.log(`[LOG] Server listening on port ${config.web.port}`);
});