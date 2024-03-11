const express = require("express");
const port = 3000;
const app = express();
const routes = require('./routes/route');

app.set('view engine', "ejs");
app.use('/', routes);
app.use('/about', routes);
app.use('/course',routes);
app.use('/blog',routes);
app.use('/contact',routes);

app.use(express.static('public'));

app.listen(port, () => {
    console.log("server start");
})