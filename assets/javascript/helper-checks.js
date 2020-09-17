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
      gameWon = true;
    }
  }
}

function moneyCheck() {
    if (currMoney < 0){
     currMoney = 0;
     $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
 }
}

function missTurnCheck() {
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
}

function currentSpaceCheck() {
    let currentSpace = $("#player-one").parent().parent().attr("id");
    if (currentSpace != 13) {
    covidRedundancy = false;
    paidCovid = false;
  } 
  
  if (currentSpace != 7) {
    hacked = false;
    paid = false;
  }
  if (currentSpace != 19) {
    stay = false;
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
      $("#choose-enrol").slideToggle("slow").css("display", "flex");
      $(".enrol-no").on("click", function () {
        $(".roll-btn").removeAttr("disabled");
        $("#choose-enrol").fadeOut("slow");
      });
      $(".enrol-yes").on("click", function () {
        $(".roll-btn").removeAttr("disabled");
        $("#choose-enrol").fadeOut("slow").css("display", "none");
        path = "inner-e";
      });
    }, 1750);
  }
  if (currentSpace == 11) {
    setTimeout(() => {
      $("#choose-html").slideToggle("slow").css("display", "flex");
      $(".html-no").on("click", function () {
        $(".roll-btn").removeAttr("disabled");
        $("#choose-html").fadeOut("slow");
      });
      $(".html-yes").on("click", function () {
        $(".roll-btn").removeAttr("disabled");
        $("#choose-html").fadeOut("slow").css("display", "none");
        path = "inner-h";
      });
    }, 1750);
  }
  if (currentSpace == 17) {
    setTimeout(() => {
      $("#choose-css").slideToggle("slow").css("display", "flex");
      $(".css-no").on("click", function () {
        $(".roll-btn").removeAttr("disabled");
        $("#choose-css").fadeOut("slow");
      });
      $(".css-yes").on("click", function () {
        $(".roll-btn").removeAttr("disabled");
        $("#choose-css").fadeOut("slow").css("display", "none");
        path = "inner-c";
      });
    }, 1750);
  }
  if (currentSpace == 23) {
    setTimeout(() => {
      $("#choose-javascript").slideToggle("slow").css("display", "flex");
      $(".javascript-no").on("click", function () {
        $(".roll-btn").removeAttr("disabled");
        $("#choose-javascript").fadeOut("slow");
      });
      $(".javascript-yes").on("click", function () {
        $(".roll-btn").removeAttr("disabled");
        $("#choose-javascript").fadeOut("slow").css("display", "none");
        path = "inner-j";
      });
    }, 1750);
  }
}
