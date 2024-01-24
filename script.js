let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    const rdmIdx = Math.floor(Math.random() * 3);
    return options[rdmIdx];
}

const drawGame = () => {
    console.log("Draw Game");
    msg.innerHTML = "Game was Drawn😏😤! Play again";
    msg.style.backgroundColor = "#789461";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin === true){
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML =`Hacker or wot🥳🎊! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML =`Khelna seekh le💔😭! Computer's ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // Generate computer choice
    const compChoice = genCompChoice();

    if(userChoice == compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            // scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        } else if(userChoice === "scissor"){
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});