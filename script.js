let computerScore = 0;
let playerScore = 0;

const computerChoice = document.querySelector('#computerChoice')
const playerChoice = document.querySelector('#playerChoice')
const playerScoreElem = document.querySelector("#playerScore")
const computerScoreElem = document.querySelector('#computerScore')

function compareChoices(choiceA, choiceB) {
    if(choiceA == choiceB) return "No one"

    switch(choiceA + choiceB) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":            
            return "The Player"
        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
            return "The Computer"    
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]
}

function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function playRound(playerSelection, computerSelection) {
    let winner = compareChoices(playerSelection, computerSelection)

    computerChoice.innerHTML = capitalizeString(computerSelection);
    playerChoice.innerHTML = capitalizeString(playerSelection);

    if(winner == "The Player") {
        playerScore++;
        playerScoreElem.innerHTML = playerScore;
    } else if (winner == "The Computer") {
        computerScore++;
        computerScoreElem.innerHTML = computerScore;
    }

    if(computerScore == 5) {
        alert("The Computer wins!");
    } else if (playerScore == 5) {
        alert("The Player wins!")
    }
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.innerText.toLowerCase(), getComputerChoice())
    })
})