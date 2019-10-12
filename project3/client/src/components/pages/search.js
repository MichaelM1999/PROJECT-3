import React, {Component} from 'react';
import API from '../../utils/stockApi';
import * as moment from 'moment';

//time js for recent date so even on weekends it gets correct numbers
const year = moment().format("YYYY");
const month = moment().format("MM");
const day = moment().format("DD");
let todaysdate;

const dayofweek = moment().format("dddd");
if (dayofweek === "Monday" || 
dayofweek === "Tuesday" || 
dayofweek === "Wednesday" || 
dayofweek === "Thursday" || 
dayofweek === "Friday") {
todaysdate = [year, month, day].join('-');
}
if (dayofweek === "Sunday") {
   let recentday = (moment().subtract(2, 'days').format("DD"));
   todaysdate = [year, month, recentday].join('-');
}
if (dayofweek === "Saturday") {
    let recentday = (moment().subtract(1, 'days').format("DD"));
    todaysdate = [year, month, recentday].join('-');
}
class Search extends Component{
    state = {
        StockName: "",
        price:"",
        volume: "",
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }
    stocksearch = query => {
        API.search(query)
      .then(res => this.setState({ price: res.data["Time Series (Daily)"][todaysdate]["4. close"],
      volume: res.data["Time Series (Daily)"][todaysdate]["6. volume"],
      StockName: res.data["Meta Data"]["2. Symbol"]}),
      console.log(this.state),
      err => {
        console.log(err);
     }); 
    }

    handleSubmit = event => {
        event.preventDefault()
        let stock = this.state.StockName
        this.stocksearch(stock);
    }
    render(){
        return(
            <div>
                <h1>{this.state.todaysdate}</h1>
                <div>what would you like to search for</div>
                <input
                type="text"
                name="StockName"
                onChange={this.handleInputChange}
                value={this.state.StockName}
                ></input>
                <button 
                type="submit" 
                value="submit"
                onClick={this.handleSubmit}
                >Search</button>
                <h2>
                    searching for {(this.state.StockName)}
                </h2>
                <h3>
                    The Price is ${this.state.price}
                </h3>
                <h3>
                    there are currently {this.state.volume} open for purchase
                </h3>
                <div

                ></div>

            </div>

        )

    }
}

export default Search;