// let's declare some variables here
var playerSelection;
var computerSelection;
var playerScore = 0;
var compScore = 0;
var result;
var compHand;



// Add some page functionality
// start button
const startBtn = document.querySelector("#startBtn");
startBtn.onclick = () => showSelection();

function showSelection() {
    document.getElementById("instruction").style.display = "flex";
    document.getElementById("player-choice").style.display = "flex";
    document.getElementById("instruction").style.display = "flex";
    document.getElementById("player-chose").innerHTML = "CHOOSE";
    document.getElementById("computer-chose").innerHTML = "THINKING...";
    document.getElementById("start").style.display = "none";
    document.getElementById("notify").innerHTML = " ";
}

// reset button
const resetBtn = document.getElementById("reset-button");
resetBtn.onclick = () => resetGame();

function resetGame() {
    document.getElementById("player-score").innerHTML = "0";
    document.getElementById("computer-score").innerHTML = "0";
    document.getElementById("instruction").style.display = "none";
    document.getElementById("player-choice").style.display = "none";
    document.getElementById("player-chose").innerHTML = "PRESS START";
    document.getElementById("computer-chose").innerHTML = "PRESS START";
    document.getElementById("start").style.display = "flex";
    document.getElementById("player-played").style.backgroundColor = "#fff";
    document.getElementById("computer-played").style.backgroundColor = "#fff";
    playerScore = 0;
    compScore = 0;
    playerSelection = null;
}

var weapons = document.querySelectorAll(".weapon");
weapons = Array.from(weapons);
weapons.forEach(function(elem) {
    elem.addEventListener('click', () => {
        if (elem.dataset.weap === "rock") {
            playerSelection = "rock";
        } else if (elem.dataset.weap === "paper") {
            playerSelection = "paper";
        } else if (elem.dataset.weap === "scissors") {
            playerSelection = "scissors";
        };
        game();
    });
    
})




// The following is the actual game logic.


// Computer's play
function computerPlay() {
var getNum;

getNum = Math.random();

if (getNum < .333) {
    compHand = "rock";
} else if (getNum > .666) {
    compHand = "paper";
} else {
    compHand = "scissors"
}
return compHand;
}

// one round, and who won
function playRound(playerSelection, computerSelection) {
computerSelection = computerPlay();


if ( playerSelection == "rock" && computerSelection == "rock") {
    result = 0;
} else if ( playerSelection == "paper" && computerSelection == "paper") {
    result = 0;
} else if ( playerSelection == "scissors" && computerSelection == "scissors" ) {
    result = 0;
} 
  
  else if ( playerSelection == "rock" && computerSelection == "paper") { 
    result = 1;
    return "You lose! Paper beats Rock.";
} else if ( playerSelection == "paper" && computerSelection == "scissors") { 
    result = 1;
    return "You lose! Scissors beats Paper.";
} else if ( playerSelection == "scissors" && computerSelection == "rock") { 
    result = 1;
    return "You lose! Rock beats Scissors.";
}

else if ( playerSelection == "rock" && computerSelection == "scissors") { 
    result = 2;
    return "You win! Rock beats Scissors.";
} else if ( playerSelection == "paper" && computerSelection == "rock") { 
    result = 2;
    return "You win! Paper beats Rock.";
} else if ( playerSelection == "scissors" && computerSelection == "paper") { 
    result = 2;
    return "You win! Scissors beats Paper.";
} else { 
    result = 3;
    return playerSelection + " isn't an option...";
}

/*
computer wins result = 1
player wins result = 2
in a tie result = 0 
if an incorrect weapon is chosen, result = 3 */


} 


function game() {
    playRound(playerSelection, computerSelection);
    if ( result == 0 ) {
        document.getElementById("player-chose").innerHTML = playerSelection.toUpperCase();
        document.getElementById("computer-chose").innerHTML = compHand.toUpperCase();
        document.getElementById("notify").innerHTML = "IT'S A TIE";
        document.getElementById("player-played").style.backgroundColor = "#FFF";
        document.getElementById("computer-played").style.backgroundColor = "#FFF";
    } else if ( result == 1 ) { 
        compScore++;
        document.getElementById("player-chose").innerHTML = playerSelection.toUpperCase();
        document.getElementById("computer-chose").innerHTML = compHand.toUpperCase();
        document.getElementById("notify").innerHTML = "COMPUTER WINS A POINT";
        document.getElementById("player-score").innerHTML = playerScore;
        document.getElementById("computer-score").innerHTML = compScore;
        document.getElementById("player-played").style.backgroundColor = "#FFF";
        document.getElementById("computer-played").style.backgroundColor = "#e6fff7";
    } else if ( result == 2 ) {
        playerScore++;
        document.getElementById("player-chose").innerHTML = playerSelection.toUpperCase();
        document.getElementById("computer-chose").innerHTML = compHand.toUpperCase();
        document.getElementById("notify").innerHTML = "PLAYER WINS A POINT";
        document.getElementById("player-score").innerHTML = playerScore;
        document.getElementById("computer-score").innerHTML = compScore;
        document.getElementById("player-played").style.backgroundColor = "#e6fff7";
        document.getElementById("computer-played").style.backgroundColor = "#FFF";
    } else {
        //console.log( "That's not how you play! Player: " + playerScore + " | Computer: " + compScore );
    }

if( playerScore == 5 ) {
    document.getElementById("notify").innerHTML = "CONGRATULATIONS! YOU WON THE GAME!";
    document.getElementById("instruction").style.display = "none";
    document.getElementById("player-choice").style.display = "none";
} else if( compScore == 5 ) {
    document.getElementById("notify").innerHTML = "Aww dang, the computer beat you.<br>Better luck next time.";
    document.getElementById("instruction").style.display = "none";
    document.getElementById("player-choice").style.display = "none";
} else {}

}


