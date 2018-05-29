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
    //         {'index': 0, 'value': 0.05, 'phase': 60.10},
    //         {'index': 0, 'value': 0.02, 'phase': 90.50},
    //         {'index': 0, 'value': 0.03, 'phase': 128},
    //         {'index': 0, 'value': 0.04, 'phase': 30.27},
    //     ],
    //     [
    //         {'index': 1, 'value': 0.05, 'phase': 60.10},
    //         {'index': 1, 'value': 0.02, 'phase': 90.50},
    //         {'index': 1, 'value': 0.03, 'phase': 128},
    //         {'index': 1, 'value': 0.04, 'phase': 30.27},
    //     ],
    //     [
    //         {'index': 2, 'value': 0.05, 'phase': 60.10},
    //         {'index': 2, 'value': 0.02, 'phase': 90.50},
    //         {'index': 2, 'value': 0.03, 'phase': 128},
    //         {'index': 2, 'value': 0.04, 'phase': 30.27},
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
        maxValue: 0.07,
        levels: 5,
        roundStrokes: true,
        color,
    };
    // Call function to draw the Radar chart
    RadarChart(slice.selector, keys, values, radarChartOptions);
}

module.exports = radarVis;
