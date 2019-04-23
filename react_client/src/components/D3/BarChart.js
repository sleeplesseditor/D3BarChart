import React, { Component } from 'react';
import * as d3 from 'd3';

const margin = { left:80, right:20, top:50, bottom:100 };

const width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

class BarChart extends Component {
    constructor() {
        super()
        this.state = {
            revenues: null        
        }
    }

    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        // const data = d3.queue()
        //     .defer(d3.json, "data/revenues.json")
        //     .await((error, revenues) => {
        //         console.log(revenues);
        //         this.setState({
        //             revenues
        //         });
        //     });
    
        const flag = true;

        const data = this.props.data;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("margin-left", 100);
                      
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => height - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "grey")

        const x = d3.scaleBand()
            .range([0, width])
            .padding(0.2);
        
        // Y Scale
        const y = d3.scaleLinear()
            .range([height, 0]);
        
        // X Label
        svg.append("text")
            .attr("y", height + 50)
            .attr("x", width / 2)
            .attr("font-size", "20px")
            .attr("text-anchor", "middle")
            .text("Month");
        
        //Y Label
        const yLabel = svg.append("text")
            .attr("y", - 60)
            .attr("x", - (height / 2))
            .attr("font-size", "20px")
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(-90)")
            .text("Revenue");
        
        const value = flag ? "revenue" : "profit";

        x.domain(data.map(function(d){ return d.month }));
        y.domain([0, d3.max(data, function(d){ return d[value] })]);
    }

    render() {
        return <div id={"#" + this.props.id}></div>
    }
}

export default BarChart;