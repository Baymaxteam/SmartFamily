$.each(sites, function(i) {
    $("#thumb" + i).click(function() {
        $("#shader").show();
        $("#thumbInfo" + i).show();
        alert("#thumbInfo" + i);
    });
    $("#thumbInfo" + i + " .xbutton").click(function() {
        $("#shader").hide();
        $("#thumbInfo" + i).hide();
    });
});
