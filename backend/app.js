const express = require('express');
const http = require('http');
//const myRouter = require('./routes/router');
const mongoConnect = require('./util/database');


const app = express();
app.use(express.urlencoded({extended:false}));
//app.use(myRouter);

app.use((req, res) => {
    res.status(404).send('<h1>Page not found!</h1>');
})


app.listen(8080);