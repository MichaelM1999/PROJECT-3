import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

const Portfolio = () => {
    return (
        <div>
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