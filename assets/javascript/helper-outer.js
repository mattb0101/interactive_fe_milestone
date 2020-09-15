// Standard Outer Squares
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

function outerThree() {
  setTimeout(() => {
    $(".new-space-info").slideToggle("slow").css("display", "flex");
    $(".new-space-info p").html(
      "TAXES! <br> If you income is less than £3000, pay 10%. If your income is £3001 - £9999, pay 50%, if your income is more than £10,000 pay 90% of one rounds income"
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
    //   Need to put payment option in here!
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

// Moving to inner Squares

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
  setTimeout(() => {
    var randomOpp = Math.floor(Math.random() * oppCardArray.length);
    playerOppCards.push(oppCardArray[randomOpp]);
    console.log(randomOpp);
    $(".opp-cards").append(
      `<div class="player-opp-card${
        playerOppCards[playerOppCards.length - 1][0]
      }">Opp</div>`
    );
    $(".new-space-info-opp").slideToggle("slow").css("display", "flex");
    if (randomOpp == 0) {
      $(".new-space-info-opp p").html(
        `Opportunity to enter <span>Enrollment</span> meet the normal requirments to enter. `
      );
      $(".space-view>div").css("background-color", "#ad4139");
      $(".opp-cards-content").append(
        `<div class="player-check-opp-card${
          playerOppCards[playerOppCards.length - 1][0]
        }">Opportunity to enter <span>Enrollment</span> meet the normal requirments to enter.</div>`
      );
    } else if (randomOpp == 1) {
      $(".new-space-info-opp p").html(
        `Opportunity to enter <span>HTML</span> You've been helped by your parents and all expenses are paid!`
      );
      $(".space-view>div").css("background-color", "#ad4139");
      $(".opp-cards-content").append(
        `<div class="player-check-opp-card${
          playerOppCards[playerOppCards.length - 1][0]
        }">Opportunity to enter <span>HTML</span> You've been helped by your parents and all expenses are paid!</div>`
      );
    } else if (randomOpp == 2) {
      $(".new-space-info-opp p").html(
        `Opportunity to enter <span>HTML</span> meet the normal requirments to enter.`
      );
      $(".space-view>div").css("background-color", "#ad4139");
      $(".opp-cards-content").append(
        `<div class="player-check-opp-card${
          playerOppCards[playerOppCards.length - 1][0]
        }">Opportunity to enter <span>HTML</span> meet the normal requirments to enter.</div>`
      );
    } else if (randomOpp == 3) {
      $(".new-space-info-opp p").html(
        `Opportunity to enter <span>CSS</span> You've been helped by your parents and all expenses are paid!`
      );
      $(".space-view>div").css("background-color", "#ad4139");
      $(".opp-cards-content").append(
        `<div class="player-check-opp-card${
          playerOppCards[playerOppCards.length - 1][0]
        }">Opportunity to enter <span>CSS</span> You've been helped by your parents and all expenses are paid!</div>`
      );
    } else if (randomOpp == 4) {
      $(".new-space-info-opp p").html(
        `Opportunity to enter <span>CSS</span> meet the normal requirments to enter.`
      );
      $(".space-view>div").css("background-color", "#ad4139");
      $(".opp-cards-content").append(
        `<div class="player-check-opp-card${
          playerOppCards[playerOppCards.length - 1][0]
        }">Opportunity to enter <span>CSS</span> meet the normal requirments to enter.</div>`
      );
    } else if (randomOpp == 5) {
      $(".new-space-info-opp p").html(
        `Opportunity to enter <span>JavaScript</span> You've been helped by your parents and all expenses are paid!`
      );
      $(".space-view>div").css("background-color", "#ad4139");
      $(".opp-cards-content").append(
        `<div class="player-check-opp-card${
          playerOppCards[playerOppCards.length - 1][0]
        }">Opportunity to enter <span>JavaScript</span> You've been helped by your parents and all expenses are paid!</div>`
      );
    } else if (randomOpp == 6) {
      $(".new-space-info-opp p").html(
        `Opportunity to enter<span>JavaScript</span> meet the normal requirments to enter.`
      );
      $(".space-view>div").css("background-color", "#ad4139");
      $(".opp-cards-content").append(
        `<div class="player-check-opp-card${
          playerOppCards[playerOppCards.length - 1][0]
        }">Opportunity to enter <span>Enrollment</span> meet the normal requirments to enter.</div>`
      );
    } else if (randomOpp == 7) {
      $(".new-space-info-opp p").html(
        `Opportunity to move to<span>Code Success!</span> `
      );
      $(".space-view>div").css("background-color", "#ad4139");
      $(".opp-cards-content").append(
        `<div class="player-check-opp-card${
          playerOppCards[playerOppCards.length - 1][0]
        }">Opportunity to move to <span>Code Success!</span></div>`
      );
    }
    $(".opp-use-now-btn").on("click", function () {
      $(".new-space-info-opp").fadeOut("slow").css("display", "none");
      var oppCard = playerOppCards.length - 1;
      $("div").remove(`.player-opp-card${playerOppCards[oppCard][0]}`);
      //   This Needs Fixing!!!
      playerOppCards.pop();
      $("#player-one").remove();
      if (randomOpp == 0) {
        $("#4>div").append(playerOne);
      } else if (randomOpp == 1 || randomOpp == 2) {
        $("#11>div").append(playerOne);
      } else if (randomOpp == 3 || randomOpp == 4) {
        $("#17>div").append(playerOne);
      } else if (randomOpp == 5 || randomOpp == 6) {
        $("#23>div").append(playerOne);
      } else if (randomOpp == 7) {
        $("#19>div").append(playerOne);
      }
      setTimeout(() => {
        turn = "Comp1";
        currTurn("Comp 1's turn now!");
        compOneTurn();
      }, 1000);
      console.log(playerOppCards);
      $(".roll-btn").attr("disabled", true);
    });
  }, 200);
}
