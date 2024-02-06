let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let boxes = document.querySelectorAll(".box");
let smallWin = document.querySelector("#small-msg");
let turnO = false;
let playerO = document.querySelector("#playerOScore");
let countO = 0;
let playerX = document.querySelector("#playerXScore");
let countX = 0;

let winningArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "X";
            turnO = false;
            box.style.color = ("#8052ec");
        } else {
            box.innerText = "O";
            turnO = true;
            box.style.color = ("#d161ff");
        }
        box.disabled = true;
        checkWinner();
    });
});

let checkWinner = () => {
    for (let idx of winningArr) {
        let val1 = boxes[idx[0]].innerText;
        let val2 = boxes[idx[1]].innerText;
        let val3 = boxes[idx[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                disableBoxes();

                if (val1 == "X") {
                    countX++;
                    playerX.innerText = countX;
                    smallWin.innerText = "Player X won.";

                } else {
                    countO++;
                    playerO.innerText = countO;
                    smallWin.innerText = "Player O won.";
                }

                if (countX == 5 || countO == 5) {
                    msg.innerText = `Player ${val1} is the final winner.`
                    msgContainer.style.opacity = "1";
                    msgContainer.style.transform = "scale(1)";
                }
            }
        }
    }
}

let disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

resetBtn.addEventListener("click", () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        smallWin.innerText = "";
    }
})

newGame.addEventListener("click", () => {
    for (let box of boxes) {
        countX = 0;
        countO = 0;
        msgContainer.style.opacity = "0";
        msgContainer.style.transform = "scale(0)";
        box.disabled = false;
        smallWin.innerText = "";
        box.innerText = "";
        playerO.innerText = countO;
        playerX.innerText = countX;
    }
})
