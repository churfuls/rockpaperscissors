$("#shoot").click(function() {
  var input = $("#input").val();
$("#userChoice").text(input);
var go = Math.random();

if (go > .70){
$("#computerChoice").text("Rock");
}
else if (go > .40){
$("#computerChoice").text("Scissors");
}
else {
    console.log("i hate you!");
    $("#computerChoice").text ("Paper");
}
var computerChoice = $("#computerChoice").val();

if (input === "rock" && Computerchoice === "rock" ){
    Message = ("You both suck")
    $("#result").text ("message")
}
});
