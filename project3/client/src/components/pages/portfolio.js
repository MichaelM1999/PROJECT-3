import React from 'react';
import Header from '../header';
import createPlotlyComponent from 'react-plotly.js/factory';
import Header from "../header"
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

const Portfolio = () => {
    return (
        <div>
<<<<<<< HEAD
            <Header/>
=======
            <Header />
>>>>>>> 70b7f14e750efe303ea955275dc6254037bc11fa
            <div>
                <h1>Welcome to your Portfolio</h1>
                <p>youre most recent purchase was{}for {}</p>
                
            </div>
            <Plot
                            data={[
                                {
                                    values: [16, 15, 12, 6, 5, 4, 42],
                                    labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
                                    domain: {column: 0},
                                    name: 'GHG Emissions',
                                    hoverinfo: 'label+percent+name',
                                    hole: .4,
                                    type: 'pie'
                                  },
                              ]}
                              layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }   />
        </div>

    )

}

export default Portfolio;