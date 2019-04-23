import React, { Component } from 'react';
import data from './data/revenues.json';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  } from 'recharts';
import './BarChart.css';

class BarChartSecond extends Component {
    render() {
        return (
            <div className="recharts-example">
                <h3>ReCharts Variant</h3>
                <BarChart
                    width={800}
                    height={300}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#8884d8" />
                    <Bar dataKey="profit" fill="#82ca9d" />
                </BarChart>
            </div>
        )
    }
}

export default BarChartSecond;