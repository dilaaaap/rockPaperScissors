let wins = 0;
let losses = 0;
let ties = 0;
function computerPlay()
{
    return Math.floor(Math.random()* 3)+1;
}
function playRound(playerSelection, computerSelection)
{
    if(playerSelection == "rock" && computerSelection == 1){
        var result = "Tie"
        ties = ties +1;
        return result
    }
    else if(playerSelection == "rock" && computerSelection == 2){
        var result = "Loss"
        losses = losses +1;
        return result
    }
    else if(playerSelection == "rock" && computerSelection == 3){
        var result = "Win"
        wins = wins +1;
        return result
    }
    else if(playerSelection == "paper" && computerSelection == 1){
        var result = "Win"
        wins = wins +1;
        return result
    }
    else if(playerSelection == "paper" && computerSelection == 2){
        var result = "Tie"
        ties = ties +1;
        return result
    }
    else if(playerSelection == "paper" && computerSelection == 3){
        var result = "Loss"
        losses = losses +1;
        return result
    }
    else if(playerSelection == "scissors" && computerSelection == 1){
        var result = "Loss"
        losses = losses +1;
        return result
    }
    else if(playerSelection == "scissors" && computerSelection == 2){
        var result = "Win"
        wins = wins +1;
        return result
    }
    else if(playerSelection == "scissors" && computerSelection == 3){
        var result = "Tie"
        ties = ties +1;
        return result
    }
    else
    {
        return "Error"
    }
}
  
//const playerSelection = "rock";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

function game(){
    for(let i = 1; i<6; i++)
    {
        var holder = window.prompt("Round " + i + " please enter rock, paper, or scissors" );
        var j = holder.toLowerCase();
        var k = computerPlay();
        console.log(k)
        console.log(playRound(j,k))
    }
    if(wins< losses){
        var outcome = "Defeat";
    }
    else if(wins> losses){
        var outcome = "Victory";
    }
    else
    {
        var outcome = "Tie";
    }
    alert("Wins: " + wins + "\nLosses: " + losses + "\nTies: " + ties + "\nResult: " + outcome)
  }

game();
