const buttons = document.querySelectorAll(".button");
const buttonContainer = document.querySelector(".container");
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
let isNight = true;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (isNight) {
            button.style.animation = "slide-right 0.5s ease forwards";
            sun.style.opacity = "0";
            moon.style.opacity = "1";
            moon.style.transform = "rotate(225deg)";
            sun.style.transform = "rotate(0deg)";
            document.body.style.backgroundColor = "#363638";
            button.style.backgroundColor = "#3e3e3e";
            button.style.color = "#ffffff70";
            buttonContainer.style.boxShadow = "inset 0px 8px 10px #232324, inset 0px -8px 20px #49494c";
            button.style.boxShadow = "5px 12px 17px #232324";
            isNight = false;
        } else {
            button.style.animation = "slide-left 0.5s ease forwards";
            sun.style.opacity = "1";
            moon.style.opacity = "0";
            moon.style.transform = "rotate(0deg)";
            sun.style.transform = "rotate(180deg)";
            document.body.style.backgroundColor = "#e8e8e8";
            button.style.backgroundColor = "#fff";
            button.style.color = "#00000070";
            buttonContainer.style.boxShadow = "inset 0px 8px 10px #aeaeae, inset 0px -8px 20px #ffffff";
            button.style.boxShadow = "5px 12px 17px #c5c5c5";
            isNight = true;
        }
    })
})