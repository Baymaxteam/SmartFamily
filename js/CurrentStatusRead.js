//Flot Line Chart

var statUrl = "http://192.168.31.215:8000/api/bill/house/month/"
var statdata = [
    ["1", "台燈", "客廳", "0", "10" ],
    ["2", "電風扇", "客廳", "1", "5" ],
    ["3", "微波爐", "客廳", "1", "80" ]
];

$(document).ready(function() {
    console.log("document ready");

    $.ajax({
        url: statUrl,
        dataType: "json",
        success: function(response) {
            responseJson = response;
            console.log(responseJson);
        },
        error: function(response) {
            console.log("error");
        }
    });

    showdata();
    showYeardata();
});



function showdata() {

    var barOptions = {
        series: {
            bars: {
                show: true,
                barWidth: 43200000
            }
        },
        xaxis: {
            mode: "time",
            timeformat: "%m/%d",
            minTickSize: [1, "day"]
        },
        grid: {
            hoverable: true 
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    };
    var barData = {
        label: "bar",
        data: [
            [1355000000000, 1000],
            [1355040000000, 2000],
            [1355223600000, 3000],
            [1355306400000, 4000],
            [1355487300000, 5000],
            [1355571900000, 6000]
        ]
    };


    $.plot($("#Month-bar-chart"), [barData], barOptions);
    $.plot($("#Day-bar-chart"), [barData], barOptions);

}

function showYeardata() {
    var ticks = [
        [1, "London"],
        [2, "New York"],
        [3, "New Delhi"],
        [4, "Taipei"],
        [5, "Beijing"],
        [6, "London"],
        [7, "New York"],
        [8, "New Delhi"],
        [9, "Taipei"],
        [10, "Beijing"],
        [11, "Beijing"],
        [12, "Beijing"],
        // [5, "Sydney"]
        //         [, "London"],
        // [1, "New York"],
        // [2, "New Delhi"],
        // [3, "Taipei"],
        // [4, "Beijing"],
        // [5, "Sydney"]
    ];

    var barOptions = {
        series: {
            bars: {
                show: true,
                barWidth: 0.5
            }
        },
        xaxis: {
            axisLabel: "World Cities",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 10,
            ticks: ticks
        },
        yaxis: {
            axisLabel: "Average Temperature",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 3,
            tickFormatter: function(v, axis) {
                return v + "°C";
            }
        },
        grid: {
            hoverable: true
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    };
    var barData = {
        label: "bar",
        data: [

            [1, 1000],
            [2, 2000],
            [3, 3000],
            [4, 4000],
            [5, 5000],
            [6, 500],
            [7, 1000],
            [8, 2000],
            [9, 3000],
            [10, 4000],
            [11, 5000]
            [12, 5000]
        ]
    };
    $.plot($("#Year-bar-chart"), [barData], barOptions);

}
