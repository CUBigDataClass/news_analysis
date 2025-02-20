//Code is started from https://ihsavru.medium.com/react-d3-implementing-a-pie-chart-dc7bf13ff418
/**************************************************
 * Title: React + d3: Implementing a Pie Chart
 * Author: Urvashi
 * Date: 2020
 * Availability: https://ihsavru.medium.com/react-d3-implementing-a-pie-chart-dc7bf13ff418
 ***************************************************/
import React, {useEffect, useState} from 'react';
import * as d3 from 'd3';
import axios from "axios";
import {useParams} from "react-router-dom";

function PieChart(props) {
    const {
        // data = [{ label: 'Positive', value: 10 }, { label: 'Negative', value: 20 }, {label: 'neutral', value: 10}],
        outerRadius=100,
        innerRadius=0,
    } = props;
    const defaultData = [{ label: 'Positive', value: 10 }, { label: 'Negative', value: 10 }, {label: 'Neutral', value: 10}]
    const [data, setData] = useState(defaultData);
    const margin = {
        top: 50, right: 50, bottom: 50, left: 50,
    };

    const width = 2 * outerRadius + margin.left + margin.right;
    const height = 2 * outerRadius + margin.top + margin.bottom;

    const colorScale = d3
        .scaleSequential()
        .interpolator(d3.interpolateWarm)
        .domain([0, data.length]);

    useEffect(() => {
        drawChart();
    }, [data]);

    const { id } = useParams();
    useEffect(() => {
        const newsUrl = 'http://localhost:5000/pie-chart';
        fetch(`http://localhost:3000/news/${id}`)
            .then(() => {
                axios.get(newsUrl, {
                    params: {
                        id: id,
                        sentiment: "positive"
                    }
                }).then(resp => {
                    const newData = data.slice()
                    newData[0].value = resp.data.hits.total.value
                    setData(newData)
                })
                axios.get(newsUrl, {
                    params: {
                        id: id,
                        sentiment: "negative"
                    }
                }).then(resp => {
                    const newData = data.slice()
                    newData[1].value = resp.data.hits.total.value
                    setData(newData)
                })
                axios.get(newsUrl, {
                    params: {
                        id: id,
                        sentiment: "neutral"
                    }
                }).then(resp => {
                    const newData = data.slice()
                    newData[2].value = resp.data.hits.total.value
                    setData(newData)
                })
            });
    }, [])

    function drawChart() {
        // Remove the old svg
        d3.select('#pie-container')
            .select('svg')
            .remove();

        // Create new svg
        const svg = d3
            .select('#pie-container')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        const arcGenerator = d3
            .arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

        const pieGenerator = d3
            .pie()
            .padAngle(0)
            .value((d) => d.value);

        const arc = svg
            .selectAll()
            .data(pieGenerator(data))
            .enter();

        // Append arcs
        arc
            .append('path')
            .attr('d', arcGenerator)
            .style('fill', (_, i) => colorScale(i))
            .style('stroke', '#ffffff')
            .style('stroke-width', 0);

        // Append text labels
        arc
            .append('text')
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'middle')
            .text((d) => d.data.label)
            .style('fill', (_, i) => colorScale(i) + 1)
            .attr('transform', (d) => {
                const [x, y] = arcGenerator.centroid(d);
                return `translate(${x}, ${y})`;
            });
    }

    return <div id="pie-container" />;
}

export default PieChart;