// Standard Outer Squares - They all shouw the next space info and then also may do something else.
// Income is added to Money
function outerOne() {
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

// Level of money is paid depending on income level
function outerThree() {
  setTimeout(() => {
    $(".new-space-info").slideToggle("slow").css("display", "flex");
    $(".new-space-info p").html(
      `<h2>TAXES!</h2>Income <= £3000, pay 10%. Income is £3001 - £9999, pay 50%. Income > £10,000 pay 90% of one rounds income`
    );
    $(".space-view>div").css("background-color", "#5aad39");
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

function outerSeven() {
  setTimeout(() => {
    $(".new-space-info").slideToggle("slow").css("display", "flex");
    $(".new-space-info p").html(
      `<h2>HACKED!</h2>Roll 2 or less, or pay ½ cash to move.`
    );
    $(".space-view>div").css("background-color", "#36adab");
    hacked = true;
  }, 200);
}

function outerNine() {
  setTimeout(() => {
    $(".new-space-info").slideToggle("slow").css("display", "flex");
    $(".new-space-info p").html(
      "New Tech! <br> Spend 1/4 of your cash on hand to update!"
    );
    $(".space-view>div").css("background-color", "#5aad39");
    currMoney = currMoney * 0.75;
    $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
  }, 200);
}

// This involves a dice roll to determine how much money they have to pay. The dice Roll is built onto the info screen and they cant move on until they have rolled the Dice.
function outerTwelve() {
  setTimeout(() => {
    if (currMoney < 1) {
      $(".roll-square-btn").attr("disabled", true);
    }
    $(".new-space-info-dice").slideToggle("slow").css("display", "flex");
    $(".new-space-info-dice p").html(
      `<h2>Hobby</h2>You may buy equpiment for £1000 to create youtube video's and gain <i class="fas fa-star"></i>'s x roll of one dice. <br>(Optional so may just press ok and carry on) `
    );

    $(".space-view-dice>div").css("background-color", "#5aad39");
    $(".roll-square-btn").on("click", function () {
      var diceRollSquare = Math.floor(Math.random() * 6) + 1;
      $("#die-one-square").html(diceRollSquare);
      currFollow = currFollow + Number(diceRollSquare);
      currMoney = currMoney - 1;
      $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
      $(".current-star").html(
        "Followers: " + currFollow + '<i class="fas fa-star"></i>'
      );
      $(".roll-square-btn").attr("disabled", true);
    });
  }, 200);
}

function outerThirteen() {
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

function outerFourteen() {
  setTimeout(() => {
    $(".new-space-info").slideToggle("slow").css("display", "flex");
    $(".new-space-info p").html("Fees Due <br>Pay 1/2 your annual income");
    currMoney = currMoney - currIncome * 0.5;
    $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
  }, 200);
}

function outerSixteen() {
  setTimeout(() => {
    $(".new-space-info-dice").slideToggle("slow").css("display", "flex");
    $(".carry-on-btn").attr("disabled", true);
    $(".new-space-info-dice p").html(
      `<h2>Spending Spree!</h2>Spend 10% of your cash x the roll of one dice. `
    );
    $(".space-view-dice>div").css("background-color", "#5aad39");
    $(".roll-square-btn").on("click", function () {
      var diceRollSquare = Math.floor(Math.random() * 6) + 1;
      $("#die-one-square").html(diceRollSquare);
      currFollow = currFollow + Number(diceRollSquare);
      currMoney = currMoney - currMoney * 0.1 * diceRollSquare;
      $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
      $(".roll-square-btn").attr("disabled", true);
      $(".carry-on-btn").removeAttr("disabled");
    });
  }, 200);
}

function outerNineteen() {
  setTimeout(() => {
    $(".stay-btn").css("display", "inline-block");
    $(".new-space-info").slideToggle("slow").css("display", "flex");
    $(".new-space-info p").html(
      `<h2>Code Success!</h2>Gain 4 <i class="fas fa-heart"></i>'s for landing here, earn 2 hearts each turn you stay. Roll 3 or less to stay.`
    );
    $(".space-view>div").css("background-color", "#36adab");
    currHappy = currHappy + 4;
    $(".current-heart").html(
      "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
    );
  }, 200);
}

// Moving to inner Squares and when the player cant move or misses a go. This passes on to the next person.
function outerNextPlayer() {
  setTimeout(() => {
    turn = "Comp1";
    currTurn("Comp 1's turn now!");
    compOneTurn();
  }, 1000);
  $(".roll-btn").attr("disabled", true);
}

// Opportunity Card Spaces

function outerOppCard() {
  let randomOpp = Math.floor(Math.random() * 4 + 1);
  playerOppCardsObj[randomOpp] = oppCardObject[randomOpp];
  $(".opp-cards").append(`<div class="player-opp-card${randomOpp}">Opp</div>`);
  $(".new-space-info-opp").slideToggle("slow").css("display", "flex");

  if (randomOpp == 1) {
    $(".new-space-info-opp p").html(
      `Opportunity to enter <span>Enrollment</span> Either Move there now, or save it for later. `
    );
    $(".space-view>div").css("background-color", "#ad4139");
    $(".opp-cards-content").append(
      `<div class="player-check-opp-card${randomOpp}">Opportunity to enter <span>Enrollment</span></div>`
    );
  } else if (randomOpp == 2) {
    $(".new-space-info-opp p").html(
      `Opportunity to enter <span>HTML</span>Either Move there now, or save it for later.`
    );
    $(".space-view>div").css("background-color", "#ad4139");
    $(".opp-cards-content").append(
      `<div class="player-check-opp-card${randomOpp}">Opportunity to enter <span>HTML</span></div>`
    );
  } else if (randomOpp == 3) {
    $(".new-space-info-opp p").html(
      `Opportunity to enter <span>CSS</span> Either Move there now, or save it for later.`
    );
    $(".space-view>div").css("background-color", "#ad4139");
    $(".opp-cards-content").append(
      `<div class="player-check-opp-card${randomOpp}">Opportunity to enter <span>CSS</span></div>`
    );
  } else if (randomOpp == 4) {
    $(".new-space-info-opp p").html(
      `Opportunity to enter <span>JavaScript</span> Either Move there now, or save it for later.`
    );
    $(".space-view>div").css("background-color", "#ad4139");
    $(".opp-cards-content").append(
      `<div class="player-check-opp-card${randomOpp}">Opportunity to enter <span>JavaScript</span> </div>`
    );
  }
  $(".opp-use-now-btn").on("click", function () {
     $(".new-space-info-opp").fadeOut("slow").css("display", "none");
     $("div").remove(`.player-opp-card${randomOpp}`);
     $("#player-one").remove();
     if (randomOpp == 1) {
       $("#4>div").append(playerOne);
       delete playerOppCardsObj[randomOpp]
       outerNextPlayer();
       return;
     }
    if (randomOpp == 2) {
       $("#11>div").append(playerOne);
       delete playerOppCardsObj[randomOpp]
       outerNextPlayer();
       return;
     }
     if (randomOpp == 3) {
       $("#17>div").append(playerOne);
       delete playerOppCardsObj[randomOpp]
       outerNextPlayer();
       return;
     }
     if (randomOpp == 4) {
       $("#23>div").append(playerOne);
       delete playerOppCardsObj[randomOpp]
       outerNextPlayer();
       return;
    }
});
}

