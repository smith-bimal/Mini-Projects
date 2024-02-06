let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("reset-btn");
let msgBox = document.querySelector("#msg");
let msgContainer = document.body.getElementsByClassName("msg-container")[0];
let newGame = document.querySelector("#new-game-btn");
let resetGame = document.querySelector("#reset-btn");


const winningArr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];
let turnO = false;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "X";
            turnO = false;
        } else {
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
})

const checkWinner = () => {
    for (pattern of winningArr) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                msgBox.innerHTML = `Player ${pos1} wins!`;
                msgContainer.style.transform = "scale(1)";
                msgContainer.style.opacity = "1";
            }
        }
    }
}


newGame.addEventListener("click", () => {
    msgContainer.style.transform = "scale(0)";
    msgContainer.style.opacity = "0";
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
})

resetGame.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
})