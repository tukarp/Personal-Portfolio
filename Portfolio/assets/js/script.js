// Sidebar active section changer
let navLinks = document.querySelectorAll("nav ul li a");

// Sidebar active section changer function
navLinks.forEach((item) => {
    item.addEventListener("click", function() {
        document.querySelector("nav ul li a.active").classList.remove("active");
        item.classList.add("active");
        document.querySelector("main > section.active").classList.remove("active");
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add("active");
    });
});



// Sidebar menu toggle function for mobile
document.querySelector("#sidebar .toggle-sidebar").addEventListener("click", function() {
    document.querySelector('#sidebar').classList.toggle("open");
});



// Typed.js for the header
new Typed(".field h2", {
    strings: ["Back-End Developer", "Student"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true,
});



// Meteor shower animation
for(let i = 0; i < 15; i++) {
    let meteor = document.createElement("span");
    meteor.classList = "meteor";
    document.querySelector("#home .meteor-shower").appendChild(meteor);
}
