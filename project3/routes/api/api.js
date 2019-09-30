import axios from "axios";
const BASEURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=";
const APIKEY = "SEY5863UOBCH9KA8";

export default {
  stockSearch: function(dval) {
    return axios.get(BASEURL + dval + "&outputsize=compact&apikey=" + apikey)
  }
};
