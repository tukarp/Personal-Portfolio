// Sidebar active section changer
let navLinks = document.querySelectorAll("a.inner-link");

// Sidebar active section changer function
navLinks.forEach((item) => { // Looping through all the links
    item.addEventListener("click", function (event) { // Adding click event listener to all the links
        document.querySelector("nav ul li a.active").classList.remove("active"); // Removing active class from the current active link
        document.querySelector(`nav ul li a[href='${item.getAttribute('href')}']`).classList.add("active"); // Adding active class to the clicked link
        document.querySelector("main > section.active").classList.remove("active"); // Removing active class from the current active section
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add("active"); // Adding active class to the section that is linked to the clicked link
    });
});

// Sidebar menu toggle function for mobile
document.querySelector("#sidebar .toggle-sidebar").addEventListener("click", function () { // Adding click event listener to the toggle button
    document.querySelector('#sidebar').classList.toggle("open"); // Toggling the open class on the sidebar
});

// Get all the testimonial images in the testimonial section
let testimonialImages = document.querySelectorAll('#testimonial .images img');

// Add click event listeners to testimonial images
testimonialImages.forEach((item, index) => {
    let position = index + 1;

    item.addEventListener('click', function () {
        // Remove the "active" class from all images and comments
        document.querySelector('#testimonial .images img.active').classList.remove('active');
        document.querySelector(`#testimonial .images img:nth-child(${position})`).classList.add('active');

        document.querySelector('#testimonial .comments .item.active').classList.remove('active');
        document.querySelector(`#testimonial .comments .item:nth-child(${position})`).classList.add('active');
    })
})

// Get all the contact form input and textarea items
let contactFromItems = document.querySelectorAll('#contact_me .form input, #contact_me .form textarea');

// Add focus and blur event listeners to contact form items
contactFromItems.forEach((item) => {
    item.addEventListener('focus', function () {
        // Add the "focus" class to the parent element when focused
        item.parentElement.classList.add('focus');
    })

    item.addEventListener('blur', function () {
        if (!item.value) {
            // Remove the "focus" class from the parent element when blurred and no value is entered
            item.parentElement.classList.remove('focus');
        }
    })
})


