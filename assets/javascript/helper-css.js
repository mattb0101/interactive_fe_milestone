function innerCSSOne() {
  setTimeout(() => {
    $(".new-space-info").slideToggle("slow").css("display", "flex");
    $(".new-space-info p").html(
      `Bootstrap genius! - Gain 2 <i class="fas fa-star"></i>'s, 3 <i class="fas fa-heart"></i>'s and increase your income by £500 `
    );
    $(".space-view>div").css(
      "background",
      "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
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

function innerCSSTwo() {
  setTimeout(() => {
    $(".new-space-info").slideToggle("slow").css("display", "flex");
    $(".new-space-info p").html(
      "Spend 9 hours a day coding and forget you have friends - Miss a turn"
    );
    $(".space-view>div").css(
      "background",
      "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
    );
    missTurn = true;
    return;
  }, 200);
}

function innerCSSThree() {
  setTimeout(() => {
    $(".new-space-info").slideToggle("slow").css("display", "flex");
    $(".new-space-info p").html(
      `Do some freelance projects for friends - Gain 3 <i class="fas fa-star"></i>'s and increase your income by £1000`
    );
    $(".space-view>div").css(
      "background",
      "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
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

function innerCSSFour() {
    setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Project is noticed by people - Gain 3 <i class="fas fa-star"></i>'s`
          );
          $(".space-view>div").css(
            "background",
            "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
          );
          currFollow = currFollow + 3;
          $(".current-star").html(
            "Fame: " + currFollow + '<i class="fas fa-star"></i>'
          );
          return;
        }, 200);
}

function innerCSSFive() {
    setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Learn some cool tricks for styling from course members on slack - Gain 4 <i class="fas fa-heart"></i>'s `
          );
          $(".space-view>div").css(
            "background",
            "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
          );
          currHappy = currHappy + 4;
          $(".current-heart").html(
            "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
          );
          return;
        }, 200);
}

function innerCSSSix() {
    setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Get 90% on your project! - Gain 2 <i class="fas fa-star"></i>'s and 5 <i class="fas fa-heart"></i>'s `
          );
          $(".space-view>div").css(
            "background",
            "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
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

function innerCSSSeven() {
  setTimeout(() => {
    $(".new-space-info").slideToggle("slow").css("display", "flex");
    $(".new-space-info p").html(
      "Bug in the code, but you can't find it - Miss a Turn"
    );
    $(".space-view>div").css(
      "background",
      "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
    );
    missTurn = true;
    return;
  }, 200);
}
