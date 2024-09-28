function getComputerChoice(){
    let aux = Math.floor(Math.random() * 3);
    if(aux == 0) return "rock";
    else if(aux == 1) return "paper";
    else return "scissors";
}

function getHumanChoice(){
    let aux = prompt("Type rock, paper or scissors.")
    aux = aux.toLocaleLowerCase();
    return aux;
}

let humanScore = 0;
let computerScore = 0;

function playRound(computer, human){

    if(computer === "rock"){
        if(human === "paper"){
            humanScore+=1;
            console.log("You win! Paper beats Rock");
        }
        else if(human === "scissors"){
            computerScore+=1;
            console.log("You lose! Rock beats scissors");
        }else{
            console.log("No one wins");
        }
    }
    else if(computer === "paper"){
        if(human === "rock"){
            computerScore+=1;
            console.log("You lose! Paper beats rock");
        }
        else if(human === "scissors"){
            humanScore+=1;
            console.log("You win! Scissors beats paper");
        }else{
            console.log("No one wins");
        }
    }    
    else if(computer === "scissors"){
        if(human === "paper"){
            computerScore+=1;
            console.log("You lose! Scissors beats paper");
        }
        else if(human === "rock"){
            humanScore+=1;
            console.log("You win! Rock beats scissors");
        }else{
            console.log("No one wins");
        }
    }

}

function playGame(){
    
    for(let i = 0; i < 5; i++){
        let human = getHumanChoice();
        let computer = getComputerChoice();
        playRound(computer, human);
    } 

    if(humanScore > computerScore)
        console.log("You won!")
    else
        console.log("You loose!")
}

playGame();