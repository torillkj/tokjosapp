/**
 * Created by TOKJOS on 12.10.2015.
 */
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World!!');
})

app.listen(3000); //Lytter til rotnoden

console.log('Server started at port 3000');