import React, {Component} from 'react';
import API from '../../utils/stockApi';
import * as moment from 'moment';

class Search extends Component{
    state = {
        StockName: "",
        price:"",
        volume: "",
        todaysdate: Date.now()
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }
    stocksearch = query => {
        API.search(query)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
        console.log()
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
                <div

                ></div>
            </div>

        )

    }
}

export default Search;