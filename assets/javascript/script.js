$(document).ready(function () {
  //------------------Global Variables----------------//

  var playerOne = '<div id="player-one">1</div>';
  var compOne = '<div id="comp-one">C1</div>';
  var compTwo = '<div id="comp-two">C2</div>';
  var compThree = '<div id="comp-three">C3</div>';
  var turn = "";
  var path = "outer";

  var gameWon = 0;
  var covidRedundancy = false;
  var hacked = false;

  var currFollow = 0;
  var currHappy = 0;
  var currMoney = 1;
  var currIncome = 1;

  var currFollowC1 = 0;
  var currHappyC1 = 0;
  var currMoneyC1 = 1;
  var currIncomeC1 = 1;

  var currFollowC2 = 0;
  var currHappyC2 = 0;
  var currMoneyC2 = 1;
  var currIncomeC2 = 1;

  var currFollowC3 = 0;
  var currHappyC3 = 0;
  var currMoneyC3 = 1;
  var currIncomeC3 = 1;

  //--------------------Turn Counter------------------//

  // $("#2>div, #5>div, #15>div, #18>div").html("Opportunity Arises").css({"writing-mode": "vertical-rl", "text-orientation": "mixed"});
  //   $("#8>div, #10>div, #21>div, #24>div").html("Opportunity Arises");

  //---------------------Element Rewrites------------//

  //---------------------Start Up--------------------//

  $(".reset-btn").on("click", function () {
    location.reload();
  });

  function currTurn(x) {
    return $(".current-turn").text(x);
  }

  $("#1>div").append(compOne, compTwo, compThree);
  $("#1>div").append(playerOne);
  $(".roll-btn").attr("disabled", true);

  $(".skip-btn").click(function () {
    $("#rules").fadeOut("slow");
    setTurn();
  });

  $(".play-btn").click(function () {
    $("#rules-content").slideToggle("slow", function () {
      $("#players").slideToggle("slow").css("display", "flex");
    });
  });

  $(".go-btn").click(function () {
    $("#players").slideToggle("slow", function () {
      $("#formula").slideToggle("slow").css("display", "flex");
    });
  });

  $(".next-btn").click(function () {
    if (
      Number($(".fame").val()) +
        Number($(".happiness").val()) +
        Number($(".money").val()) !=
      60
    ) {
      $(".check-message").html("Your formula doesnt equal 60!");
    } else {
      $("#formula").css("display", "none");
      $("#rules").fadeOut("slow");
      $(".heart").html(
        "Happiness: " + $(".happiness").val() + ' <i class="fas fa-heart"></i>'
      );
      $(".star").html(
        "Followers: " + $(".fame").val() + ' <i class="fas fa-star"></i>'
      );
      $(".dollar").html("Money: £" + $(".money").val() * 1000);
    }
    setTimeout(() => {
      setTurn();
    }, 500);
  });

  $(".current-star").html(
    "Followers: " + currFollow + '<i class="fas fa-star"></i>'
  );
  $(".current-dollar").html("Money: £" + currMoney * 1000);
  $(".current-heart").html(
    "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
  );
  $(".current-income").html("Income: £" + currIncome * 1000);

  $(".comp-one-star").html(
    "Followers: " + currFollowC1 + '<i class="fas fa-star"></i>'
  );
  $(".comp-one-dollar").html("Money: £" + currMoneyC1 * 1000);
  $(".comp-one-heart").html(
    "Happiness: " + currHappyC1 + ' <i class="fas fa-heart"></i>'
  );
  $(".comp-one-income").html("Income: £" + currIncomeC1 * 1000);

  $(".comp-two-star").html(
    "Followers: " + currFollowC2 + '<i class="fas fa-star"></i>'
  );
  $(".comp-two-dollar").html("Money: £" + currMoneyC2 * 1000);
  $(".comp-two-heart").html(
    "Happiness: " + currHappyC2 + ' <i class="fas fa-heart"></i>'
  );
  $(".comp-two-income").html("Income: £" + currIncomeC2 * 1000);

  $(".comp-three-star").html(
    "Followers: " + currFollowC3 + '<i class="fas fa-star"></i>'
  );
  $(".comp-three-dollar").html("Money: £" + currMoneyC3 * 1000);
  $(".comp-three-heart").html(
    "Happiness: " + currHappyC3 + ' <i class="fas fa-heart"></i>'
  );
  $(".comp-three-income").html("Income: £" + currIncomeC3 * 1000);

  //---------------------Opportunity Cards --------------------//

  oppCardArray = [
    [1, "Enrol", "Normal Reqs"],
    [2, "HTML", "Expenses Paid"],
    [3, "HTML", "Normal Reqs"],
    [4, "CSS", "Expenses Paid"],
    [5, "CSS", "Normal Reqs"],
    [6, "JavaScript", "Expenses Paid"],
    [7, "JavaScript", "Normal Reqs"],
    [8, "Holiday", "Yet unknown"],
  ];

  playerOppCards = [];

  expCardArray = [
    [1, "Move 1 Square"],
    [2, "Move 2 Squares"],
    [3, "Move 3 Squares"],
    [4, "Move 4 Squares"],
  ];

  playerExpCards = [];

  //---------Setting Turn-----------//

  function setTurn() {
    var r = Math.floor(Math.random() * 4 + 1);
    if (r == 1) {
      turn = "Player";
      currTurn("Player's turn now!");
      $(".roll-btn").removeAttr("disabled");
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

  //---------------------Winning Check----------//

  function winCheck() {
    if (turn == "Player") {
      if (
        currFollow == $(".fame").val() &&
        currHappy == $(".happiness").val() &&
        currMoney == $(".money").val()
      ) {
        $("#rules").css({
          display: "flex",
          "background-color": "rgba(0,0,0,0)",
          "backdrop-filter": "none",
        });
        $("#winner").slideToggle().css("display", "flex");
        gameWon = 1;
      }
    }
  }

  //---------------------Game Play--------------------//

  function playerOneTurn() {
    winCheck();

    if (gameWon == 1) {
      console.log("Game Won");
    }

    $(".player-turn-notice")
      .removeAttr("style")
      .animate({ left: "-=73%" }, 500)
      .delay(1000)
      .animate({ left: "-=100%" }, 500);

    $(".roll-btn").removeAttr("disabled");
    var currentSpace = $("#player-one").parent().parent().attr("id");

    if (currentSpace != 13) {
      covidRedundancy = false;
    }

    if (currentSpace != 7) {
      hacked = false;
    }

    if (currentSpace == 4) {
      setTimeout(() => {
        $(".roll-btn").attr("disabled", true);
        $("#choose-enrol").slideToggle("slow").css("display", "flex");
        $(".enrol-no").on("click", function () {
          $(".roll-btn").removeAttr("disabled");
          $("#choose-enrol").fadeOut("slow");
        });
        $(".enrol-yes").on("click", function () {
          $(".roll-btn").removeAttr("disabled");
          $("#choose-enrol").fadeOut("slow");
          path = "inner-e";
        });
      }, 1750);
    }
    if (currentSpace == 11) {
        setTimeout(() => {
      $(".roll-btn").attr("disabled", true);
      $("#choose-html").slideToggle("slow").css("display", "flex");
      $(".html-no").on("click", function () {
        $(".roll-btn").removeAttr("disabled");
        $("#choose-html").fadeOut("slow");
      });
      $(".html-yes").on("click", function () {
        $(".roll-btn").removeAttr("disabled");
        $("#choose-html").fadeOut("slow");
        path = "inner-h";
      });
      }, 1750);
    }
    if (currentSpace == 17) {
        setTimeout(() => {
      $(".roll-btn").attr("disabled", true);
      $("#choose-css").slideToggle("slow").css("display", "flex");
      $(".css-no").on("click", function () {
        $(".roll-btn").removeAttr("disabled");
        $("#choose-css").fadeOut("slow");
      });
      $(".css-yes").on("click", function () {
        $(".roll-btn").removeAttr("disabled");
        $("#choose-css").fadeOut("slow");
        path = "inner-c";
      });
      }, 1750);
    }
    if (currentSpace == 23) {
        setTimeout(() => {
      $(".roll-btn").attr("disabled", true);
      $("#choose-javascript").slideToggle("slow").css("display", "flex");
      $(".javascript-no").on("click", function () {
        $(".roll-btn").removeAttr("disabled");
        $("#choose-javascript").fadeOut("slow");
      });
      $(".javascript-yes").on("click", function () {
        $(".roll-btn").removeAttr("disabled");
        $("#choose-javascript").fadeOut("slow");
        path = "inner-j";
      });
      }, 1750);
    }
  }

  function compOneTurn() {
    var currentSpace = $("#comp-one").parent().parent().attr("id");
    if (currentSpace == 4) {
      $("#choose-enrol").slideToggle("slow").css("display", "flex");
      $(".enrol-no").on("click", function () {
        $("#choose-enrol").fadeOut("slow");
        $(".roll-btn").trigger("click");
      });
    } else {
      $(".roll-btn").trigger("click");
    }
  }

  function compTwoTurn() {
    var currentSpace = $("#comp-two").parent().parent().attr("id");
    if (currentSpace == 4) {
      $("#choose-enrol").slideToggle("slow").css("display", "flex");
      $(".enrol-no").on("click", function () {
        $("#choose-enrol").fadeOut("slow");
        $(".roll-btn").trigger("click");
      });
    } else {
      $(".roll-btn").trigger("click");
    }
  }

  function compThreeTurn() {
    var currentSpace = $("#comp-three").parent().parent().attr("id");
    if (currentSpace == 4) {
      $("#choose-enrol").slideToggle("slow").css("display", "flex");
      $(".enrol-no").on("click", function () {
        $("#choose-enrol").fadeOut("slow");
        $(".roll-btn").trigger("click");
      });
    } else {
      $(".roll-btn").trigger("click");
    }
  }

  // Rolling Dice so it affects correct player. Eventually this should be auto number rolling for the computers.

  //   Button when next space moved into to pause the code before carrying on
  $(".carry-on-btn").on("click", function () {
    $(".new-space-info, .new-space-info-opp").fadeOut("slow");
    setTimeout(() => {
      turn = "Comp1";
      currTurn("Comp 1's turn now!");
      compOneTurn();
    }, 1000);
    $(".roll-btn").attr("disabled", true);
  });

  //   Dice Roll Button
  $(".roll-btn").on("click", function () {
    if (turn == "Player") {
      var currentSpace = $("#player-one").parent().parent().attr("id");
      var diceRoll = Math.floor(Math.random() * 6) + 1;

      $("#die-one").html(diceRoll);

      if ((covidRedundancy = true && diceRoll <= 4 && currentSpace == 13)) {
        setTimeout(() => {
          turn = "Comp1";
          currTurn("Comp 1's turn now!");
          compOneTurn();
        }, 1000);
        $(".roll-btn").attr("disabled", true);
        return;
      }

      if ((hacked = true && diceRoll >= 3 && currentSpace == 7)) {
        setTimeout(() => {
          turn = "Comp1";
          currTurn("Comp 1's turn now!");
          compOneTurn();
        }, 1000);
        $(".roll-btn").attr("disabled", true);
        return;
      }

      if (path == "inner-e" && currentSpace == 4) {
        currentSpace = $("#player-one").parent().parent().attr("id");
      } else if (path == "inner-e" && currentSpace != 4) {
        currentSpace = $("#player-one").parent().attr("id");
      } else if (path == "inner-e") {
        currentSpace = $("#player-one").parent().attr("id");
      }

      if (path == "inner-h" && currentSpace == 11) {
        currentSpace = $("#player-one").parent().parent().attr("id");
      } else if (path == "inner-h" && currentSpace != 11) {
        currentSpace = $("#player-one").parent().attr("id");
      } else if (path == "inner-h") {
        currentSpace = $("#player-one").parent().attr("id");
      }

      if (path == "inner-c" && currentSpace == 17) {
        currentSpace = $("#player-one").parent().parent().attr("id");
      } else if (path == "inner-c" && currentSpace != 17) {
        currentSpace = $("#player-one").parent().attr("id");
      } else if (path == "inner-c") {
        currentSpace = $("#player-one").parent().attr("id");
      }

      if (path == "inner-j" && currentSpace == 23) {
        currentSpace = $("#player-one").parent().parent().attr("id");
      } else if (path == "inner-j" && currentSpace != 23) {
        currentSpace = $("#player-one").parent().attr("id");
      } else if (path == "inner-j") {
        currentSpace = $("#player-one").parent().attr("id");
      }
      console.log(playerOppCards);
      console.log(currentSpace);
      var nextSpace = Number(currentSpace) + Number(diceRoll);

      console.log(nextSpace);

      if (path == "outer") {
        if (nextSpace > 24) {
          nextSpace = nextSpace - 24;
          currMoney = currMoney + currIncome;
          $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
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
      } else if (path == "inner-h" && currentSpace == 11) {
        nextSpace = nextSpace + 24;
        $("#player-one").remove();
        $("#" + nextSpace).append(playerOne);
      } else if (path == "inner-h" && nextSpace <= 43) {
        $("#player-one").remove();
        $("#" + nextSpace).append(playerOne);
      } else if (path == "inner-h" && nextSpace > 43) {
        nextSpace = nextSpace - 29;
        $("#player-one").remove();
        $("#" + nextSpace + ">div").append(playerOne);
        path = "outer";
      } else if (path == "inner-c" && currentSpace == 17) {
        nextSpace = nextSpace + 26;
        $("#player-one").remove();
        $("#" + nextSpace).append(playerOne);
      } else if (path == "inner-c" && nextSpace <= 50) {
        $("#player-one").remove();
        $("#" + nextSpace).append(playerOne);
      } else if (path == "inner-c" && nextSpace > 50) {
        nextSpace = nextSpace - 30;
        $("#player-one").remove();
        $("#" + nextSpace + ">div").append(playerOne);
        path = "outer";
      } else if (path == "inner-j" && currentSpace == 23) {
        nextSpace = nextSpace + 27;
        $("#player-one").remove();
        $("#" + nextSpace).append(playerOne);
      } else if (path == "inner-j" && nextSpace <= 59) {
        $("#player-one").remove();
        $("#" + nextSpace).append(playerOne);
      } else if (path == "inner-j" && nextSpace > 59) {
        nextSpace = nextSpace - 58;
        $("#player-one").remove();
        $("#" + nextSpace + ">div").append(playerOne);
        path = "outer";
      }
      if (
        nextSpace == 2 ||
        nextSpace == 5 ||
        nextSpace == 8 ||
        nextSpace == 10 ||
        nextSpace == 15 ||
        nextSpace == 18 ||
        nextSpace == 21 ||
        nextSpace == 24
      ) {
        setTimeout(() => {
          var randomOpp = Math.floor(Math.random() * oppCardArray.length);
          playerOppCards.push(oppCardArray[randomOpp]);
          console.log(randomOpp);
          $(".opp-cards").append(
            `<div class="player-opp-card${
              playerOppCards[playerOppCards.length - 1][0]
            }">${randomOpp}</div>`
          );
          $(".new-space-info-opp").slideToggle("slow").css("display", "flex");
          if (randomOpp == 0) {
            $(".new-space-info-opp p").html("Do you want to build a snowman?!");
            $(".opp-use-now-btn").on("click", function () {
              $(".new-space-info-opp").fadeOut("slow").css("display", "none");
              var oppCard = playerOppCards.length - 1;
              $("div").remove(`.player-opp-card${playerOppCards[oppCard][0]}`);

              $("#player-one").remove();
              $("#4>div").append(playerOne);
              setTimeout(() => {
                turn = "Comp1";
                currTurn("Comp 1's turn now!");
                compOneTurn();
              }, 1000);
              console.log(playerOppCards);
              playerOppCards.pop();
              $(".roll-btn").attr("disabled", true);
            });
          } else if (randomOpp == 1 || randomOpp == 2) {
            $(".new-space-info-opp p").html("You got an opportunity card!");
            $(".opp-use-now-btn").on("click", function () {
              $(".new-space-info-opp").fadeOut("slow").css("display", "none");
              var oppCard = playerOppCards.length - 1;
              $("div").remove(`.player-opp-card${playerOppCards[oppCard][0]}`);
              $("#player-one").remove();
              $("#11>div").append(playerOne);
              setTimeout(() => {
                turn = "Comp1";
                currTurn("Comp 1's turn now!");
                compOneTurn();
              }, 1000);
              console.log(playerOppCards);
              playerOppCards.pop();
              $(".roll-btn").attr("disabled", true);
            });
          } else if (randomOpp == 3 || randomOpp == 4) {
            $(".new-space-info-opp p").html("You got an opportunity card!");
            $(".opp-use-now-btn").on("click", function () {
              $(".new-space-info-opp").fadeOut("slow").css("display", "none");
              var oppCard = playerOppCards.length - 1;
              $("div").remove(`.player-opp-card${playerOppCards[oppCard][0]}`);

              $("#player-one").remove();
              $("#17>div").append(playerOne);
              setTimeout(() => {
                turn = "Comp1";
                currTurn("Comp 1's turn now!");
                compOneTurn();
              }, 1000);
              console.log(playerOppCards);
              playerOppCards.pop();
              $(".roll-btn").attr("disabled", true);
            });
          } else if (randomOpp == 5 || randomOpp == 6) {
            $(".new-space-info-opp p").html("You got an opportunity card!");
            $(".opp-use-now-btn").on("click", function () {
              $(".new-space-info-opp").fadeOut("slow").css("display", "none");
              var oppCard = playerOppCards.length - 1;
              $("div").remove(`.player-opp-card${playerOppCards[oppCard][0]}`);

              $("#player-one").remove();
              $("#23>div").append(playerOne);
              setTimeout(() => {
                turn = "Comp1";
                currTurn("Comp 1's turn now!");
                compOneTurn();
              }, 1000);
              console.log(playerOppCards);
              playerOppCards.pop();
              $(".roll-btn").attr("disabled", true);
            });
          } else if (randomOpp == 7) {
            $(".new-space-info-opp p").html("You got an opportunity card!");
            $(".opp-use-now-btn").on("click", function () {
              $(".new-space-info-opp").fadeOut("slow").css("display", "none");
              var oppCard = playerOppCards.length - 1;
              $("div").remove(`.player-opp-card${playerOppCards[oppCard][0]}`);
              $("#player-one").remove();
              $("#19>div").append(playerOne);
              setTimeout(() => {
                turn = "Comp1";
                currTurn("Comp 1's turn now!");
                compOneTurn();
              }, 1000);
              console.log(playerOppCards);
              playerOppCards.pop();
              $(".roll-btn").attr("disabled", true);
            });
          }
        }, 200);
      }

      if (
        nextSpace == 6 ||
        nextSpace == 12 ||
        nextSpace == 16 ||
        nextSpace == 20 ||
        nextSpace == 22
      ) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            "Space affect currently undefined so no information to show"
          );
          currMoney = currMoney * 0.9;
          $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
        }, 200);
      }

      if (nextSpace == 3) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            "TAXES! <br> If you income is less than £3000, pay 10%. If your income is £3001 - £9999, pay 50%, if your income is more than £10,000 pay 90% of one rounds income"
          );
          if (currIncome <= 3) {
            currMoney = currMoney - currIncome * 0.1;
            $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
          } else if (currIncome > 3 && currIncome < 10) {
            currMoney = currMoney - currIncome * 0.5;
            $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
          } else if (currIncome >= 10) {
            currMoney = currMoney - currIncome * 0.9;
            $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
          }
        }, 200);
      }

      if (nextSpace == 9) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            "New Tech! <br> Spend 1/4 of your cash on hand to update!"
          );
          currMoney = currMoney * 0.75;
          $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
        }, 200);
      }

      if (nextSpace == 14) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            "Fees Due <br>Pay 1/2 your annual income"
          );
          currMoney = currMoney - currIncome * 0.5;
          $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
        }, 200);
      }

      if (
        // Moving to inner route spaces and these will be addressed at the start of next turn.
        nextSpace == 4 ||
        nextSpace == 11 ||
        nextSpace == 17 ||
        nextSpace == 23 ||
        nextSpace == 19
      ) {
        setTimeout(() => {
          turn = "Comp1";
          currTurn("Comp 1's turn now!");
          compOneTurn();
        }, 1000);
        $(".roll-btn").attr("disabled", true);
      }

      if (nextSpace == 1) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `<h2>Pay Day!</h2>Get your income for passing here, but double if you land here!`
          );
          $(".space-view>div").css("background-color", "#36adab");
          currMoney = currMoney + currIncome;
          $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
        }, 200);
      }

      if (nextSpace == 7) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `<h2>HACKED!</h2>Roll 2 or less, or pay ½ cash to move.`
          );
          $(".space-view>div").css("background-color", "#36adab");
          //   Need to put payment option in here!
          hacked = true;
        }, 200);
      }

      if (nextSpace == 13) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `<h2>COVID Redundancy!</h2>Roll 5 or more, or pay ½ cash to move.`
          );
          $(".space-view>div").css("background-color", "#36adab");
          //   Need to put payment option in here!
          covidRedundancy = true;
        }, 200);
      }

      // Actions for Enroll section of board spaces
      if (nextSpace == 25) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            "Changing Career - Draw one Experience Card"
          );
          var randomExp = Math.floor(Math.random() * expCardArray.length);
          playerExpCards.push(expCardArray[randomExp]);
          console.log(randomExp);
          $(".exp-cards").append(
            `<div class="player-exp-card${
              playerExpCards[playerExpCards.length - 1][0]
            }">${randomExp}</div>`
          );
          return;
        }, 200);
      }

      if (nextSpace == 26) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Make a friend with someone on the course - Gain 2 <i class="fas fa-heart"></i>'s `
          );
          currHappy = currHappy + 2;
          $(".current-heart").html(
            "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
          );
          return;
        }, 200);
      }

      if (nextSpace == 27) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(`Plagiarism!! - Go straight to Hacked!`);
          $("#player-one").remove();
          $("#7>div").append(playerOne);
          path = "outer";
          hacked = true;
          return;
        }, 200);
      }

      if (nextSpace == 28) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Start the course during a special offer time - Draw 2 opportunity cards`
          );
          var randomOpp = Math.floor(Math.random() * oppCardArray.length);
          playerOppCards.push(oppCardArray[randomOpp]);
          console.log(randomOpp);
          $(".opp-cards").append(
            `<div class="player-opp-card${
              playerOppCards[playerOppCards.length - 1][0]
            }">${randomOpp}</div>`
          );
          var randomOpp = Math.floor(Math.random() * oppCardArray.length);
          playerOppCards.push(oppCardArray[randomOpp]);
          console.log(randomOpp);
          $(".opp-cards").append(
            `<div class="player-opp-card${
              playerOppCards[playerOppCards.length - 1][0]
            }">${randomOpp}</div>`
          );
          return;
        }, 200);
      }

      if (nextSpace == 29) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html("Your new mentor is cute");
          currHappy = currHappy + 4;
          $(".current-heart").html(
            "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
          );
          return;
        }, 200);
      }

      if (nextSpace == 30) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Support from careers team to help you decide the best route for you - Gain 2 <i class="fas fa-heart"></i>'s `
          );
          currHappy = currHappy + 2;
          $(".current-heart").html(
            "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
          );
          return;
        }, 200);
      }

      if (nextSpace == 31) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            "COVID course support - Your income increases by £500"
          );
          currIncome = currIncome + 0.5;
          $(".current-income").html("Income: £" + currIncome * 1000);
          return;
        }, 200);
      }

      if (nextSpace == 32) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            "Over prepare by buying 3 new monitors - Lose 1/2 your cash on hand"
          );
          currMoney = currMoney * 0.5;
          $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
          return;
        }, 200);
      }

      if (nextSpace == 33) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            "A Company supportsyour course and help you with finance - Get £2000"
          );
          currMoney = currMoney + 2;
          $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
          return;
        }, 200);
      }

      if (nextSpace == 34) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            "Join a career support conference on Zoom"
          );
          currHappy = currHappy + 2;
          $(".current-heart").html(
            "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
          );
          return;
        }, 200);
      }

      if (nextSpace == 35) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Happily get enrolled with great support and lots of learning - Income up £500 and draw 2 Experience cards`
          );
          currIncome = currIncome + 0.5;
          $(".current-income").html("Income: £" + currIncome * 1000);
          var randomExp = Math.floor(Math.random() * expCardArray.length);
          playerExpCards.push(expCardArray[randomExp]);
          console.log(randomExp);
          $(".exp-cards").append(
            `<div class="player-exp-card${
              playerExpCards[playerExpCards.length - 1][0]
            }">${randomExp}</div>`
          );
          var randomExp = Math.floor(Math.random() * expCardArray.length);
          playerExpCards.push(expCardArray[randomExp]);
          console.log(randomExp);
          $(".exp-cards").append(
            `<div class="player-exp-card${
              playerExpCards[playerExpCards.length - 1][0]
            }">${randomExp}</div>`
          );
          return;
        }, 200);
      }

      // Actions for HTML section of board spaces

      if (nextSpace == 40) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            "Space affect currently undefined so no information to show"
          );
          currFollow = currFollow + 1;
          $(".current-star").html(
            "Fame: " + currFollow + '<i class="fas fa-star"></i>'
          );
          return;
        }, 200);
      }

      if (nextSpace == 36) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(`..........draw 1 experience card`);
          var randomExp = Math.floor(Math.random() * expCardArray.length);
          playerExpCards.push(expCardArray[randomExp]);
          console.log(randomExp);
          $(".exp-cards").append(
            `<div class="player-exp-card${
              playerExpCards[playerExpCards.length - 1][0]
            }">${randomExp}</div>`
          );
          return;
        }, 200);
      }

      if (nextSpace == 37) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Make and awesome Email layout for a friends company - Gain 3 <i class="fas fa-heart"></i>'s `
          );
          currHappy = currHappy + 3;
          $(".current-heart").html(
            "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
          );
          return;
        }, 200);
      }

      if (nextSpace == 38) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Break down trying to figure it out! - Lose 1/2 your <i class="fas fa-heart"></i>'s `
          );
          currHappy = Math.ceil(currHappy * 0.5);
          $(".current-heart").html(
            "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
          );
          return;
        }, 200);
      }

      if (nextSpace == 39) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html("..............income up £1000");
          currIncome = currIncome + 1;
          $(".current-income").html("Income: £" + currIncome * 1000);
          return;
        }, 200);
      }

      if (nextSpace == 41) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Watch Youtube and learn some new tricks - Gain 2 <i class="fas fa-heart"></i>'s and draw 1 experience card `
          );
          currHappy = currHappy + 2;
          $(".current-heart").html(
            "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
          );
          var randomExp = Math.floor(Math.random() * expCardArray.length);
          playerExpCards.push(expCardArray[randomExp]);
          console.log(randomExp);
          $(".exp-cards").append(
            `<div class="player-exp-card${
              playerExpCards[playerExpCards.length - 1][0]
            }">${randomExp}</div>`
          );
          return;
        }, 200);
      }

      if (nextSpace == 42) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Complete the module quickly with no issues -Gain 2 <i class="fas fa-heart"></i>'s`
          );
          currHappy = currHappy + 2;
          $(".current-heart").html(
            "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
          );
          return;
        }, 200);
      }

      if (nextSpace == 43) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Help another student on slack with a problem and get noticed - Gain 2 <i class="fas fa-star"></i>'s `
          );
          currFollow = currFollow + 2;
          $(".current-star").html(
            "Fame: " + currFollow + '<i class="fas fa-star"></i>'
          );
          return;
        }, 200);
      }

      // Actions for CSS section of board spaces

      if (nextSpace == 45 || nextSpace == 48) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            "Space affect currently undefined so no information to show"
          );
          currFollow = currFollow + 1;
          $(".current-star").html(
            "Fame: " + currFollow + '<i class="fas fa-star"></i>'
          );
          return;
        }, 200);
      }

      if (nextSpace == 44) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Bootstrap genius! - Gain 2 <i class="fas fa-star"></i>'s, 3 <i class="fas fa-heart"></i>'s and increase your income by £500 `
          );
          currFollow = currFollow + 2;
          currHappy = currHappy + 3;
          currIncome = currIncome + 0.5;
          $(".current-star").html(
            "Fame: " + currFollow + '<i class="fas fa-star"></i>'
          );
          $(".current-heart").html(
            "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
          );
          $(".current-income").html("Income: £" + currIncome * 1000);
          return;
        }, 200);
      }

      if (nextSpace == 46) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Do some freelance projects for friends - Gain 3 <i class="fas fa-star"></i>'s and increase your income by £1000`
          );
          currFollow = currFollow + 3;
          currIncome = currIncome + 1;
          $(".current-star").html(
            "Fame: " + currFollow + '<i class="fas fa-star"></i>'
          );
          $(".current-income").html("Income: £" + currIncome * 1000);
          return;
        }, 200);
      }

      if (nextSpace == 47) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Project is noticed by people - Gain 3 <i class="fas fa-star"></i>'s`
          );
          currFollow = currFollow + 3;
          $(".current-star").html(
            "Fame: " + currFollow + '<i class="fas fa-star"></i>'
          );
          return;
        }, 200);
      }

      if (nextSpace == 49) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Learn some cool tricks for styling from course members on slack - Gain 4 <i class="fas fa-heart"></i>'s `
          );
          currHappy = currHappy + 4;
          $(".current-heart").html(
            "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
          );
          return;
        }, 200);
      }

      if (nextSpace == 50) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Get 90% on your project! - Gain 2 <i class="fas fa-star"></i>'s and 5 <i class="fas fa-heart"></i>'s `
          );
          currFollow = currFollow + 2;
          currHappy = currHappy + 5;
          $(".current-star").html(
            "Fame: " + currFollow + '<i class="fas fa-star"></i>'
          );
          $(".current-heart").html(
            "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
          );
          return;
        }, 200);
      }

      // Actions for JavaScript section of board Spaces

      if (nextSpace == 51) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            "Space affect currently undefined so no information to show"
          );
          currFollow = currFollow + 1;
          $(".current-star").html(
            "Fame: " + currFollow + '<i class="fas fa-star"></i>'
          );
          return;
        }, 200);
      }

      if (nextSpace == 52) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Skills from a previous job help make something awesome! - Gain 2 <i class="fas fa-star"></i>'s and 4 <i class="fas fa-heart"></i>'s`
          );
          currFollow = currFollow + 2;
          currHappy = currHappy + 4;
          $(".current-star").html(
            "Fame: " + currFollow + '<i class="fas fa-star"></i>'
          );
          $(".current-heart").html(
            "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
          );
          return;
        }, 200);
      }

      if (nextSpace == 53) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(`.......Draw 2 Experience Cards`);
          var randomExp = Math.floor(Math.random() * expCardArray.length);
          playerExpCards.push(expCardArray[randomExp]);
          console.log(randomExp);
          $(".exp-cards").append(
            `<div class="player-exp-card${
              playerExpCards[playerExpCards.length - 1][0]
            }">${randomExp}</div>`
          );
          var randomExp = Math.floor(Math.random() * expCardArray.length);
          playerExpCards.push(expCardArray[randomExp]);
          console.log(randomExp);
          $(".exp-cards").append(
            `<div class="player-exp-card${
              playerExpCards[playerExpCards.length - 1][0]
            }">${randomExp}</div>`
          );
          return;
        }, 200);
      }

      if (nextSpace == 54) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Job opportunity as your project is noticed - Increase your income by £1000 and gain 4 <i class="fas fa-star"></i>'s`
          );
          currFollow = currFollow + 4;
          currIncome = currIncome + 1;
          $(".current-star").html(
            "Fame: " + currFollow + '<i class="fas fa-star"></i>'
          );
          $(".current-income").html("Income: £" + currIncome * 1000);
          return;
        }, 200);
      }

      if (nextSpace == 55) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `.................- Draw 2 opportunity cards`
          );
          var randomOpp = Math.floor(Math.random() * oppCardArray.length);
          playerOppCards.push(oppCardArray[randomOpp]);
          console.log(randomOpp);
          $(".opp-cards").append(
            `<div class="player-opp-card${
              playerOppCards[playerOppCards.length - 1][0]
            }">${randomOpp}</div>`
          );
          var randomOpp = Math.floor(Math.random() * oppCardArray.length);
          playerOppCards.push(oppCardArray[randomOpp]);
          console.log(randomOpp);
          $(".opp-cards").append(
            `<div class="player-opp-card${
              playerOppCards[playerOppCards.length - 1][0]
            }">${randomOpp}</div>`
          );
          return;
        }, 200);
      }

      if (nextSpace == 56) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Forget that you are rubbish at maths and can't do it! - Lose 1/2 your <i class="fas fa-heart"></i>'s `
          );
          currHappy = Math.ceil(currHappy * 0.5);
          $(".current-heart").html(
            "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
          );
          return;
        }, 200);
      }

      if (nextSpace == 57) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            "Javascript app you make gets sold on app store - Earn £10,000"
          );
          currMoney = currMoney + 10;
          $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
          return;
        }, 200);
      }

      if (nextSpace == 58) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Build something that is usable by other people easily - Gain 4 <i class="fas fa-star"></i>'s`
          );
          currFollow = currFollow + 4;
          $(".current-star").html(
            "Fame: " + currFollow + '<i class="fas fa-star"></i>'
          );
          return;
        }, 200);
      }

      if (nextSpace == 59) {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Finish the course sucessfully! - Gain 5 <i class="fas fa-star"></i>'s, 5 <i class="fas fa-heart"></i>'s and increase your income by £2000 `
          );
          currFollow = currFollow + 5;
          currHappy = currHappy + 5;
          currIncome = currIncome + 2;
          $(".current-star").html(
            "Fame: " + currFollow + '<i class="fas fa-star"></i>'
          );
          $(".current-heart").html(
            "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
          );
          $(".current-income").html("Income: £" + currIncome * 1000);
          return;
        }, 200);
      }
    } else if (turn == "Comp1") {
      var diceRoll = Math.floor(Math.random() * 6) + 1;
      // use .this instead of the player and create an array of the players!
      var currentSpace = $("#comp-one").parent().parent().attr("id");
      var nextSpace = Number(currentSpace) + Number(diceRoll);

      $("#die-one").html(diceRoll);
      if (nextSpace > 24) {
        nextSpace = nextSpace - 24;
        currMoneyC1 = currMoneyC1 + currIncomeC1;
        $(".comp-one-dollar").html("Money: £" + currMoneyC1.toFixed(2) * 1000);
      }
      $("#comp-one").remove();
      setTimeout(() => {
        $("#" + nextSpace + ">div").append(compOne);
      }, 300);
      setTimeout(() => {
        turn = "Comp2";
        currTurn("Comp 2's turn now!");
        compTwoTurn();
      }, 2000);
    } else if (turn == "Comp2") {
      var diceRoll = Math.floor(Math.random() * 6) + 1;
      // use .this instead of the player and create an array of the players!
      var currentSpace = $("#comp-two").parent().parent().attr("id");
      var nextSpace = Number(currentSpace) + Number(diceRoll);

      $("#die-one").html(diceRoll);
      if (nextSpace > 24) {
        nextSpace = nextSpace - 24;
        currMoneyC2 = currMoneyC2 + currIncomeC2;
        $(".comp-two-dollar").html("Money: £" + currMoneyC2.toFixed(2) * 1000);
      }
      $("#comp-two").remove();
      setTimeout(() => {
        $("#" + nextSpace + ">div").append(compTwo);
      }, 300);
      setTimeout(() => {
        turn = "Comp3";
        currTurn("Comp 3's turn now!");
        compThreeTurn();
      }, 2000);
    } else if (turn == "Comp3") {
      var diceRoll = Math.floor(Math.random() * 6) + 1;
      // use .this instead of the player and create an array of the players!
      var currentSpace = $("#comp-three").parent().parent().attr("id");
      var nextSpace = Number(currentSpace) + Number(diceRoll);

      $("#die-one").html(diceRoll);
      if (nextSpace > 24) {
        nextSpace = nextSpace - 24;
        currMoneyC3 = currMoneyC3 + currIncomeC3;
        $(".comp-three-dollar").html(
          "Money: £" + currMoneyC3.toFixed(2) * 1000
        );
      }
      $("#comp-three").remove();
      setTimeout(() => {
        $("#" + nextSpace + ">div").append(compThree);
      }, 300);
      setTimeout(() => {
        turn = "Player";
        currTurn("Players turn now!");
        playerOneTurn();
      }, 1000);
    }
  });
}); // keep this as it closes full statement
