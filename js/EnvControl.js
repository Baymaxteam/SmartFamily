//Flot Line Chart
 var envUrl = "http://192.168.31.215:8000/api/bill/house/month/"

$(document).ready(function() {
    console.log("document ready");
   

    $("btnEnvOutDoor").click(function(event) {
        /* Act on the event */
    });

    $("btnEnv").click(function(event) {
        /* Act on the event */
    });

    $("btnEnvSleep").click(function(event) {
        /* Act on the event */
    });

});


function post_EnvControl(EnvControlCommend, EnvControlUrl) {
    $.ajax({
        url: nodeurl,
        headers: {
            "Content-Type": "application/json"
        },
        type: "PUT",
        data: EnvControlCommend,
        success: function(response) {
            console.log(response);

        },
        error: function(response) {
            console.log("error");
        }
    });

}
