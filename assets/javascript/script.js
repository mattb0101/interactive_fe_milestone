//------------------Global Variables----------------//

const playerOne = '<div id="player-one">1</div>';
const compOne = '<div id="comp-one">C1</div>';
const compTwo = '<div id="comp-two">C2</div>';
const compThree = '<div id="comp-three">C3</div>';
let turn = "";
let path = "outer";

let gameWon = 0;
let missTurn = false;
let covidRedundancy = false;
let hacked = false;
let paid = false;
let paidCovid = false;

let currFollow = 0;
let currHappy = 0;
let currMoney = 1;
let currIncome = 1;

let currFollowC1 = 0;
let currHappyC1 = 0;
let currMoneyC1 = 1;
let currIncomeC1 = 1;

let currFollowC2 = 0;
let currHappyC2 = 0;
let currMoneyC2 = 1;
let currIncomeC2 = 1;

let currFollowC3 = 0;
let currHappyC3 = 0;
let currMoneyC3 = 1;
let currIncomeC3 = 1;

function currTurn(x) {
  return $(".current-turn").text(x);
}

// $(document).ready(function () {

//---------------------Start Up--------------------//

$(".reset-btn").on("click", function () {
  location.reload();
});

$("#1>div").append(compOne, compTwo, compThree);
$("#11>div").append(playerOne);
$(".roll-btn").attr("disabled", true);

$(".skip-btn").click(function () {
  $("#game-start").fadeOut("slow");
  setTurn();
});

$(".play-btn").click(function () {
  $("#intro-content").slideToggle("slow", function () {
    $("#rules").slideToggle("slow").css("display", "flex");
  });
});

