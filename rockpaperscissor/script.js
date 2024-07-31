function getComputerChoice(){
    let rps = ["rock", "paper", "scissor"]
    let rand = Math.floor(Math.random()*3+0);
    return rps[rand];
}

function getHumanChoice(){
    let ans = prompt ("Choose 'rock', 'paper' or 'scissor'").toLowerCase();
    if (ans === "rock"){
        return "rock";
    }else if (ans === "paper"){
        return "paper";
    }else if (ans === "scissor"){
        return "scissor";
    }else{
        getHumanChoice();
    }
};

function playRound (getComputerChoice, getHumanChoice){
    let compChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    return [compChoice, humanChoice];
}

function playGame(rounds){
    let humanScore = 0;
    let computerScore = 0;

    for (let i = rounds; i > 0; i--){
        let result = playRound(getComputerChoice, getHumanChoice);
        let cChoice = result[0];
        let hChoice = result[1];

        if (cChoice === "rock" && hChoice === "scissor"){
            computerScore += 1;
            console.log("You lost that round!");
        }else if (cChoice === "paper" && hChoice === "rock"){
            computerScore += 1;
            console.log("You lost that round!");
        }else if(cChoice === "scissor" && hChoice === "paper"){
            computerScore += 1;
            console.log("You lost that round!");
        }else if(cChoice === hChoice){
            humanScore += 0;
            computerScore += 0;
            console.log("It was a tie");
        }else{
            humanScore += 1;
            console.log("You won that round!");
        }
    }
    if (humanScore > computerScore){
        alert(`You won! with a score of ${humanScore} vs the computer score of ${computerScore}`);
    }else if (computerScore > humanScore){
        alert (`You Lost. Your score was ${humanScore} vs the computer score of ${computerScore}`);
    }else{
        alert(`It was a tie. Better luck next time!`);
    }
}

playGame(5);
