const toggle = document.querySelector(".navIcon");
const navbar = document.querySelector(".navbar");
const floatingDiv = document.querySelector(".floatingDiv");
const addWinButton = document.getElementById("add-win-button");
const winInput = document.getElementById("win-input");
const firstPage = document.querySelector(".firstPage");
const secondPage = document.querySelector(".secondPage"); // FIXED: class selector

// Toggle menu on click
toggle.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent click from bubbling to document
    navbar.classList.toggle("open");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.closest(".navbarContainer")) {
        navbar.classList.remove("open");
    }
});

// Press Enter to trigger add button
winInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const winText = winInput.value.trim();
        if (winText !== "") {
            addWinButton.click();
        }
    }
});

addWinButton.addEventListener("click", (e) => {
    const winText = winInput.value.trim();
    if (winText === "") {

    } else{
        firstPage.style.display = "none";
        secondPage.style.display = "block";
    }
   
});

// Add Win Button click
addWinButton.addEventListener("click", (e) => {

     alert("Button clicked!");
   /* const winText = winInput.value.trim();
    if (winText === "") {
        alert("Please enter a win before adding.");
        return; // exit early
    }
    // Hide first page, show selector
    firstPage.style.display = "none";
    selector.style.display = "block";
    */
});
