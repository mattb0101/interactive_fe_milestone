//------------------Global Variables----------------//

var playerOneMove;
var playerTwoMove;

//--------------------Turn Counter------------------//

var totalRounds;

//---------------------Element Rewrites------------//


//---------------------Start Up--------------------//

$(function() {
    var playerOne = '<div id="player-one">1</div>';
    // var playerTwo = '<div id="player-two">2</div>';
    // var playerThree = '<div id="player-three">3</div>';
    // var playerFour = '<div id="player-four">4</div>';
    $("#1>div").append(playerOne);
    // $("#1>div").append(playerTwo);
    // $("#1>div").append(playerThree);
    // $("#1>div").append(playerFour);
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
    $("#rules").fadeOut("slow");
    });



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

