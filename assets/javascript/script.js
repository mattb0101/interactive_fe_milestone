$(function() {
    var counter = '<div id="counter"></div>';
    $("#1>div").append(counter);
});

function rollDice() {
    var die1 = document.getElementById("die-one");
    var die2 = document.getElementById("die-two");
    var total = document.getElementById("roll");

    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var dTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    roll.innerHTML = dTotal;
};

// https://stackoverflow.com/questions/27842138/get-id-of-parent-element-on-click - This helped

function moveCounter() {
    var currentSpace = $("#counter").parent().parent().attr("id");
    var diceRoll = document.querySelector("#roll").innerText;
    var nextSpace = Number(currentSpace) + Number(diceRoll);
    var counter = '<div id="counter"></div>';
    
    document.getElementById("counter").remove();

    $("#" + nextSpace + ">div").append(counter);
}