$(".go-btn").click(function () {
  $("#rules").slideToggle("slow", function () {
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
    $("#game-start").fadeOut("slow");
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
$(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
$(".current-heart").html(
  "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
);
$(".current-income").html("Income: £" + currIncome * 1000);

$(".comp-one-star").html(
  "Followers: " + currFollowC1 + '<i class="fas fa-star"></i>'
);
$(".comp-one-dollar").html("Money: £" + currMoneyC1.toFixed(2) * 1000);
$(".comp-one-heart").html(
  "Happiness: " + currHappyC1 + ' <i class="fas fa-heart"></i>'
);
$(".comp-one-income").html("Income: £" + currIncomeC1 * 1000);

$(".comp-two-star").html(
  "Followers: " + currFollowC2 + '<i class="fas fa-star"></i>'
);
$(".comp-two-dollar").html("Money: £" + currMoneyC2.toFixed(2) * 1000);
$(".comp-two-heart").html(
  "Happiness: " + currHappyC2 + ' <i class="fas fa-heart"></i>'
);
$(".comp-two-income").html("Income: £" + currIncomeC2 * 1000);

$(".comp-three-star").html(
  "Followers: " + currFollowC3 + '<i class="fas fa-star"></i>'
);
$(".comp-three-dollar").html("Money: £" + currMoneyC3.toFixed(2) * 1000);
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

// Gameplay Choose Card
$(".opp-cards").on("click", function () {
  $("#opp-cards-container").slideToggle("slow").css("display", "flex");
});

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
      $("#game-start").css({
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

  if (missTurn == true) {
    $(".player-turn-notice>h1").html("Miss Turn");
    $(".player-turn-notice")
      .removeAttr("style")
      .animate({ left: "-=73%" }, 500)
      .delay(1000)
      .animate({ left: "-=100%" }, 500);
    setTimeout(() => {
      outerNextPlayer();
    }, 1000);
    missTurn = false;
    return;
  } else {
    $(".player-turn-notice>h1").html("Your turn!");
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
    paidCovid = false;
  }

  if (currentSpace != 7) {
    hacked = false;
    paid = false;
  }

  if (currentSpace == 7) {
    $(".pay-btn").removeAttr("disabled");
    $(".pay-btn").on("click", function () {
      currMoney = currMoney - currIncome * 0.5;
      $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
      $(".pay-btn").attr("disabled", true);
      hacked = false;
      paid = true;
    });
  }

  if (currentSpace == 13) {
    $(".pay-btn").removeAttr("disabled");
    $(".pay-btn").on("click", function () {
      currMoney = currMoney - currIncome * 0.5;
      $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
      $(".pay-btn").attr("disabled", true);
      covidRedundancy = false;
      paidCovid = true;
    });
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
  $(".new-space-info, .new-space-info-opp, .new-space-info-dice").fadeOut("slow");
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
    var diceRoll = 1;
    // Math.floor(Math.random() * 6) + 1;

    $("#die-one").html(diceRoll);

    if ((covidRedundancy == true && diceRoll <= 4 && currentSpace == 13)) {
      outerNextPlayer();
      return;
    }

    if ((hacked == true && diceRoll >= 3 && currentSpace == 7 )) {
      outerNextPlayer();
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

    var nextSpace = Number(currentSpace) + Number(diceRoll);

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
      outerOppCard();
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
      outerThree();
    }

     if (nextSpace == 12) {
      outerTwelve();
    }

    if (nextSpace == 9) {
      outerNine();
    }

    if (nextSpace == 14) {
      outerFourteen();
    }

    if (
      // Moving to inner route spaces and these will be addressed at the start of next turn.
      nextSpace == 4 ||
      nextSpace == 11 ||
      nextSpace == 17 ||
      nextSpace == 23 ||
      nextSpace == 19
    ) {
      outerNextPlayer();
    }

    if (nextSpace == 1) {
      outerOne();
    }

    if (nextSpace == 7) {
      outerSeven();
    }

    if (nextSpace == 13) {
      outerThirteen();
    }

    // Actions for Enroll section of board spaces
    if (nextSpace == 25) {
      innerEnrolOne();
    }

    if (nextSpace == 26) {
      innerEnrolTwo();
    }

    if (nextSpace == 27) {
      innerEnrolThree();
    }

    if (nextSpace == 28) {
      innerEnrolFour();
    }

    if (nextSpace == 29) {
      innerEnrolFive();
    }

    if (nextSpace == 30) {
      innerEnrolSix();
    }

    if (nextSpace == 31) {
      innerEnrolSeven();
    }

    if (nextSpace == 32) {
      innerEnrolEight();
    }

    if (nextSpace == 33) {
      innerEnrolNine();
    }

    if (nextSpace == 34) {
      innerEnrolTen();
    }

    if (nextSpace == 35) {
      innerEnrolEleven();
    }

    // Actions for HTML section of board spaces

    if (nextSpace == 36) {
      innerHTMLOne();
    }

    if (nextSpace == 37) {
      innerHTMLTwo();
    }

    if (nextSpace == 38) {
      innerHTMLThree();
    }

    if (nextSpace == 39) {
      innerHTMLFour();
    }

    if (nextSpace == 40) {
      innerHTMLFive();
    }

    if (nextSpace == 41) {
      innerHTMLSix();
    }

    if (nextSpace == 42) {
      innerHTMLSeven();
    }

    if (nextSpace == 43) {
      innerHTMLEight();
    }

    // Actions for CSS section of board spaces

    if (nextSpace == 45) {
      innnerCSSTwo();
    }

    if (nextSpace == 44) {
      innerCSSOne();
    }

    if (nextSpace == 46) {
      innerCSSThree();
    }

    if (nextSpace == 47) {
      innerCSSFour();
    }

    if (nextSpace == 48) {
      innerCSSSeven();
    }

    if (nextSpace == 49) {
      innerCSSFive();
    }

    if (nextSpace == 50) {
      innerCSSSix();
    }

    // Actions for JavaScript section of board Spaces

    if (nextSpace == 51) {
      innerJavaScriptOne();
    }

    if (nextSpace == 52) {
      innerJavaScriptTwo();
    }

    if (nextSpace == 53) {
      innerJavaScriptThree();
    }

    if (nextSpace == 54) {
      innerJavaScriptFour();
    }

    if (nextSpace == 55) {
      innerJavaScriptFive();
    }

    if (nextSpace == 56) {
      innerJavaScriptSix();
    }

    if (nextSpace == 57) {
      innerJavaScriptSeven();
    }

    if (nextSpace == 58) {
      innerJavaScriptEight();
    }

    if (nextSpace == 59) {
      innerJavaScriptNine();
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
      $(".comp-three-dollar").html("Money: £" + currMoneyC3.toFixed(2) * 1000);
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
// }); // keep this as it closes full statement
