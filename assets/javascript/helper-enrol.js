function innerEnrolOne() {
    setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            "Changing Career - Draw one Experience Card"
          );
          $(".space-view").css("background", "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9)");
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

    function innerEnrolTwo() {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Make a friend with someone on the course - Gain 2 <i class="fas fa-heart"></i>'s `
          );
          $(".space-view").css("background", "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);");
          currHappy = currHappy + 2;
          $(".current-heart").html(
            "Happiness: " + currHappy + ' <i class="fas fa-heart"></i>'
          );
          return;
        }, 200);
    }

    function innerEnrolThree() {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(`Plagiarism!! - Go straight to Hacked!`);
          $(".space-viewiv").css(
            "background",
            "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
          );
          $("#player-one").remove();
          $("#7>div").append(playerOne);
          path = "outer";
          hacked = true;
          return;
        }, 200);
    }

    function innerEnrolFour() {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Start the course during a special offer time - Draw 2 opportunity cards`
          );
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

    function innerEnrolFive() {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(`Your new mentor is cute - Gain 4 <i class="fas fa-heart"></i>'s `);
          $(".space-view").css(
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

    function innerEnrolSix() {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Support from careers team to help you decide the best route for you - Gain 2 <i class="fas fa-heart"></i>'s `
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

    function innerEnrolSeven() {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            "COVID course support - Your income increases by £500"
          );
          $(".space-view").css(
            "background",
            "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
          );
          currIncome = currIncome + 0.5;
          $(".current-income").html("Income: £" + currIncome * 1000);
          return;
        }, 200);
    }

    function innerEnrolEight() {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            "Over prepare by buying 3 new monitors - Lose 1/2 your cash on hand"
          );
          $(".space-view").css(
            "background",
            "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
          );
          currMoney = currMoney * 0.5;
          $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
          return;
        }, 200);
    }

    function innerEnrolNine() {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            "A Company supports your course and help you with finance - Get £2000"
          );
          $(".space-view").css(
            "background",
            "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
          );
          currMoney = currMoney + 2;
          $(".current-dollar").html("Money: £" + currMoney.toFixed(2) * 1000);
          return;
        }, 200);
    }

    function innerEnrolTen() {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Join a career support conference on Zoom - Gain 2 <i class="fas fa-heart"></i>'s `
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

    function innerEnrolEleven() {
        setTimeout(() => {
          $(".new-space-info").slideToggle("slow").css("display", "flex");
          $(".new-space-info p").html(
            `Happily get enrolled with great support and lots of learning - Income up £500 and draw 2 Experience cards`
          );
          $(".space-view").css(
            "background",
            "linear-gradient(45deg, #fafafa, #fafafa, #aca9a9);"
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
