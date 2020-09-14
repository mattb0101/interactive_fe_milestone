function innerJavaScriptOne() {
  setTimeout(() => {
    $(".new-space-info").slideToggle("slow").css("display", "flex");
    $(".new-space-info p").html(
      "Space affect currently undefined so no information to show"
    );
    $(".space-view").css(
      "background",
      "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
    );
    currFollow = currFollow + 1;
    $(".current-star").html(
      "Fame: " + currFollow + '<i class="fas fa-star"></i>'
    );
    return;
  }, 200);
}

function innerJavaScriptTwo() {
  setTimeout(() => {
    $(".new-space-info").slideToggle("slow").css("display", "flex");
    $(".new-space-info p").html(
      `Skills from a previous job help make something awesome! - Gain 2 <i class="fas fa-star"></i>'s and 4 <i class="fas fa-heart"></i>'s`
    );
    $(".space-view").css(
      "background",
      "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
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

function innerJavaScriptThree() {
  setTimeout(() => {
    $(".new-space-info").slideToggle("slow").css("display", "flex");
    $(".new-space-info p").html(`.......Draw 2 Experience Cards`);
    $(".space-view").css(
      "background",
      "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
    );
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

function innerJavaScriptFour() {
  setTimeout(() => {
    $(".new-space-info").slideToggle("slow").css("display", "flex");
    $(".new-space-info p").html(
      `Job opportunity as your project is noticed - Increase your income by £1000 and gain 4 <i class="fas fa-star"></i>'s`
    );
    $(".space-view").css(
      "background",
      "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
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

function innerJavaScriptFive() {
  setTimeout(() => {
    $(".new-space-info").slideToggle("slow").css("display", "flex");
    $(".new-space-info p").html(`.................- Draw 2 opportunity cards`);
    $(".space-view").css(
      "background",
      "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
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

function innerJavaScriptSix() {
  setTimeout(() => {
    $(".new-space-info").slideToggle("slow").css("display", "flex");
    $(".new-space-info p").html(
      `Forget that you are rubbish at maths and can't do it! - Lose 1/2 your <i class="fas fa-heart"></i>'s `
    );
    $(".space-view").css(
      "background",
      "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
    );
    currHappy = Math.ceil(currHappy * 0.5);
    $(".current-heart").html(
      "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
    );
    return;
  }, 200);
}

function innerJavaScriptSeven() {
    setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            "Javascript app you make gets sold on app store - Earn £10,000"
          );
          $(".space-view").css(
            "background",
            "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
          );
          currMoney = currMoney + 10;
          $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
          return;
        }, 200);
}

function innerJavaScriptEight() {
    setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Build something that is usable by other people easily - Gain 4 <i class="fas fa-star"></i>'s`
          );
          $(".space-view>div").css(
            "background",
            "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
          );
          currFollow = currFollow + 4;
          $(".current-star").html(
            "Fame: " + currFollow + '<i class="fas fa-star"></i>'
          );
          return;
        }, 200);
}

function innerJavaScriptNine() {
    setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Finish the course sucessfully! - Gain 5 <i class="fas fa-star"></i>'s, 5 <i class="fas fa-heart"></i>'s and increase your income by £2000 `
          );
          $(".space-view").css(
            "background",
            "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
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
