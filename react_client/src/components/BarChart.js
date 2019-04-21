import React, { Component } from 'react';
import * as d3 from 'd3';

class BarChart extends Component {
    constructor() {
        super()
        this.state = {
            revenues: null
        }
    }

    componentWillMount() {
        d3.queue()
          .defer(d3.json, "data/revenues.json")
          .await((error, revenues) => {
                console.log(revenues);
              this.setState({
                  revenues
              });
          })
    }

    componentDidUpdate() {
        
    }

    render() {
        const { revenues } = this.state;

        if (!revenues) {
            return null;
        }

        return <g ref="anchor" />
    }
}

export default BarChart;
