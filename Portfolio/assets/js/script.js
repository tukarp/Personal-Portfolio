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
document.querySelector("#sidebar .toggle-sidebar").click().addEventListener("click", function() {
    document.querySelector("#sidebar").classList.toggle("open");

});