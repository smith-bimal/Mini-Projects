const cards = document.querySelectorAll(".card");
const innerCircles = document.querySelectorAll(".circle");
const bigCard = document.querySelector(".card-enlarge");
const bigCardImage = document.querySelector(".card-enlarge img");
let colorArr = ["#7cff8f", "#f1dcc5", "#8f80b9", "#e8c0ff", "#cdeeff", "#7dd4ff"]

// transforming size of card when hovered
cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.firstElementChild.style.transform = "scale(3.5)";
        console.log();
    })
    card.addEventListener("mouseout", () => {
        card.firstElementChild.style.transform = "scale(1)";
    })
})

//changing profile images
for (let i = 0; i < cards.length; i++) {
    cards[i].lastElementChild.firstElementChild.src = `Images/${i + 1}.png`;
}


// changing color of elements when hovered and showing enlarged card when clicked read more
for (let i = 0; i < innerCircles.length; i++) {
    innerCircles[i].style.backgroundColor = colorArr[i];

    innerCircles[i].parentNode.lastElementChild.lastElementChild.style.borderColor = colorArr[i];
    innerCircles[i].parentNode.lastElementChild.lastElementChild.lastElementChild.style.backgroundColor = colorArr[i];
    innerCircles[i].parentNode.lastElementChild.lastElementChild.lastElementChild.style.color = "white";

    innerCircles[i].parentNode.addEventListener("mouseover", () => {
        innerCircles[i].parentNode.lastElementChild.lastElementChild.style.borderColor = "white";
        innerCircles[i].parentNode.lastElementChild.lastElementChild.lastElementChild.style.backgroundColor = "white";
        innerCircles[i].parentNode.lastElementChild.lastElementChild.lastElementChild.style.color = colorArr[i];
    })

    innerCircles[i].parentNode.addEventListener("mouseout", () => {
        innerCircles[i].parentNode.lastElementChild.lastElementChild.style.borderColor = colorArr[i];
        innerCircles[i].parentNode.lastElementChild.lastElementChild.lastElementChild.style.backgroundColor = colorArr[i];
        innerCircles[i].parentNode.lastElementChild.lastElementChild.lastElementChild.style.color = "white";
    })

    innerCircles[i].nextElementSibling.lastElementChild.lastElementChild.addEventListener("click", () => {
        bigCard.style.transform = "translate(-50%, -50%) scale(1)";
        bigCard.style.backgroundColor = colorArr[i];
        bigCardImage.src = `Images/${i + 1}.png`;
        document.querySelector(".overlay").classList.add("blur");
    })

    bigCard.firstElementChild.addEventListener("click", () => {
        bigCard.style.transform = "translate(-50%, -50%) scale(0)";
        innerCircles[i].parentNode.parentNode.style.display = "flex";
        document.querySelector(".overlay").classList.remove("blur");
    })
}

