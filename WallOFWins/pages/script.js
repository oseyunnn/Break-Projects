// Get elements
const toggle = document.getElementById("navToggle");
const navbar = document.getElementById("navbar");

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
