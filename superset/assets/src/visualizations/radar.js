import d3 from 'd3';
import RadarChart from './radarChart';

function radarVis(slice, payload) {
    const div = d3.select(slice.selector);
    // Define the percentage bounds that define color from red to green
    div.html(''); // reset
    const data = payload.data;
    const keys = Object.keys(data);
    // Format of Data should be as following, 0,1,2 represents number of axis
    // values = [
    //     [
    //         [0, 100],
    //         [0, 200],
    //         [0, 300],
    //         [0, 400]
    //     ],
    //     [
    //         [1, 150],
    //         [1, 250],
    //         [1, 350],
    //         [1, 450]
    //     ],
    //     [
    //         [2, 80],
    //         [2, 170],
    //         [2, 270],
    //         [2, 370]
    //     ]
    // ];

    const values = [];
    keys.forEach((key) => {
        values.push(data[key]);
    });
    const margin = { top: 100, right: 100, bottom: 100, left: 50 };
    const width = Math.min(slice.width() + 50, window.innerWidth - 10) - margin.left - margin.right;
    const height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
    const color = d3.scale.ordinal()
        .range([
            '#EDC951',
            '#CC333F',
            '#00A0B0']);

    const radarChartOptions = {
        w: width,
        h: height,
        margin,
        maxValue: 700,
        levels: 5,
        roundStrokes: true,
        color,
    };
    // Call function to draw the Radar chart
    RadarChart(slice.selector, keys, values, radarChartOptions);
}

module.exports = radarVis;
