//------------------Global Variables----------------//

// I did have a document ready function in here to handle and put all the JS together, but these variables need to be used accross all Javascript sheets so they need to load first and be accesiable

// constant variables that make the counters move between squares
const playerOne = '<div id="player-one">1</div>';
const compOne = '<div id="comp-one">C1</div>';
const compTwo = '<div id="comp-two">C2</div>';
const compThree = '<div id="comp-three">C3</div>';

let turn = "";
let path = "outer";

let gameWon = false;
let missTurn = false;
let covidRedundancy = false;
let hacked = false;
let paid = false;
let paidCovid = false;
let stay = false;

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

// This was a button to refresh the game back to normal - was used for testing but now used when someone wins to reset
$(".reset-btn").on("click", function () {
  location.reload();
});

//---------------------Start Up--------------------//

// Players and computers seperated for testing and can start player on a different square. Dice roll button is disabled normally to stop someone pressing it over and over while they shouldnt.
$("#1>div").append(compOne, compTwo, compThree);
$("#11>div").append(playerOne);
$(".roll-btn").attr("disabled", true);

// Skip Button use during testing to go past the rules and straight to the game - Take this out before submission
$(".skip-btn").click(function () {
  $("#game-start").fadeOut("slow");
  setTurn();
});

// Buttons during game intro to move to hide the current window and more to the next
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

