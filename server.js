var express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../client/build/index.html"));
  });

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password99@ds123129.mlab.com:23129/heroku_zrr34b81");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});