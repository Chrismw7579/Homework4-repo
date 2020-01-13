let back = $("#back");
let clear = $("#clear");

let url = "index.html"

back.on("click", function() {
    $(location).attr('href',url);
});


clear.on("click", function() {
    localStorage.clear();
    $("#scores").empty();
});

function displayScores() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        let newScore = $("<h3>");
        newScore.text(`${i + 1}. ${key}-${value}`);
        $("#scores").append(newScore);
    }
}

displayScores();