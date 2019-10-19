import axios from "axios";
import moment from 'moment'


const BASEURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=";
const BASEURL2 = "&outputsize=compact&apikey=";
const APIKEY = "RZM5P5SMJSK11TUK";
const year = moment().format("YYYY");
const month = moment().format("MM");
const day = moment().format("DD");
let todaysdate = [year, month, day].join('-');
console.log(todaysdate);
const dayofweek = moment().format("dddd");
console.log(dayofweek);
// dval needs to be stock name

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(dval) {
    return axios.get(BASEURL + dval + BASEURL2 + APIKEY);
  }
};
