//Flot Line Chart
var responseJson = [];

var Obj_Nnode = {
    DOMList: [$('#btnMainLight'), $('#btnWallLight'), $('#btnFan')],
    ID: ["1", "2", "3"],
    State: ["0", "0", "0"],
    Url: ["123"]

}

var Obj_Lnode = {
    DOMList: [
        [$('#btnCurtain1'), $('#btnCurtain2'), $('#btnCurtain3')]
    ],
    ID: ["7"],
    State: [
        ["0", "0", "1"]
    ]
}

var Obj_IRnode = {
    DOMList: [$('#btnCurtain1'), $('#btnCurtain2'), $('#btnCurtain3')],
    ID: ["9"]
}

// var Nnodelist = [$('#btnMainLight'), $('#btnWallLight'), $('#btnFan')];
// var Lnodelist = [$('#btnCurtain1'), $('#btnCurtain2'), $('#btnCurtain1')];
// var NnodeID = ["1", "2", "3"];
// var LnodeID = ["7"];
var nodeUrlBase = "http://192.168.31.245:8000/api/V1/node/"

$(document).ready(function() {
    console.log("document ready");

    // 一次得到所有狀態的resufl
    // 獲得目前開關所有的狀態
    get_NodeBtnStatus();

    // 使用者控制開關
    // post_NodeBtnStatus();

    $.each(Obj_Nnode.ID, function(i) {
        // console.log(i);
        Obj_Nnode.DOMList[i].change(function(event) {

            var nodeUrl = nodeUrlBase + Obj_Nnode.ID[i] + "/";
            // console.log(NnodeUrl);
            if ($(this).prop("checked") == true) {
                Obj_Nnode.State[i] = "1";
            } else {
                Obj_Nnode.State[i] = "0";
            }
            // console.log(Obj_Nnode.State[i]);
            checkNodeNState(Obj_Nnode.State[i], nodeUrl);

        });
    });

    $.each(Obj_Lnode.ID, function(i) {
        // console.log(i);
        $.each(Obj_Lnode.DOMList[i], function(j) {
            Obj_Lnode.DOMList[i][j].change(function(event) {
                var nodeUrl = nodeUrlBase + Obj_Lnode.ID[i] + "/";

                if ($(this).prop("checked") == true) {
                    Obj_Lnode.State[i][j] = "1";
                } else {
                    Obj_Lnode.State[i][j] = "0";
                }
                // console.log(Obj_Nnode.State[i]);
                checkNodeLState(Obj_Lnode.State[i], nodeUrl);
            });
        });

    });
    // for (var i = 0; i < Obj_Nnode.ID.length; i++) {
    //     Obj_Nnode.DOMList[i].change(function(event) {
    //         var nodeUrl = nodeUrlBase + Obj_Nnode.ID[i] + "/";
    //         // console.log(NnodeUrl);
    //         if ($(this).prop("checked") == true) {
    //             Obj_Nnode.State[i] = "1";
    //         } else {
    //             Obj_Nnode.State[i] = "0";
    //         }
    //         console.log(Obj_Nnode.State[i]);
    //         checkNodeNState(Obj_Nnode.State[i], Obj_Nnode.Url[i]);

    //     });
    // }
    // Obj_Nnode.DOMList[0].change(function(event) {
    //     var nodeUrl = nodeUrlBase + Obj_Nnode.ID[0] + "/";
    //     if ($(this).prop("checked") == true){
    //         Obj_Nnode.State[0] = "1";
    //     }
    //     else{
    //         Obj_Nnode.State[0] = "0";
    //     }
    //     checkNodeNState(Obj_Nnode.State[0], Obj_Nnode.Url[0]);

    // });

    // 按下按鍵，REST GET要資料，檢查開關狀態
    // N type
    $('#btnCurtain1').click(function() {
        var nodeUrl = "http://192.168.31.168:8000/api/V1/node/7/"
        $.ajax({
            url: nodeUrl,
            dataType: "json",
            success: function(response) {
                responseJson = response;
                console.log(responseJson);
                checkNodeLState(responseJson.State, nodeUrl, 1);
            },
            error: function(response) {
                console.log("error");
            }
        });
    });

    $('#btnCurtain2').click(function() {
        var nodeUrl = "http://192.168.31.168:8000/api/V1/node/7/"
        $.ajax({
            url: nodeUrl,
            dataType: "json",
            success: function(response) {
                responseJson = response;
                console.log(responseJson);
                checkNodeLState(responseJson.State, nodeUrl, 2);
            },
            error: function(response) {
                console.log("error");
            }
        });
    });

    $('#btnCurtain3').click(function() {
        var nodeUrl = "http://192.168.31.168:8000/api/V1/node/7/"
        $.ajax({
            url: nodeUrl,
            dataType: "json",
            success: function(response) {
                responseJson = response;
                console.log(responseJson);
                checkNodeLState(responseJson.State, nodeUrl, 3);
            },
            error: function(response) {
                console.log("error");
            }
        });
    });

    // IR
    $('#btnTVON').click(function() {
        var nodeUrl = "http://192.168.31.168:8000/api/V1/node/9/"
        checkNodeIRState("ON", nodeUrl)
    });
    $('#btnTVMute').click(function() {
        var nodeUrl = "http://192.168.31.168:8000/api/V1/node/9/"
        checkNodeIRState("Mute", nodeUrl)
    });
    $('#btnTVUP').click(function() {
        var nodeUrl = "http://192.168.31.168:8000/api/V1/node/9/"
        checkNodeIRState("UP", nodeUrl)
    });

});

