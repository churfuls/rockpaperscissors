$("#shoot").click(function() {
  var input = $("#input").val();
$("#userChoice").text(input);
var go = Math.random();

if (go > .70){
$("#computerChoice").text("rock");
}
else if (go > .40){
$("#computerChoice").text("scissors");
}
else {
    console.log("i hate you!");
    $("#computerChoice").text ("paper");
}
var computerChoice = $("#computerChoice").val();

if (input === "rock" && computerChoice === "rock" ){
    Message = ("You both suck")
    $("#result").text("message")
}
});
