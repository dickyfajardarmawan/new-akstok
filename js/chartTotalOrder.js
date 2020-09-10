var chart3 = new CanvasJS.Chart("chartContainer3", {
    animationEnabled: true,
    title: {
        text: "Total Orders & DO"
    },
    axisX: {
        valueFormatString: "DD"
    },
    axisY: {
        title: "Quantum",
        titleFontColor: "#4F81BC",
        lineColor: "#4F81BC",
        labelFontColor: "#4F81BC",
        tickColor: "#4F81BC",
        includeZero: true
    },
    axisY2: {
        title: "Clutch - Units",
        titleFontColor: "#C0504E",
        lineColor: "#C0504E",
        labelFontColor: "#C0504E",
        tickColor: "#C0504E",
        includeZero: true
    },
    toolTip: {
        enabled: true
    },
    legend: {
        cursor: "pointer",
        itemclick: toggleDataSeries
    },
    data: [{
            type: "column",
            yValueFormatString: "Quantum #,##0.#",
            dataPoints: [
                { x: new Date(2017, 6, 24), y: 19034.5 },
                { x: new Date(2017, 6, 25), y: 20015 },
                { x: new Date(2017, 6, 26), y: 25342 },
                { x: new Date(2017, 6, 27), y: 20088 },
                { x: new Date(2017, 6, 28), y: 28234 }
            ]
        },
        {
            type: "column",
            yValueFormatString: "Quantum #,##0.#",
            dataPoints: [
                { x: new Date(2017, 6, 24), y: 21000 },
                { x: new Date(2017, 6, 25), y: 13500 },
                { x: new Date(2017, 6, 26), y: 42500 },
                { x: new Date(2017, 6, 27), y: 13000 },
                { x: new Date(2017, 6, 28), y: 52800 }
            ]
        }
    ]
});
chart3.render();

function toggleDataSeries(e) {
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
    } else {
        e.dataSeries.visible = true;
    }
    e.chart3.render();
}