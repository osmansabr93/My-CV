
// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// Current Year

document.getElementById("year").textContent =
    new Date().getFullYear();

// Download CV as PDF

document.getElementById("downloadCV").addEventListener("click", function () {
    window.print();
});
