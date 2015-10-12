/**
 * Created by TOKJOS on 12.10.2015.
 */
var express = require('express');
var app = express();
var port = (process.env.PORT || '3000');

app.get('/', function(req, res){
  res.send('Hello World!!');
})

app.listen(port); //Lytter til rotnoden

console.log('Server started at port 3000' + port);