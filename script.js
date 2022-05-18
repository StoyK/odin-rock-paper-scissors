const choices = ["rock", "paper", "scissors"]

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

function getPlayerInput() {
    let choice;
    
    do {
        choice = prompt("Enter player choice(rock, paper, scissors): ")
    } while(!choices.includes(choice))
    
    return choice;
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    let winner = compareChoices(playerSelection, computerSelection)
    console.log(winner + " wins!");
}

function playGame() {
    
}
for(let i = 0; i < 5; i++) {
    playRound(getPlayerInput(), getComputerChoice())
}