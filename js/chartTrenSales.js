var chart2 = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true,
    title: {
        text: "Tren Sales"
    },
    axisX: {
        valueFormatString: "DD"
    },
    axisY: {
        title: "Quantum"
    },
    legend: {
        cursor: "pointer",
        fontSize: 16,
        itemclick: toggleDataSeries
    },
    toolTip: {
        enabled: true
    },
    data: [{
            name: "Semen Tonasa",
            type: "spline",
            yValueFormatString: "Quantum #0.##",
            showInLegend: true,
            dataPoints: [
                { x: new Date(2017, 6, 24), y: 31 },
                { x: new Date(2017, 6, 25), y: 31 },
                { x: new Date(2017, 6, 26), y: 29 },
                { x: new Date(2017, 6, 27), y: 29 },
                { x: new Date(2017, 6, 28), y: 31 },
                { x: new Date(2017, 6, 29), y: 30 },
                { x: new Date(2017, 6, 30), y: 29 }
            ]
        },
        {
            name: "Semen Padang",
            type: "spline",
            yValueFormatString: "Quantum #0.##",
            showInLegend: true,
            dataPoints: [
                { x: new Date(2017, 6, 24), y: 20 },
                { x: new Date(2017, 6, 25), y: 20 },
                { x: new Date(2017, 6, 26), y: 25 },
                { x: new Date(2017, 6, 27), y: 25 },
                { x: new Date(2017, 6, 28), y: 25 },
                { x: new Date(2017, 6, 29), y: 25 },
                { x: new Date(2017, 6, 30), y: 25 }
            ]
        },
        {
            name: "Semen Dynamix",
            type: "spline",
            yValueFormatString: "Quantum #0.##",
            showInLegend: true,
            dataPoints: [
                { x: new Date(2017, 6, 24), y: 22 },
                { x: new Date(2017, 6, 25), y: 19 },
                { x: new Date(2017, 6, 26), y: 23 },
                { x: new Date(2017, 6, 27), y: 24 },
                { x: new Date(2017, 6, 28), y: 24 },
                { x: new Date(2017, 6, 29), y: 23 },
                { x: new Date(2017, 6, 30), y: 23 }
            ]
        }
    ]
});
chart2.render();

function toggleDataSeries(e) {
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
    } else {
        e.dataSeries.visible = true;
    }
    chart2.render();
}