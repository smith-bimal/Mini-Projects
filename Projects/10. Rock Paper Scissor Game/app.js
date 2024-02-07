let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const finalUserScore = document.querySelector("#userScore");
const finalCompScore = document.querySelector("#compScore");

const reset = document.querySelector("#reset-btn");

choices.forEach((choice) => {
    choice.addEventListener(("click"), () => {
        const userChoice = choice.getAttribute("id");
        checkWinner(userChoice);
    })
})

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const checkWinner = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "scissor" ? true : false;
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        } else {
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin);
    }
}

const drawGame = () => {
    msg.innerText = "Your game is draw !!!"
    msg.style.color = "white";
}

const showWinner = (userWin) => {
    if (userWin) {
        msg.innerText = "You are winner";
        msg.style.color = "green";
        userScore++;
        finalUserScore.innerText = userScore;

    } else {
        msg.innerText = "Computer is the winner";
        msg.style.color = "red";
        compScore++;
        finalCompScore.innerText = compScore;
    }
}

reset.addEventListener(("click"), () => {
    compScore = 0;
    userScore = 0;
    msg.innerText = "Pick Your Move.";
    msg.style.color = "black";
    finalCompScore.innerText = compScore;
    finalUserScore.innerText = userScore;
})