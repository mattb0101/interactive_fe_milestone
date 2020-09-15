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
* Rules and intro texts
* Income level somewhere - DONE
* Opportunity and Experience cards and using them
* screen showing up when landing on a space - DONE
    * Make these screens do something
* Computer scores - DONE
* Opp Card Removed from screen but not from actual array! opposite of push needed in here - DONE
    * Needs to not ask for enrolling if used a card - Change from outer to inner and dont let enrol pop up. 
* Issue Coming out of CSS from square 50! didnt appear again and then broke...
* Opp Cards dissapearing all and not just specific one...thought id sorted this....

* Reqs to get into studies
* Code Success - Square 19!! sort this!
* Card to Javascript seems broken...stops dice roll on toggle. -  had to edit in console to carry on testing
* Opp card issue, couldnt read property of 0...
* size of Opp and Exp card containers
* Check rounding or toFix on all values! - DONE
* Enrol screen sometimes bounced..
* flex wrap to add to opp card viewer
* square 29 full text - add "Gain 4  hearts" - Look at 34 too!
* Javascript moved there and went to HTML - then enrol screen flashed 4 times - Got rid of all cards.

* Square 2 layout of space info
* sometimes enrollment screen dissapears?
* Think i have this - Auto Enroll after using card.
* Remove style on squares when moved
* Cards Moving to the first one it seems!
* clicking no on enrol moved me forward 1 space?
* opportunity cards very annoying!!!!