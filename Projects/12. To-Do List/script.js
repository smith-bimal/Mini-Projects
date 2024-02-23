const inputBox = document.querySelector("#task-box");
const listContainer = document.querySelector(".list-box");

let addTask = () => {
    if (inputBox.value == '') {
        alert("you need to enter a task.")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let close = document.createElement("span");
        close.innerHTML = "X";
        li.appendChild(close);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentNode.remove();
        saveData();
    }
})

let saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

let showData = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();