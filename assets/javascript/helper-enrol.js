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
