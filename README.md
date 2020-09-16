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

### ***Existing Features***

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

#### Gameplay screens
##### Path choosing
* Whilst going round the board, landing on Enrollment, HTML, CSS or JavaScript gives you the option to go on the inner path or stay on the outside path.
##### Outer Square information
* When landing on a space there may be soemthing that happens, a screen pops up to tell you what has been done. 
* Some squares have a choice to make, to stay on them, donate certain money or roll a dice, these options are on the pop up screen

### ***Features Left to Implenment***


## Technologies Used

#### [HTML (Hypertext Markup Language)](https://www.w3schools.com/html/)
- HTML is the standard markup language for programmers to use to display content on a webpage.

#### [CSS (Cascading Style Sheets)](https://www.w3schools.com/css/)
- CSS works alongside HTML to add style and effects to the website.

#### [JavaScript](https://www.w3schools.com/js/default.asp)
- JavaScript enables Interactive web pages and is an essential part of web applications.

#### [jQuery](https://jquery.com/)
- jQuery is a framework that enables easier manipulation of the DOM and i have used this to simplifiy the code from standard JavaScript.

#### [Github](https://github.com/)
- A software development sharing platform used for hosting and sharing projects for open source, or team based projects. I was using github so other people can see, its easily hostable and can deploy easily.

#### [Gitpod](https://www.gitpod.io/)
- An IDE (Integrated Development Environment) for GitHub that lets you quickly launch your projects in a ready-to-code environment.

#### [Git](https://git-scm.com/)
- A free and open source version control system that handles all projects and keeps version history in check.

#### [Font Awesome](https://fontawesome.com/)
- A font and icon based toolkit based on CSS - Wikipedia. I used font awesome icons to give a more visual appearance to the Happiness and Followers, it also gave the user a quick viewing of what was being affected. 

#### [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
 - A set of Web developer tools built into Google Chrome that allows you to make changes to a website on the fly for testing purposes and be able to diagnose issues. I used this for the console, to be able to view results as changes were made during gameplay. This also allowed me to issue commands to the game to carry on if there was a bug while testing rather than having to start the whole game again.  


## Testing

## Deployment

I have deployed this using GitHub Pages using the following process;

1. From my github account [https://github.com/mattb0101](https://github.com/mattb0101)
1. New Repository was created, [https://github.com/mattb0101/time_for_change](https://github.com/mattb0101/time_for_change). This was using a template from the Code Institute to build off [https://github.com/Code-Institute-Org/gitpod-full-template](https://github.com/Code-Institute-Org/gitpod-full-template).
1. To be able to view this i had to follow the following steps.
    1. From the Repository, click the setting button.
    1. Scroll down to the Github Pages Section.
    1. Change the source from 'None' to the branch to use. I have been using 'master'.
    1. Scroll back down after saving, and the link will be available. [https://mattb0101.github.io/time_for_change/](https://mattb0101.github.io/time_for_change/)
1. The Code can be run from Github, using Gitpod by pressing the 'Gitpod' button, or cloning, downloading and forking the code. 

## Credits 

### ***Content***
- HTML
- CSS
- Javascript
- [jQuery](https://jquery.com/) used this for a lot of my javascript, lots of use of the documentation on there to use it properly.
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

- [w3schools](https://www.w3schools.com/) for hints and tips and furthering my knowledge of attributes and elements learnt so far.





### ***Media***
- The game is based on [Careers](https://en.wikipedia.org/wiki/Careers_(board_game)#:~:text=Careers%20is%20a%20board%20game,produced%20by%20Winning%20Moves%20Games.&text=Players%20(from%20two%20to%20six,when%20only%20two%20are%20playing).), a board game published originally by Parker Brothers and most recently by Winning Moves Games.


### ***Acknowledgements***

- During research i took inspiration from similar style professional bands. The main 2 that i took inspiration from were [Reel Big Fish](http://www.reel-big-fish.com/) and [Popes of Chillitown](https://popesofchillitown.com/). 
- My cousin [Chris Baum](https://github.com/cbaum86) for being the biggest help and support with this. As a web designer himself, able to look at the project, gives me hints and tips and help when one line of code isnt working properly. Teaching me things and some best practice methods, adding a little colour into things when everything was black and white to me. Chris forked this project and showed me demo's of what he was talking about, so some of the code i have borrowed from that, early grid layout and some colour work.
- My girlfriend Steph for putting up with me through all this but being really positive and supportive of my work. Obviously my cat Kyra....who decides to steal my mouse and re-write the code, but keeping me company most of the day too.
- Main shout out to the band, we cant practice at the moment and are all missing that! They let me do this, helped a lot with getting pictures and doing loads of testing for me, and put up with constant videos that my geeky self posted and was happy....that probably meant nothing to them.
- My Mum and Dad, for always supporting, asking how things were going, pushing me (even though Dad pushed a little hard sometimes...). But they've always been there and wanting me to succeed at all this and helping with anything i needed.
- Connie Higgins at learning people, for being a great support person since day one of the course, always positive and helping me push forward, always brings a smile to my face!
- Other students on this course, helping and happy to share their projects for inspiration. Definitley used them with help for the README when i didnt have a clue where to go with it!
- My mentor Gerry McBride for the support, staying calm which helped me and even through all this current worldwide mess, being really helpful and there when needed even with his own work. 


## Stuff to put in from Notes

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
* Scroll Bars on big screen size opp and exp boxes