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

// Typed.js for the Home section header
new Typed(".field h2", { // Creating a new Typed.js instance for the Home section field h2 header
    strings: // Defining the strings to be typed
        ["Junior Software Tester", "Aspiring Software Engineer",
         "Aspiring Full Stack Developer", "Student at UMCS, Lublin"],
    typeSpeed: 80, // Defining typing speed
    backSpeed: 50, // Defining backspacing speed
    loop: true, // Defining looping the strings
});

// Meteor shower animation
for (let i = 0; i < 15; i++) { // Looping 15 times
    let meteor = document.createElement("span"); // Creating a new span element
    meteor.classList = "meteor"; // Adding meteor class to the span element
    document.querySelector("#home .meteor-shower").appendChild(meteor); // Appending the span element to the meteor shower container
}

// Shuffle.js filter buttons
const filterButtons = document.querySelectorAll('#my_work .filters button');

// Defining shuffle instance for the projects in My Work section
const shuffleInstance = new Shuffle(document.querySelector('#my_work .work-items'), { // Creating a new Shuffle instance
    itemSelector: '.item' // Defining the item selector
});

// Shuffle.js filter buttons event listeners
filterButtons.forEach((item) => { // Looping through all the filter buttons
    item.addEventListener('click', workFilter); // Adding click event listener to all the filter buttons
})

// Defining the workFilter function
function workFilter(event) {
    const clickedButton = event.currentTarget; // Getting the clicked button
    const clickedButtonGroup = clickedButton.getAttribute('data-group'); // Getting the clicked button group
    const activeButton = document.querySelector('#my_work .filters button.active'); // Getting the currently active button

    // Removing active class from the currently active button
    activeButton.classList.remove('active');
    // Adding active class to the clicked button
    clickedButton.classList.add("active");

    // Filtering the projects in My Work section
    shuffleInstance.filter(clickedButtonGroup);
}

// Defining workModal Bootstrap modal
var workModal = new bootstrap.Modal(document.getElementById('workModal'));

// Defining workElements variable
const workElements = document.querySelectorAll("#my_work .work-items .wrap");

// Adding click event listener to all the projects in My Work section
workElements.forEach((item) => {
    item.addEventListener('click', function () {
        // Update the image source in the work modal
        document.querySelector('#workModal .modal-body img').setAttribute('src', item.getAttribute('data-image'));

        // Update the title in the work modal
        document.querySelector('#workModal .modal-body .title').innerText = item.getAttribute('data-title');

        // Update the description in the work modal
        document.querySelector('#workModal .modal-body .description').innerText = item.getAttribute('data-description');

        // Update the client information in the work modal
        document.querySelector('#workModal .modal-body .client .value').innerText = item.getAttribute('data-client');

        // Update the completion date in the work modal
        document.querySelector('#workModal .modal-body .completed .value').innerText = item.getAttribute('data-completed');

        // Update the skills used in the work modal
        document.querySelector('#workModal .modal-body .skills .value').innerText = item.getAttribute('data-skills');

        // Update the project link in the work modal
        document.querySelector('#workModal .modal-body .project-link a').setAttribute('href', item.getAttribute('data-project-link'));

        // Show the work modal
        workModal.show();
    })
})

// Get the work modal element by its ID
var workModalElement = document.getElementById('workModal');

// Add an event listener for the "show.bs.modal" event of the work modal
workModalElement.addEventListener('show.bs.modal', function (event) {
    // Add a blur effect to the "my_work" and "sidebar" elements when the modal is shown
    document.getElementById('my_work').classList.add('blur');
    document.getElementById('sidebar').classList.add('blur');
})

// Add an event listener for the "hide.bs.modal" event of the work modal
workModalElement.addEventListener('hide.bs.modal', function (event) {
    // Remove the blur effect from the "my_work" and "sidebar" elements when the modal is hidden
    document.getElementById('my_work').classList.remove('blur');
    document.getElementById('sidebar').classList.remove('blur');
})

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
