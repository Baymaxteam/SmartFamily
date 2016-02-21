//Flot Line Chart
var responseJson = [];
$(document).ready(function() {
    console.log("document ready");

    var nodeUrl = "http://192.168.1.215:8000/api/V1/node/"
    $.ajax({
        url: nodeUrl,
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
            [1354521600000, 1000],
            [1355040000000, 2000],
            [1355223600000, 3000],
            [1355306400000, 4000],
            [1355487300000, 5000],
            [1355571900000, 6000]
        ]
    };
    $.plot($("#Year-bar-chart"), [barData], barOptions);

    $.plot($("#Month-bar-chart"), [barData], barOptions);
    $.plot($("#Day-bar-chart"), [barData], barOptions);

}
