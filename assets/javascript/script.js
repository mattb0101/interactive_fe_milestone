$(document).ready(function () {
  //------------------Global Variables----------------//

  var playerOne = '<div id="player-one">1</div>';
  var compOne = '<div id="comp-one">C1</div>';
  var compTwo = '<div id="comp-two">C2</div>';
  var compThree = '<div id="comp-three">C3</div>';
  var turn = "";
  var path = "outer";

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

  $("#1>div").append(playerOne, compOne, compTwo, compThree);

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

  //---------------------Opportunity Cards --------------------//

  oppCardArray = [[1, "Enrol", "Normal Reqs"],[2, "HTML", "Expenses Paid"],[3, "HTML", "Normal Reqs"],[4, "CSS", "Expenses Paid"],[5, "CSS", "Normal Reqs"],[6, "JavaScript", "Expenses Paid"],[7, "JavaScript", "Normal Reqs"],[8, "Holiday", "Yet unknown"]]

  

  console.log(oppCardArray);
  

  playerOppCards = [];

  //---------Setting Turn-----------//

  function setTurn() {
    var r = Math.floor(Math.random() * 4 + 1);
    if (r == 1) {
      turn = "Player";
      currTurn("Player's turn now!");
      playerOneTurn();
    } else if (r == 2) {
      turn = "Comp1";
      currTurn("Comp 1's turn now!");
      compOneTurn();
    } else if (r == 3) {
      turn = "Comp2";
      currTurn("Comp 2's turn now!");
      compTwoTurn();
    } else if (r == 4) {
      turn = "Comp3";
      currTurn("Comp 3's turn now!");
      compThreeTurn();
    }
  }

  //---------------------Game Play--------------------//

  function playerOneTurn() {
    var currentSpace = $("#player-one").parent().parent().attr("id");
    if (currentSpace == 4) {
      $("#choose-enrol").slideToggle("slow").css("display", "flex");
      $(".enrol-no").on("click", function () {
        $("#choose-enrol").fadeOut("slow");
      });
      $(".enrol-yes").on("click", function () {
        $("#choose-enrol").fadeOut("slow");
        path = "inner-e";
      });
    }
  }

  function compOneTurn() {
    var currentSpace = $("#comp-one").parent().parent().attr("id");
    if (currentSpace == 4) {
      $("#choose-enrol").slideToggle("slow").css("display", "flex");
      $(".enrol-no").on("click", function () {
        $("#choose-enrol").fadeOut("slow");
      });
    }
  }

  function compTwoTurn() {
    var currentSpace = $("#comp-two").parent().parent().attr("id");
    if (currentSpace == 4) {
      $("#choose-enrol").slideToggle("slow").css("display", "flex");
      $(".enrol-no").on("click", function () {
        $("#choose-enrol").fadeOut("slow");
      });
    }
  }

  function compThreeTurn() {
    var currentSpace = $("#comp-three").parent().parent().attr("id");
    if (currentSpace == 4) {
      $("#choose-enrol").slideToggle("slow").css("display", "flex");
      $(".enrol-no").on("click", function () {
        $("#choose-enrol").fadeOut("slow");
      });
    }
  }

  // Rolling Dice so it affects correct player. Eventually this should be auto number rolling for the computers.

  $(".roll-btn").on("click", function () {
    if (turn == "Player") {
      var currentSpace = $("#player-one").parent().parent().attr("id");;
      var diceRoll = Math.floor(Math.random() * 6) + 1;
      // use .this instead of the player and create an array of the players!


      if (path == "inner-e" && currentSpace == 4) {
           currentSpace = $("#player-one").parent().parent().attr("id");
    } else if (path == "inner-e" && currentSpace != 4 ) {
            currentSpace = $("#player-one").parent().attr("id");
    } else if (path == "inner-e") {
           currentSpace = $("#player-one").parent().attr("id");
      };
      console.log(playerOppCards);
      console.log(currentSpace);
      var nextSpace = Number(currentSpace) + Number(diceRoll);

      $("#die-one").html(diceRoll);

        console.log(nextSpace);

      if (path == "outer") {
        if (nextSpace > 24) {
          nextSpace = nextSpace - 24;
        }
        $("#player-one").remove();
        $("#" + nextSpace + ">div").append(playerOne);
      } else if (path == "inner-e" && currentSpace == 4) {
          nextSpace = nextSpace + 20; 
          $("#player-one").remove();
          $("#" + nextSpace).append(playerOne);
      } else if (path == "inner-e" && nextSpace <= 35) {
          $("#player-one").remove();
          $("#" + nextSpace).append(playerOne);
      } else if (path == "inner-e" && nextSpace > 35) {
          nextSpace = nextSpace - 31;
          $("#player-one").remove();
          $("#" + nextSpace + ">div").append(playerOne);
          path = "outer";
      } 
        if (nextSpace == 2 || nextSpace == 5 || nextSpace == 8 || nextSpace == 10 || nextSpace == 15 || nextSpace == 18 || nextSpace == 21 || nextSpace == 24 ) {
            var randomOpp = Math.floor(Math.random() * oppCardArray.length);
            playerOppCards.push(oppCardArray[randomOpp]);
            console.log(randomOpp);
            $(".opp-cards").append(`<div class="player-opp-card${playerOppCards[0][0]}">Testing</div>`);
        }

        console.log(playerOppCards);
        turn = "Comp1";
        currTurn("Comp 1's turn now!");
        compOneTurn();
    }   
    
    
     else if (turn == "Comp1") {
      var diceRoll = Math.floor(Math.random() * 6) + 1;
      // use .this instead of the player and create an array of the players!
      var currentSpace = $("#comp-one").parent().parent().attr("id");
      var nextSpace = Number(currentSpace) + Number(diceRoll);

      $("#die-one").html(diceRoll);
      if (nextSpace > 24) {
        nextSpace = nextSpace - 24;
      }
      $("#comp-one").remove();
      $("#" + nextSpace + ">div").append(compOne);
      turn = "Comp2";
      currTurn("Comp 2's turn now!");
      compTwoTurn();
    } else if (turn == "Comp2") {
      var diceRoll = Math.floor(Math.random() * 6) + 1;
      // use .this instead of the player and create an array of the players!
      var currentSpace = $("#comp-two").parent().parent().attr("id");
      var nextSpace = Number(currentSpace) + Number(diceRoll);

      $("#die-one").html(diceRoll);
      if (nextSpace > 24) {
        nextSpace = nextSpace - 24;
      }
      $("#comp-two").remove();
      $("#" + nextSpace + ">div").append(compTwo);
      turn = "Comp3";
      currTurn("Comp 3's turn now!");
      compThreeTurn();
    } else if (turn == "Comp3") {
      var diceRoll = Math.floor(Math.random() * 6) + 1;
      // use .this instead of the player and create an array of the players!
      var currentSpace = $("#comp-three").parent().parent().attr("id");
      var nextSpace = Number(currentSpace) + Number(diceRoll);

      $("#die-one").html(diceRoll);
      if (nextSpace > 24) {
        nextSpace = nextSpace - 24;
      }
      $("#comp-three").remove();
      $("#" + nextSpace + ">div").append(compThree);
      turn = "Player";
      currTurn("Players's turn now!");
      playerOneTurn();
    }
  });
}); // keep this as it closes full statement
