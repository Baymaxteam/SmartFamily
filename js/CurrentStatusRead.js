//Flot Line Chart

var statYearUrl = "http://192.168.31.215:8000/api/V1/bill/house/year/";
var statMonthUrl = "http://192.168.31.215:8000/api/V1/bill/house/month/";
var statDayUrl = "http://192.168.31.215:8000/api/V1/bill/house/day/";
var statNodeUrl = "http://192.168.31.215:8000/api/V1/bill/house/node/";

var statNodedata = [
    ["1", "台燈", "客廳", "0", "10"],
    ["2", "電風扇", "客廳", "1", "5"],
    ["3", "微波爐", "客廳", "1", "80"]
];

var yearstatdata = {
    "Interval": "year",
    "data": [
        [
            1451606400000,
            546.199
        ],
        [
            1454284800000,
            511.042
        ],
        [
            1456790400000,
            541.042

        ],
        [
            1459468800000,
            546.199
        ],
        [
            1462060800000,
            746.199
        ],
        [
            1464739200000,
            786.199
        ],
        [
            1467331200000,
            806.199
        ],
        [
            1470009600000,
            846.199
        ],
        [
            1472688000000,
            646.199
        ],
        [
            1475280000000,
            576.199
        ],
        [
            1477958400000,
            546.199
        ],
        [
            1480550400000,
            100
        ]
    ]
};

$(document).ready(function() {
    console.log("document ready");

    // $.ajax({
    //     url: statUrl,
    //     dataType: "json",
    //     success: function(response) {
    //         console.log(response);
    //     },
    //     error: function(response) {
    //         console.log("error");
    //     }
    // });

    showMonthdata();
    showYeardata();
    showDaydata();
    showNodedata();
});

function showNodedata() {
    $('#tableNodeStatus').DataTable({
        bFilter: false,
        paging: false,
        responsive: true,
        destroy: true,
        data: statNodedata,

        columns: [{
            title: "ID"
        }, {
            title: "應用"
        }, {
            title: "位置"
        }, {
            title: "狀態"
        }, {
            title: "預估電費NTD(本日)"
        }]
    });
}

function showDaydata() {

    var barOptions = {
        series: {
            bars: {
                show: true,
                barWidth: 1232000000
            }
        },
        xaxis: {
            mode: "time",
            timeformat: "%m/%d",
            minTickSize: [1, "hour"]
        },
        yaxis: {
            axisLabel: "平均電費",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 2,
            tickFormatter: function(v, axis) {
                return "$" + v;
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
        color: "#ff0000",
        data: yearstatdata.data
    };

    $.plot($("#Day-bar-chart"), [barData], barOptions);

}

function showMonthdata() {

    var barOptions = {
        series: {
            bars: {
                show: true,
                barWidth: 1232000000
            }
        },
        xaxis: {
            mode: "time",
            timeformat: "%m/%d",
            minTickSize: [1, "day"]
        },
        yaxis: {
            axisLabel: "平均電費",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 2,
            tickFormatter: function(v, axis) {
                return "$" + v;
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
        color: "#40ff00",
        data: yearstatdata.data
    };

    $.plot($("#Month-bar-chart"), [barData], barOptions);

}

function showYeardata() {
    var barOptions = {
        series: {
            bars: {
                show: true,
                barWidth: 1232000000
            }
        },
        xaxis: {
            mode: "time",
            timeformat: "%m/%d",
            minTickSize: [1, "day"]
        },
        yaxis: {
            axisLabel: "平均電費",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 2,
            tickFormatter: function(v, axis) {
                return "$" + v;
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
        color: "#0000ff",
        data: yearstatdata.data
    };
    $.plot($("#Year-bar-chart"), [barData], barOptions);

}
