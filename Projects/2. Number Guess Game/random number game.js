let chance = 1;
let randomNumber = Math.round(Math.random() * 100);

console.log(randomNumber);

function showResult() {
    let guessNumber = parseInt(document.getElementById("guessNumber").value);

    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
        document.getElementById("result").innerHTML = "Please enter a valid number between 1 and 100.";
        return;
    }

    if (guessNumber === randomNumber) {
        document.getElementById("result").innerHTML = "Congratulations! You guessed the number correctly, and your score is: " + (100 - chance);
    } else {
        if (randomNumber > 80) {
            document.getElementById("result").innerHTML = "Try again. The number is greater than 80.";
        } else if (randomNumber > 50) {
            document.getElementById("result").innerHTML = "Try again. The number is greater than 50 and less than or equal to 80.";
        } else if (randomNumber > 30) {
            document.getElementById("result").innerHTML = "Try again. The number is greater than 30 and less than or equal to 50.";
        } else {
            document.getElementById("result").innerHTML = "Try again. The number is greater than 0 and less than or equal to 30.";
        }

        chance += 5;
    }
    document.getElementById("guessNumber").value = "";
}
