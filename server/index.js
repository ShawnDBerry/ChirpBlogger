//IMPORT ALL OUR NODE MODULES
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var api = require('./api');

//IMPORT EXPRESS
var app = express();

//SET UP OUR PATH VARIABLES FOR EASE-OF-ACCESS
var clientPath = path.join(__dirname, "../client");
// var jsonPath = path.join(__dirname, "data.json");

//SET UP OUR STATIC FILE-SERVING
app.use(express.static(clientPath));
//SET UP OUR BODY-PARSER FOR INCOMING JSON
app.use(bodyParser.json());

//IF THE URL IS HTTP://LOCALHOST:3000/API ... GET - > http://localhost:3000/api/chirps/5
app.use('/api', api);

//LISTEN ON PORT 3000
app.listen(3000);