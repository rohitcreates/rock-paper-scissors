let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const msgPara = document.querySelector("#msg");



const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};



const showMsg = (message, status) => {
    msgPara.innerText = message;

    msgPara.classList.remove("win", "lose");

    if (status === "win") msgPara.classList.add("win");
    else if (status === "lose") msgPara.classList.add("lose");
};



const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        showMsg(`It's a Draw! You both chose ${userChoice}`, "draw");
        return;
    }

    let userWin = true;

    if (userChoice === "rock") {
        userWin = compChoice === "scissors";
    } else if (userChoice === "paper") {
        userWin = compChoice === "rock";
    } else {
        userWin = compChoice === "paper";
    }

    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        showMsg(`You Win! ${userChoice} beats ${compChoice}`, "win");
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        showMsg(`You Lose! ${compChoice} beats ${userChoice}`, "lose");
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