function get_NodeBtnStatus() {

    // 0223 change status bug
    // check N node status
    for (var i = 0; i < Obj_Nnode.ID.length; i++) {
        var nodeUrL = nodeUrlBase + Obj_Nnode.ID[i] + "/";
        console.log(nodeUrL);
        $.ajax({
            url: nodeUrL,
            dataType: "json",
            success: function(response) {
                console.log(response);
                var index = Obj_Nnode.ID.indexOf(response.ID.toString());
                Obj_Nnode.State[index] = response.State.toString();

                if (Obj_Nnode.State[index].toString() == "0") {
                    Obj_Nnode.DOMList[index].bootstrapToggle('off');
                } else {
                    Obj_Nnode.DOMList[index].bootstrapToggle('on');
                }
            },
            error: function(response) {
                console.log("error");
            }
        });
    }

    // check L node status
    for (var i = 0; i < Obj_Lnode.ID.length; i++) {
        var nodeUrL = nodeUrlBase + Obj_Lnode.ID[i] + "/";
        console.log(nodeUrL);

        $.ajax({
            url: nodeUrL,
            dataType: "json",
            success: function(response) {
                console.log(response);

                var index = Obj_Lnode.ID.indexOf(response.ID.toString());
                Obj_Lnode.State[index] = Conveter_LnodeState2Bit(response.State.toString());
                // console.log(index);
                console.log(Obj_Lnode.State[index]);
                for (var i in Obj_Lnode.DOMList[index]) {
                    if (Obj_Lnode.State[index][i].toString() == "0") {
                        Obj_Lnode.DOMList[index][i].bootstrapToggle('off');
                    } else {
                        Obj_Lnode.DOMList[index][i].bootstrapToggle('on');
                    }
                }
            },
            error: function(response) {
                console.log("error");
            }
        });
    }
}


// no use
function getNodeState(nodeurl) {

    $.ajax({
        url: nodeurl,
        type: "GET",
        success: function(response) {
            console.log(response);
            return response;
        },
        error: function(response) {
            console.log("error");
        }
    });
}

// check node status
function checkNodeNState(State, nodeUrl) {
    var open = '{"State": 1}';
    var close = '{"State": 0}';
    // ON status --> close
    if (State == "1") {
        nodeChangeState(open, nodeUrl)
    } else {
        nodeChangeState(close, nodeUrl)
    }

}

function checkNodeLState(State, nodeUrl, nodeOrder) {
    // chech data
    State = parseInt(State);
    if (nodeOrder == 3) {
        // node 3 = HIGH 1XX
        if (State > 3) {
            State = State - 4;
        } else {
            State = State + 4;
        }
    } else if (nodeOrder == 2) {
        if (State == 2 || State == 3 || State == 6 || State == 7) {
            State = State - 2;
        } else {
            State = State + 2;
        }
    } else {
        if (State == 1 || State == 3 || State == 5 || State == 7) {
            State = State - 1;
        } else {
            State = State + 1;
        }
    }
    State = State.toString();

    var sendStatus = '{"State": ';
    sendStatus = sendStatus + State + '}';

    console.log(sendStatus);
    // ON status --> close
    nodeChangeState(sendStatus, nodeUrl)
}

function checkNodeIRState(State, nodeUrl) {
    var sendStatus = '{"State": "';
    sendStatus = sendStatus + State + '"}';

    console.log(sendStatus);
    // ON status --> close
    nodeChangeState(sendStatus, nodeUrl)

}

//改變開關狀態 REST PUT 改變狀態 
function nodeChangeState(inputStatus, nodeurl) {
    $.ajax({
        url: nodeurl,
        headers: {
            "Content-Type": "application/json"
        },
        type: "PUT",
        data: inputStatus,
        success: function(response) {
            console.log(response);
        },
        error: function(response) {
            console.log("error");
        }
    });
}


function Conveter_LnodeState2Bit(inputStatus) {
    switch (inputStatus) {
        case "0":
            return ["0", "0", "0"]
            break;
        case "1":
            return ["0", "0", "1"]
            break;
        case "2":
            return ["0", "1", "0"]
            break;
        case "3":
            return ["0", "1", "1"]
            break;
        case "4":
            return ["1", "0", "0"]
            break;
        case "5":
            return ["1", "0", "1"]
            break;
        case "6":
            return ["1", "1", "0"]
            break;
        case "7":
            return ["1", "1", "1"]
            break;
        default:
            return ["error"]
    }

}

function Conveter_LnodeBit2State(inputStrArray) {
    var tempvalue = 0;
    var tempint = 0;
    for (var i in inputStrArray){
        tempint = parseInt(inputStrArray(i));
        tempvalue = 2^(2-tempint)
    }
   

}
