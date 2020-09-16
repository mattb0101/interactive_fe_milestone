# Time for a Change

This is the second milestone project in my Full Stack Web Developer Course. This project is about Interactive Front End Development, and I have chosen to go with a game that will involve a lot of user interaction and decisions.
I decided to go for a board game rather than a memory game in the suggestions, and maybe this was a much bigger task than I imagined. The game is based on a game called careers, that me and my family played a lot when I was growing up, and it involves moving around and earning Money, Fame and Happiness to reach a target. Because of the use of lots of maths, adding and subtracting things, I thought this would be a great way to really get JavaScript involved.
I took this game and added a twist that would set the idea of the game to be based on the Full Stack Web Developer Course. As I have only completed the first half, with front end, I am taking that, from Enrollment and then going through HTML, CSS and JavaScript.

## UX

As this will be a game, the aim of this is for the user to enjoy playing, and maybe get a tiny bit of insight into the path I am going through with changing my career to coding. 

* As a user, I want to enjoy the game and not get easily bored.
* As a user, I want to understand the game easily and know what is happening.

I have made the game use a player, but also 3 computers so that it is more like a normal boardgame with some competition.

### Waireframes

Put some in here?

## Features

### *Existing Features*

#### Game Intro and Rules
* Rules and Intro come up straight away, using buttons and JavaScript to move between screens.
* Ends on choosing a Sucess Formula consiting of Followers, Money and Happiness. These must add up to 60 and wont let the player go on if it doesn't.
* After the Formula, a player or one of the Computers is chosen at random to go first.

#### Layout of Game screen
##### Board
* Based on a square board that users travel round. 7 x 7 outer grid with 4 smaller paths on the inside. These can be moved through to get extra Money. Happiness and Followers.
* Dice in the middle of the board and a notification for the persons turn that it is.
* Pay button that becomes active on some squares that have the option of paying to move on.
##### Player scores
* A box on the left of the board that shows information for the game play.
* Income - this is the amount of money the player gains when passing Pay Day.
* Sucession Formula. This shows the target that the player has chosen and then the values they currently have.
##### Computer scores
* A box on the right that shows the computers current values. It does not show any targets as this is secret per person so the others done know what they are aiming for. 

#### 






Problem - Changing dice roll to JQuery, adding two rolls together, number and value or text

Changed from 2 dies to one, makes it easier for inner and board not big enough to warrant 2

Put computer turns to Auto - but instantly happening, will look at trying to get a delay between functions.

Lots of testing moving round and things that were happening on certain squares to stop play. Found it was certain squares didnt have a "Carry on" Button screen showing, so nothing moved this on to the next player! 



Sources i used for things!

<!-- This was a tic tac toe game that helped with starting to understand mutiple players in a game. -->
https://www.codeproject.com/Articles/814420/Two-Player-TicTacToe-D-Game-using-jQuery

<!-- Stack Overflow -->
learning to refresh a page in jquery - this was used for quick refresh in testing phases - https://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery
Auto Clicking buttons on events - https://stackoverflow.com/questions/18646881/auto-click-button-element-on-page-load-using-jquery
Getting random value from JavaScript Arrays - This was for opp and exp cards - https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
CSS Wildcards - https://stackoverflow.com/questions/5110249/wildcard-in-css-for-classes
jQuery - Disable and enabled buttons, so cant be clicked randomly - https://stackoverflow.com/questions/1594952/jquery-disable-enable-submit-button
jquery set Timeout between events - https://stackoverflow.com/questions/30107010/jquery-settimeout-function





<!-- Help with Rolling Dice -->
https://codepen.io/_Billy_Brown/pen/bzwtJ

<!-- W3Schools -->
Last Child selector - https://www.w3schools.com/cssref/sel_last-child.asp
Javascript timing events to allow some gap between events - https://www.w3schools.com/js/js_timing.asp


<!-- Things needing to work on -->
* Rules and intro texts -MOSTLY DONE, MIGHT NEED TO ADD MORE
* Income level somewhere - DONE
* Opportunity and Experience cards and using them
* screen showing up when landing on a space - DONE
    * Make these screens do something - DONE
* Computer scores - DONE
* Opp Card Removed from screen but not from actual array! opposite of push needed in here - DONE - Not working though
    * Needs to not ask for enrolling if used a card - Change from outer to inner and dont let enrol pop up. 
* Issue Coming out of CSS from square 50! didnt appear again and then broke...
* Opp Cards dissapearing all and not just specific one...thought id sorted this....

* Reqs to get into studies
* Code Success - Square 19!! sort this! - DONE
* Card to Javascript seems broken...stops dice roll on toggle. -  had to edit in console to carry on testing
* Opp card issue, couldnt read property of 0...
* size of Opp and Exp card containers - DONE
* Check rounding or toFix on all values! - DONE
* Enrol screen sometimes bounced..
* flex wrap to add to opp card viewer
* square 29 full text - add "Gain 4  hearts" - Look at 34 too! - DONE
* Javascript moved there and went to HTML - then enrol screen flashed 4 times - Got rid of all cards.

* Square 3 layout of space info - DONE
* sometimes enrollment screen dissapears?
* Think i have this - Auto Enroll after using card.
* Remove style on squares when moved
* Cards Moving to the first one it seems!
* clicking no on enrol moved me forward 1 space?
* opportunity cards very annoying!!!!