const hoverDropdownPairs = [
    { button: document.getElementById("store-btn"), dropdown: document.getElementById("store-dropdown-products") },
    { button: document.getElementById("mac-btn"), dropdown: document.getElementById("mac-dropdown-products") },
    { button: document.getElementById("ipad-btn"), dropdown: document.getElementById("ipad-dropdown-products") },
    { button: document.getElementById("iphone-btn"), dropdown: document.getElementById("iphone-dropdown-products") },
    { button: document.getElementById("watch-btn"), dropdown: document.getElementById("watch-dropdown-products") },
    { button: document.getElementById("airpods-btn"), dropdown: document.getElementById("airpods-dropdown-products") },
    { button: document.getElementById("tvHome-btn"), dropdown: document.getElementById("tvHome-dropdown-products") },
    { button: document.getElementById("entertainment-btn"), dropdown: document.getElementById("entertainment-dropdown-products") },
    { button: document.getElementById("accessories-btn"), dropdown: document.getElementById("accessories-dropdown-products") },
    { button: document.getElementById("support-btn"), dropdown: document.getElementById("support-dropdown-products") },
];

const clickDropdownPairs = [
    { button: document.getElementById("search-btn"), dropdown: document.getElementById("search-dropdown-products") },
    { button: document.getElementById("bag-btn"), dropdown: document.getElementById("bag-dropdown-products") }
];

const blurOverlay = document.querySelector(".blur-overlay");

const checkBlur = () => {
    let isActive = false;
    hoverDropdownPairs.forEach(pair => {
        if (pair.dropdown.classList.contains("active")) {
            isActive = true;
        }
    });
    clickDropdownPairs.forEach(pair => {
        if (pair.dropdown.classList.contains("active")) {
            isActive = true;
        }
    });
    if (isActive) {
        blurOverlay.classList.add("blur-bg");
    } else {
        blurOverlay.classList.remove("blur-bg");
    }
}

// Event listeners for hoverDropdownPairs
hoverDropdownPairs.forEach(pair => {
    if (pair.button && pair.dropdown) {
        pair.button.addEventListener("mouseover", () => {
            pair.dropdown.classList.add("active");
            checkBlur();
        });
        pair.button.addEventListener("mouseout", () => {
            pair.dropdown.classList.remove("active");
            checkBlur();
        });
        pair.dropdown.addEventListener("mouseover", () => {
            pair.dropdown.classList.add("active");
            checkBlur();
        });
        pair.dropdown.addEventListener("mouseout", () => {
            pair.dropdown.classList.remove("active");
            checkBlur();
        });
    }
});

// Event listeners for clickDropdownPairs
clickDropdownPairs.forEach(pair => {
    if (pair.button && pair.dropdown) {
        pair.button.addEventListener("click", () => {
            pair.dropdown.classList.toggle("active");
            checkBlur();
        });
    }
});



