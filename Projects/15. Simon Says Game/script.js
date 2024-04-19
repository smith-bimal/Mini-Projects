const h2 = document.querySelector("h2");
const levelIndicator = document.querySelector(".level-container");

let isStart = false;
let level = 0;
let score = 0;

let gameSeq = [];
let userSeq = [];

let btnColors = ["red", "green", "yellow", "blue"];
let highScore = 0;

document.body.addEventListener("keypress", () => {
    if (isStart == false) {
        isStart = true;
        h2.innerText = "Score: " + score;
        document.body.style.backgroundColor = "#1a1a1a";

        levelUp();
    }
})

function levelUp() {
    userSeq = [];
    level++;

    checkHighScore();
    h2.innerText = "Score: " + score + "\n Highest Score: " + highScore;
    levelIndicator.firstChild.innerText = level;

    //Random Button
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btnColors[randIdx];
    let randButton = document.querySelector(`.${randColor}`);
    btnFlash(randButton, randColor);

    gameSeq.push(randColor);
    console.log(gameSeq);
}

function btnFlash(btn, color) {
    setTimeout(() => {
        btn.classList.add("flash");
        btn.style.boxShadow = `0px 0px 15px 5px #ffffff, 0px 0px 10px 15px ${color}`;
    }, 500);

    setTimeout(() => {
        btn.classList.remove("flash");
        btn.style.boxShadow = '';
    }, 1000);
}

function btnPress() {
    userSeq.push(this.getAttribute("id"));
    console.log(userSeq);

    checkAns(userSeq.length - 1);
}


let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function checkAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length == userSeq.length) {
            score += 5;
            levelUp();
        }
    } else {
        gameOver();
    }
}

function gameOver() {
    h2.innerText = "Game Over!!! \n Final Score: " + score + "\n Press any key to start the game again.";
    document.body.style.backgroundColor = "#610e0e";
    isStart = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    score = 0;
}

function checkHighScore() {
    if (score >= highScore) {
        highScore = score;
    }
}