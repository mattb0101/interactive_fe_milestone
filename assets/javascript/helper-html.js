function innerHTMLOne() {
    setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(`..........draw 1 experience card`);
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
          return;
        }, 200);
}

function innerHTMLTwo() {
    setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Make and awesome Email layout for a friends company - Gain 3 <i class="fas fa-heart"></i>'s `
          );
          $(".space-view").css(
            "background",
            "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
          );
          currHappy = currHappy + 3;
          $(".current-heart").html(
            "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
          );
          return;
        }, 200);
}

function innerHTMLThree() {
    setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Break down trying to figure it out! - Lose 1/2 your <i class="fas fa-heart"></i>'s `
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

function innerHTMLFour() {
    setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html("..............income up £1000");
          $(".space-view").css(
            "background",
            "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
          );
          currIncome = currIncome + 1;
          $(".current-income").html("Income: £" + currIncome * 1000);
          return;
        }, 200);
}

function innerHTMLFive() {
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

function innerHTMLSix() {
    setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Watch Youtube and learn some new tricks - Gain 2 <i class="fas fa-heart"></i>'s and draw 1 experience card `
          );
          $(".space-view").css(
            "background",
            "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
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

function innerHTMLSeven() {
    setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Complete the module quickly with no issues -Gain 2 <i class="fas fa-heart"></i>'s`
          );
          $(".space-view").css(
            "background",
            "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
          );
          currHappy = currHappy + 2;
          $(".current-heart").html(
            "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
          );
          return;
        }, 200);
}

function innerHTMLEight() {
    setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Help another student on slack with a problem and get noticed - Gain 2 <i class="fas fa-star"></i>'s `
          );
          $(".space-view").css(
            "background",
            "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
          );
          currFollow = currFollow + 2;
          $(".current-star").html(
            "Fame: " + currFollow + '<i class="fas fa-star"></i>'
          );
          return;
        }, 200);
}