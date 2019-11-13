$("#shoot").click(function() {
  var inpput = $("#input").val();
$("#userChoice").append(input);
var go = Math.random();
$("#computerChoice").text(go)
if (go > .70){
$("#computerChoice").text("Rock");
}
else if (go > .40){
$("#computerChoice").text("Scissors");
}
else {
    ("#computerChoice").text("Paper");
}
});