// Checking to see if form inputs for succession formula equal 60, stops if it doesnt else moves to the game and populates the target elements on the score board
$(".next-btn").click(function () {
  if (
    Number($(".fame").val()) +
      Number($(".happiness").val()) +
      Number($(".money").val()) !=
    60
  ) {
    $(".check-message").html("Your formula doesnt equal 60!");
    return;
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

  //   Time outs used a lot throughout the game. This makes everything flow a bit better at a pace of a board game rather than instantly doing everything and not letting the player see whats happening
  setTimeout(() => {
    setTurn();
  }, 500);
});



// Setting the currnt scores for all the players -  These are used throughout to update the scores.
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

// Array of possible cards that can be got. a number from the array is taken at random and then added to the players blank array.
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

let oppCardObject = {
    1: "Enrol",
    2: "HTML",
    3: "CSS",
    4: "JavaScript"
};

let playerOppCardsObj = {};

playerOppCards = [];

// Gameplay Choose Card - clicking on the Opportunity shows you what cards you have and what they do.
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

//---------------------Game Play--------------------//

function playerOneTurn() {
  moneyCheck();

  winCheck();

  missTurnCheck();

  $(".roll-btn").removeAttr("disabled");

  $(".player-turn-notice")
    .removeAttr("style")
    .animate({ left: "-=73%" }, 500)
    .delay(1000)
    .animate({ left: "-=100%" }, 500);

  currentSpaceCheck();
}

function compOneTurn() {
  let currentSpaceC1 = $("#comp-one").parent().parent().attr("id");
  if (currentSpaceC1 == 4) {
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
  let currentSpaceC2 = $("#comp-two").parent().parent().attr("id");
  if (currentSpaceC2 == 4) {
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
  let currentSpaceC3 = $("#comp-three").parent().parent().attr("id");
  if (currentSpaceC3 == 4) {
    $("#choose-enrol").slideToggle("slow").css("display", "flex");
    $(".enrol-no").on("click", function () {
      $("#choose-enrol").fadeOut("slow");
      $(".roll-btn").trigger("click");
    });
  } else {
    $(".roll-btn").trigger("click");
  }
}

//   After the Dice is rolled and the player moves, there will be a screen that pops up explaining what it happening on that square and if the player needs to do anything. This button closes this and carries on with the game, moving to the next players turn.
$(".carry-on-btn").on("click", function () {
  $(".new-space-info, .new-space-info-opp, .new-space-info-dice").fadeOut(
    "slow"
  );
  if (currMoney < 0) {
    currMoney = 0;
    $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
  }
  setTimeout(() => {
    turn = "Comp1";
    currTurn("Comp 1's turn now!");
    compOneTurn();
  }, 1000);
  $(".roll-btn").attr("disabled", true);
});

// Square 19 has an option to stay if the roll is less than 3 to gain more happiness. The player can choose to stay if the roll is < 3 or just press Ok and move as normal next turn
$(".stay-btn").on("click", function () {
  stay = true;
  $(".stay-btn").css("display", "none");
  $(".new-space-info, .new-space-info-opp, .new-space-info-dice").fadeOut(
    "slow"
  );
  setTimeout(() => {
    turn = "Comp1";
    currTurn("Comp 1's turn now!");
    compOneTurn();
  }, 1000);
});

//   Dice Roll. this is the main part of the game and the roll of the dice affects a lot of things (Will explain going down this code)
$(".roll-btn").on("click", function () {
  if (turn == "Player") {
    let currentSpace = $("#player-one").parent().parent().attr("id");
    let diceRoll = 1;
    //  Math.floor(Math.random() * 6) + 1;
    $("#die-one").html(diceRoll);
    
    // Space 7 needs 1 or 2 to move, if the dice roll isnt that, then it moves to the next player
    if (hacked == true && diceRoll >= 3 && currentSpace == 7) {
      outerNextPlayer();
      return;
    }

    // Space 13 needs 5 or 6 to move, if the dice roll isnt that, then it moves to the next player
    if (covidRedundancy == true && diceRoll <= 4 && currentSpace == 13) {
      outerNextPlayer();
      return;
    } 

    // Space 19 allows you to stay and gain more happiness if the dice roll is 3 or less
    if (stay == true && diceRoll <= 3 && currentSpace == 19) {
      currHappy = currHappy + 2;
      $(".current-heart").html(
        "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
      );
      outerNextPlayer();
      return;
    }

    //  Spaces 4,11,17 and 23 might have you moving inside the board. This changes a variable and the squares have less html elements. Depending if they are moving in or staying out, the path to get the current space ID is different.
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

    // This is where the id's of the spaces comes into play. The maths elements of JavaScript mean that taking the ID (a number) and adding the Dice Roll (a number), it can be determined what square is the next one to move to. 
    let nextSpace = Number(currentSpace) + Number(diceRoll);


    // The player will be moving in and out of the paths. The numbers on the outside go 1 - 24 so there is part of this function that adjusts the number to allow continuous movement. The rest of the code here deals with moving in and out of the centre paths. these range from 25 to 59 and so the numbers will often move from a high number to a low number or vice versa. This maths needed to be put in place to be able to move to the right space. See README for testing on how this was looked after. 
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
    } else if (path == "inner-c" && nextSpace > 50 && nextSpace < 55) {
      nextSpace = nextSpace - 30;
      $("#player-one").remove();
      $("#" + nextSpace + ">div").append(playerOne);
      path = "outer";
    } else if (path == "inner-c" && nextSpace >= 55) {
      nextSpace = nextSpace - 54;
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

    // This section deals with what happens on squares when you land on them. Most squares do different things so will have different functions. Most of the functions have been transferred to other helper java pages to keep the code tidy.
    // These spaces are for when you land on a space that gets you an Opportunity Card and the function is the same for them all.
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

    if (nextSpace == 6 || nextSpace == 20 || nextSpace == 22) {
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

    if (nextSpace == 16) {
      outerSixteen();
    }

    if (
      // Moving to inner route spaces dont have a pop up screen and these will be addressed at the start of next turn, so moves straight to the next player.
      nextSpace == 4 ||
      nextSpace == 11 ||
      nextSpace == 17 ||
      nextSpace == 23
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

    if (nextSpace == 19) {
      outerNineteen();
    }

    // These functions cover the Enrollment inner section of the board
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

    // These functions cover the HTML inner section of the board

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

    // These functions cover the CSS inner section of the board

    if (nextSpace == 45) {
      innerCSSTwo();
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

    // These functions cover the JavaScript inner section of the board

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


    // Computers turns - Would be nice to be able to do some more things to these tonight!
  } else if (turn == "Comp1") {
    var diceRollC1 = Math.floor(Math.random() * 6) + 1;
    // use .this instead of the player and create an array of the players!
    var currentSpaceC1 = $("#comp-one").parent().parent().attr("id");
    var nextSpaceC1 = Number(currentSpaceC1) + Number(diceRollC1);

    $("#die-one").html(diceRollC1);
    if (nextSpaceC1 > 24) {
      nextSpaceC1 = nextSpaceC1 - 24;
      currMoneyC1 = currMoneyC1 + currIncomeC1;
      $(".comp-one-dollar").html("Money: £" + currMoneyC1.toFixed(2) * 1000);
    }
    $("#comp-one").remove();
    setTimeout(() => {
      $("#" + nextSpaceC1 + ">div").append(compOne);
    }, 300);
    setTimeout(() => {
      turn = "Comp2";
      currTurn("Comp 2's turn now!");
      compTwoTurn();
    }, 2000);
  } else if (turn == "Comp2") {
    var diceRollC2 = Math.floor(Math.random() * 6) + 1;
    // use .this instead of the player and create an array of the players!
    var currentSpaceC2 = $("#comp-two").parent().parent().attr("id");
    var nextSpaceC2 = Number(currentSpaceC2) + Number(diceRollC2);

    $("#die-one").html(diceRollC2);
    if (nextSpaceC2 > 24) {
      nextSpaceC2 = nextSpaceC2 - 24;
      currMoneyC2 = currMoneyC2 + currIncomeC2;
      $(".comp-two-dollar").html("Money: £" + currMoneyC2.toFixed(2) * 1000);
    }
    $("#comp-two").remove();
    setTimeout(() => {
      $("#" + nextSpaceC2 + ">div").append(compTwo);
    }, 300);
    setTimeout(() => {
      turn = "Comp3";
      currTurn("Comp 3's turn now!");
      compThreeTurn();
    }, 2000);
  } else if (turn == "Comp3") {
    var diceRollC3 = Math.floor(Math.random() * 6) + 1;
    // use .this instead of the player and create an array of the players!
    var currentSpaceC3 = $("#comp-three").parent().parent().attr("id");
    var nextSpaceC3 = Number(currentSpaceC3) + Number(diceRollC3);

    $("#die-one").html(diceRollC3);
    if (nextSpaceC3 > 24) {
      nextSpaceC3 = nextSpaceC3 - 24;
      currMoneyC3 = currMoneyC3 + currIncomeC3;
      $(".comp-three-dollar").html("Money: £" + currMoneyC3.toFixed(2) * 1000);
    }
    $("#comp-three").remove();
    setTimeout(() => {
      $("#" + nextSpaceC3 + ">div").append(compThree);
    }, 300);
    setTimeout(() => {
      turn = "Player";
      currTurn("Players turn now!");
      playerOneTurn();
    }, 1000);
  }
});
