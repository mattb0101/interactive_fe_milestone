$(document).ready(function() {

//------------------Global Variables----------------//

var playerOneMove;
var playerOne = '<div id="player-one">1</div>';

var currFame = 0;
var currHappy = 0;
var currMoney = 0;


//--------------------Turn Counter------------------//

// $("#2>div, #5>div, #15>div, #18>div").html("Opportunity Arises").css({"writing-mode": "vertical-rl", "text-orientation": "mixed"});
$("#8>div, #10>div, #21>div, #24>div").html("Opportunity Arises");

//---------------------Element Rewrites------------//


//---------------------Start Up--------------------//

$(function() {
    $("#1>div").append(playerOne);
});


$("#play-btn").click(function() {
    $("#rules-content").slideToggle("slow", function(){
        $("#players").slideToggle("slow").css("display", "flex");
    });
});

$("#go-btn").click(function() {
    $("#players").slideToggle("slow", function(){
        $("#formula").slideToggle("slow").css("display", "flex");
    });
});

$("#next-btn").click(function() {
    console.log();
    if(Number($(".fame").val()) + Number($(".happiness").val()) + Number($(".money").val()) != 60) {
    
        $(".check-message").html("Your formula doesnt equal 60!");
    } else {
    $("#rules").fadeOut("slow");
    $(".heart").html("Happiness: " + $(".happiness").val());
    $(".star").html("Fame: " + $(".fame").val());
    $(".dollar").html("Money: " + $(".money").val());
    }
});

$(".current-star").html("Fame: " + currFame);
$(".current-dollar").html("Money: " + currMoney);
$(".current-heart").html("Happiness: " + currHappy);




//---------------------Game Play--------------------//

function rollDice(dTotal) {
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
    // var i = 0;
    // var players = ["one", "two"]; 
    var currentSpace = $("#player-one").parent().parent().attr("id");
    var diceRoll = document.querySelector("#roll").innerText;
    var nextSpace = Number(currentSpace) + Number(diceRoll);
    var playerOne = `<div id="player-one">1</div>`;
    
    if (nextSpace > 24) {
        nextSpace = (nextSpace - 24);
    }
    document.getElementById("player-one").remove();

    $("#" + nextSpace + ">div").append(playerOne);
}

// https://stackoverflow.com/questions/52486241/show-array-increment-one-by-one-elements-upon-onclick-function - This helped.

// var i = 0
// var players = ["player-one", "two", "three", "four"];

//     function currentPlayer() {
//         if (i >= players.length) i = 0;

//         document.getElementById("current-player").innerHTML = players[i];
//         i++;

//         function addCurrentPlayerClass() {
//         var current = document.getElementById("player-one");
//         current.classList.add("current");
//         }
//     }

// var modal = document.getElementById("modal");
// var btn = document.getElementById("route-choose");

// var close = document.getElementById("no")
// var closeToo = document.getElementById("yes")


// btn.onclick = function() {
//     modal.style.display = "block";
// }

// close.onclick = function() {
//     modal.style.display = "none";
// }
// closeToo.onclick = function() {
//     modal.style.display = "none";
// }


});