//Code is started from https://betterprogramming.pub/react-d3-plotting-a-line-chart-with-tooltips-ed41a4c31f4f
/**************************************************
 * Title: Plotting a Line Chart With Tooltips Using React and D3.js
 * Author: Urvashi
 * Date: 2020
 * Availability: https://betterprogramming.pub/react-d3-plotting-a-line-chart-with-tooltips-ed41a4c31f4f
 ***************************************************/
import React, { useEffect } from 'react';
import * as d3 from 'd3';


function LineChart(props) {
    const margin = {
        top: 50, right: 50, bottom: 50, left: 50,
    };
    const {
        data = [-25, -30, -45, -10, 20, 65, 75, 10, 190, 135, 120, 133],
        width = 500 - margin.left - margin.right,
        height= 350 - margin.top - margin.bottom
    } = props;

    useEffect(() => {
        drawChart();
    }, [data]);

    function drawChart() {
        // Remove the old svg
        d3.select('#Line-container')
            .select('svg')
            .remove();

        let yMaxValue = d3.max(data, d => d);
        let yMinValue = d3.min(data, d => d);

        const xScale = d3.scaleLinear().domain([0, data.length - 1]).range([0, width])
        const yScale = d3.scaleLinear().domain([yMinValue, yMaxValue]).range([height, 0])

        const myLine = d3.line()
            .x((value, index) => xScale(index))
            .y(value => yScale(value))
            .curve(d3.curveCardinal);


        // Create new svg
        const svg = d3
            .select('#Line-container')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale));

        svg.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(yScale));

        // Set the gradient code is from https://www.d3-graph-gallery.com/graph/line_color_gradient_svg.html
        svg.append("linearGradient")
            .attr("id", "line-gradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0)
            .attr("y1", yScale(yMinValue))
            .attr("x2", 0)
            .attr("y2", yScale(yMaxValue))
            .selectAll("stop")
            .data([
                {offset: "0%", color: "green"},
                {offset: "100%", color: "red"}
            ])
            .enter().append("stop")
            .attr("offset", function(d) { return d.offset; })
            .attr("stop-color", function(d) { return d.color; });

        svg
            .append('path')
            .data([data])
            .attr("d", value => myLine(value))
            .attr('fill', 'none')
            .attr('stroke', "url(#line-gradient)")
            .attr('stroke-width', 4);

    }

    return <div id="Line-container"/>;
}

export default LineChart;