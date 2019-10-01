var express = require("express");
var path = require("path");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

var app = express();
var PORT = 3000;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Mm64088031!",
  database: "stocks_db"
});

app.use(express.static("public"));
//put into public folder so that js and css all serve;
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());