//make a model for the shares to use on the backend it should recieve a date, ammount of 
// shares, price at time of purchase and the user theyre tied too
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  stock_name: { type: String, required: true },
  ammount: { type: String, required: true },
  price: {type: Number, required: true },
  date: { type: String, required: true }
});

const Stock = mongoose.model("Book", stockSchema);

module.exports = Stock;
