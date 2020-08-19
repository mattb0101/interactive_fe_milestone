$(document).ready(function () {
  //------------------Global Variables----------------//

  var playerOneMove;
  var playerOne = '<div id="player-one">1</div>';
  var compOne = '<div id="comp-one">C</div>';
  var turn = "";

  var currFame = 0;
  var currHappy = 0;
  var currMoney = 0;

  //--------------------Turn Counter------------------//

  // $("#2>div, #5>div, #15>div, #18>div").html("Opportunity Arises").css({"writing-mode": "vertical-rl", "text-orientation": "mixed"});
  //   $("#8>div, #10>div, #21>div, #24>div").html("Opportunity Arises");

  //---------------------Element Rewrites------------//

  //---------------------Start Up--------------------//

  $(".reset").on("click", function () {
    location.reload();
  });

  function currTurn(x) {
    return $(".current-turn").text(x);
  }

  $("#4>div").append(playerOne, compOne);

  $("#skip-btn").click(function () {
    $("#rules").fadeOut("slow");
    setTurn();
  });

  $("#play-btn").click(function () {
    $("#rules-content").slideToggle("slow", function () {
      $("#players").slideToggle("slow").css("display", "flex");
    });
  });

  $("#go-btn").click(function () {
    $("#players").slideToggle("slow", function () {
      $("#formula").slideToggle("slow").css("display", "flex");
    });
  });

  $("#next-btn").click(function () {
    if (
      Number($(".fame").val()) +
        Number($(".happiness").val()) +
        Number($(".money").val()) !=
      60
    ) {
      $(".check-message").html("Your formula doesnt equal 60!");
    } else {
      $("#rules").fadeOut("slow");
      $(".heart").html("Happiness: " + $(".happiness").val());
      $(".star").html("Fame: " + $(".fame").val());
      $(".dollar").html("Money: " + $(".money").val());
    }
    setTurn();
  });

  $(".current-star").html("Fame: " + currFame);
  $(".current-dollar").html("Money: " + currMoney);
  $(".current-heart").html("Happiness: " + currHappy);

  //---------------------Game Play--------------------//
  //   if($("#player-one").parent().parent().attr("id") == 4) {
  //       console.log("Do you want to enter the inner sanctum!?");
  //   } else {
  //       console.log("Normal play");
  //   };

  //---------Setting Turn-----------//

  function setTurn() {
    var r = Math.floor(Math.random() * 2 + 1);
    if (r == 1) {
      turn = "Player";
      currTurn("Player's turn now!");
    } else {
      turn = "Comp1";
      currTurn("Comp 1's turn now!");
    }
    startTurn();
  }

  //---------------------Game Play--------------------//

  function startTurn() {

    console.log(turn);

    if (turn == "Player") {
      var currentSpace = $("#player-one").parent().parent().attr("id");
        if (currentSpace==4) {
            $("#choose-enrol").slideToggle("slow").css("display", "flex");
            $(".enrol-no").on("click", function() {
                $("#choose-enrol").fadeOut("slow");
            });
        } 
    } else if (turn == "Comp1") {
        var currentSpace = $("#comp-one").parent().parent().attr("id");
        if (currentSpace==4) {
            $("#choose-enrol").slideToggle("slow").css("display", "flex");
            $(".enrol-no").on("click", function() {
                $("#choose-enrol").fadeOut("slow");
            });
        }
    }; 
};


    $(".roll-btn").on("click", function() {
        var id = function() {
                if(turn == "Player") {
                    return "#player-one";
                } else {
                    return "#comp-one";
                }
        };
            var diceRoll = Math.floor(Math.random() * 6) +1;
            var currentSpace = $(id).parent().parent().attr("id");
            var nextSpace = Number(currentSpace) + Number(diceRoll);
            
            $("#die-one").html(diceRoll);
             if (nextSpace > 24) {
                 nextSpace = nextSpace - 24;
             }
             $(id).remove();
             if (turn == "Player") {
                $("#" + nextSpace + ">div").append(playerOne);
             } else {
                 $("#" + nextSpace + ">div").append(compOnne);
             }
             
            //  turn = "Comp1";
            //  currTurn("Comp 1's turn now!");
    });
             




//   $(".roll-btn").on("click", function () {
//     var diceRoll = Math.floor(Math.random() * 6) + 1;
//     // use .this instead of the player and create an array of the players!
//     var currentSpace = $("#player-one").parent().parent().attr("id");
//     var nextSpace = Number(currentSpace) + Number(diceRoll);

//     $("#die-one").html(diceRoll);
//         if (nextSpace > 24) {
//             nextSpace = nextSpace - 24;
//         }
//     $("#player-one").remove();
//     $("#" + nextSpace + ">div").append(playerOne);
//     turn = "Comp1";
//     currTurn("Comp 1's turn now!");
//   });




}); // keep this as it closes full statement
