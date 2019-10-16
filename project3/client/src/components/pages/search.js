import React, {Component} from 'react';
import API from '../../utils/stockApi';
import * as moment from 'moment';
import createPlotlyComponent from 'react-plotly.js/factory';
import Recomend from '../stockrec';
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

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
        priceArray: "",
        dateArray: "",
        weeklygraph: true,
        monthlygraph: false
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }
    stocksearch = query => {
        const priceArray = [];
        const dateArray = [];
        API.search(query)
        .then(res => {
            
            
        const dailySeries = res.data["Time Series (Daily)"];
        
        for (let key in dailySeries){
            // console.log('Time: ', key, 'price: ' ,dailySeries[key]['4. close']);
            dateArray.push([key][0])
            priceArray.push(dailySeries[key]['4. close']);
        }
        this.setState({priceArray: priceArray,
            dateArray: dateArray,
        })
          
        this.setState({ price: res.data["Time Series (Daily)"][todaysdate]["4. close"],
                volume: res.data["Time Series (Daily)"][todaysdate]["6. volume"],
                StockName: res.data["Meta Data"]["2. Symbol"]},
                console.log(res),
                console.log(this.state),
                )
    
        },
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
                <div>
                </div>
                <Plot
                //weekly graph
                className="weekly"
                data={[{
                    //prices
                    x: [this.state.dateArray[0],
                        this.state.dateArray[1],
                        this.state.dateArray[2],
                        this.state.dateArray[3],
                        this.state.dateArray[4],
                        this.state.dateArray[5],
                        this.state.dateArray[6],
                        ],
                    //dates 
                    y: [this.state.priceArray[0], 
                        this.state.priceArray[1], 
                        this.state.priceArray[2],
                        this.state.priceArray[3],
                        this.state.priceArray[4],
                        this.state.priceArray[5],
                        this.state.priceArray[6]
                        ],   
                    type: 'scatter'
                    }]}
                    layout={{width: 500,
                        height: 500, 
                        title: "Weekly " + this.state.StockName,
                        xaxis: {
                            title: {
                              text: 'Date',
                              font: {
                                family: 'Courier New, monospace',
                                size: 18,
                                color: 'lightGreen'
                              }
                            },
                          },
                          yaxis: {
                            title: {
                              text: 'Value in USD',
                              font: {
                                family: 'Courier New, monospace',
                                size: 18,
                                color: 'lightGreen'
                              }
                            },
                          },
                        paper_bgcolor: '#7f7f7f',
                        plot_bgcolor: '#c7c7c7',
                        transition: {
                        duration: 500,
                        easing: 'cubic-in-out'
                        },
                        frame: {
                        duration: 500
                        },
                        font: {
                            family: 'Courier New, monospace',
                            size: 18,
                            color: 'lightgreen'
                        },
                        showlegend: false
                    }}
                />
                <Plot
                    className="monthly"
                    data={[{ 
                    x: [this.state.dateArray[0],
                    this.state.dateArray[1],
                    this.state.dateArray[2],
                    this.state.dateArray[3],
                    this.state.dateArray[4],
                    this.state.dateArray[5],
                    this.state.dateArray[6],
                    this.state.dateArray[7],
                    this.state.dateArray[8],
                    this.state.dateArray[9],
                    this.state.dateArray[10],
                    this.state.dateArray[11],
                    this.state.dateArray[12],
                    this.state.dateArray[13],
                    this.state.dateArray[14],
                    this.state.dateArray[15],
                    this.state.dateArray[16],
                    this.state.dateArray[17],
                    this.state.dateArray[18],
                    this.state.dateArray[19],
                    this.state.dateArray[20],
                    this.state.dateArray[21],
                    this.state.dateArray[22],
                    this.state.dateArray[23],
                    this.state.dateArray[24],
                    this.state.dateArray[25],
                    this.state.dateArray[26],
                    this.state.dateArray[27],
                    this.state.dateArray[28],
                    this.state.dateArray[29],
                    ],
                //dates 
                y: [this.state.priceArray[0],
                this.state.priceArray[1],
                this.state.priceArray[2],
                this.state.priceArray[3],
                this.state.priceArray[4],
                this.state.priceArray[5],
                this.state.priceArray[6],
                this.state.priceArray[7],
                this.state.priceArray[8],
                this.state.priceArray[9],
                this.state.priceArray[10],
                this.state.priceArray[11],
                this.state.priceArray[12],
                this.state.priceArray[13],
                this.state.priceArray[14],
                this.state.priceArray[15],
                this.state.priceArray[16],
                this.state.priceArray[17],
                this.state.priceArray[18],
                this.state.priceArray[19],
                this.state.priceArray[20],
                this.state.priceArray[21],
                this.state.priceArray[22],
                this.state.priceArray[23],
                this.state.priceArray[24],
                this.state.priceArray[25],
                this.state.priceArray[26],
                this.state.priceArray[27],
                this.state.priceArray[28],
                this.state.priceArray[29],
                    ],   
                    type: 'scatter',
                }]}
                layout={{width: 500,
                        height: 500, 
                        title: "Monthly " + this.state.StockName,
                        xaxis: {
                            title: {
                              text: 'Date',
                              font: {
                                family: 'Courier New, monospace',
                                size: 18,
                                color: 'lightGreen'
                              }
                            },
                          },
                          yaxis: {
                            title: {
                              text: 'Value in USD',
                              font: {
                                family: 'Courier New, monospace',
                                size: 18,
                                color: 'lightGreen'
                              }
                            },
                          },
                        paper_bgcolor: '#7f7f7f',
                        plot_bgcolor: '#c7c7c7',
                        transition: {
                        duration: 500,
                        easing: 'cubic-in-out'
                        },
                        frame: {
                        duration: 500
                        },
                        font: {
                            family: 'Courier New, monospace',
                            size: 18,
                            color: 'lightgreen'
                        },
                        showlegend: false
                    }}
                        />
                <Recomend />
            </div>

        )

    }
}

export default Search;