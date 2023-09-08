// Sidebar active section changer
let navLinks = document.querySelectorAll("a.inner-link");

// Sidebar active section changer function
navLinks.forEach((item) => {                                                                                    // Looping through all the links
    item.addEventListener("click", function() {                                                                 // Adding click event listener to all the links
        document.querySelector("nav ul li a.active").classList.remove("active");                                // Removing active class from the current active link
        document.querySelector(`nav ul li a[href='${item.getAttribute('href')}']`).classList.add("active");     // Addind active class to the clicked link
        document.querySelector("main > section.active").classList.remove("active");                             // Removing active class from the current active section
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add("active");           // Adding active class to the section that is linked to the clicked link
    });
});



// Sidebar menu toggle function for mobile
document.querySelector("#sidebar .toggle-sidebar").addEventListener("click", function() {                       // Adding click event listener to the toggle button
    document.querySelector('#sidebar').classList.toggle("open");                                                // Toggling the open class on the sidebar
});



// Typed.js for the Home section header
new Typed(".field h2", {                                                                                        // Creating a new Typed.js instance for the Home section field h2 header
    strings:                                                                                                    // Defining the strings to be typed
        ["Junior Software Tester",
         "Aspiring Software Engineer",
          "Aspiring Full Stack Developer",
          "Student at UMCS, Lublin"],
    typeSpeed: 80,                                                                                              // Defining typing speed
    backSpeed: 50,                                                                                              // Defining backspacing speed
    loop: true,                                                                                                 // Defining looping the strings
});



// Meteor shower animation
for(let i = 0; i < 15; i++) {                                                                                   // Looping 15 times
    let meteor = document.createElement("span");                                                                // Creating a new span element
    meteor.classList = "meteor";                                                                                // Adding meteor class to the span element
    document.querySelector("#home .meteor-shower").appendChild(meteor);                                         // Appending the span element to the meteor shower container
}



// Shuffle.js filter buttons
const filterButtons = document.querySelectorAll('#my_work .filters button')

// Defining shuffle instance for the projects in My Work section
const shuffleInstance = new Shuffle(document.querySelector('#my_work .work-items'), {                           // Creating a new Shuffle instance
    itemSelector: '.item'                                                                                       // Defining the item selector
});

// Shuffle.js filter buttons event listeners
filterButtons.forEach((item) => {                                                                               // Looping through all the filter buttons
    item.addEventListener('click', workFilter)                                                                  // Adding click event listener to all the filter buttons
})

// Defining the workFilter function
function workFilter() {
    const clickedButton = event.currentTarget;                                                                  // Getting the clicked button
    const clickedButtonGroup = clickedButton.getAttribute('data-group');                                        // Getting the clicked button group
    const activeButton = document.querySelector('#my_work .filters button.active');                             // Getting the currently active button

    // Removing active class from the currently active button
    activeButton.classList.remove('active');
    // Adding active class to the clicked button
    clickedButton.classList.add("active");

    // Filtering the projects in My Work section
    shuffleInstance.filter(clickedButtonGroup)
}

// Defining workModal Bootstrap modal
var workModal = new bootstrap.Modal(document.getElementById('workModal'))

// Defining workElements variable
const workElements = document.querySelectorAll("#my_work .work-items .wrap");

// Adding click event listener to all the projects in My Work section
workElements.forEach((item) => {
    item.addEventListener('click', function () {
        document.querySelector('#workModal .modal-body img').setAttribute('src', item.getAttribute('data-image'))
        document.querySelector('#workModal .modal-body .title').innerText = item.getAttribute('data-title')
        document.querySelector('#workModal .modal-body .description').innerText = item.getAttribute('data-description')
        document.querySelector('#workModal .modal-body .client .value').innerText = item.getAttribute('data-client')
        document.querySelector('#workModal .modal-body .completed .value').innerText = item.getAttribute('data-completed')
        document.querySelector('#workModal .modal-body .skills .value').innerText = item.getAttribute('data-skills')
        document.querySelector('#workModal .modal-body .project-link a').setAttribute('href', item.getAttribute('data-project-link'))

        workModal.show();
    })
})

var workModalElement = document.getElementById('workModal')
workModalElement.addEventListener('show.bs.modal', function (event) {
    document.getElementById('my_work').classList.add('blur');
    document.getElementById('sidebar').classList.add('blur');
})

workModalElement.addEventListener('hide.bs.modal', function (event) {
    document.getElementById('my_work').classList.remove('blur');
    document.getElementById('sidebar').classList.remove('blur');
})





let testimonialImages = document.querySelectorAll('#testimonial .images img');

testimonialImages.forEach((item, index) => {
    let position = index + 1;

    item.addEventListener('click', function () {
        document.querySelector('#testimonial .images img.active').classList.remove('active')
        document.querySelector(`#testimonial .images img:nth-child(${position})`).classList.add('active')

        document.querySelector('#testimonial .comments .item.active').classList.remove('active')
        document.querySelector(`#testimonial .comments .item:nth-child(${position})`).classList.add('active')
    })
})





let contactFromItems = document.querySelectorAll('#contact_me .form input, #contact_me .form textarea');

contactFromItems.forEach((item) => {
    item.addEventListener('focus', function () {
        item.parentElement.classList.add('focus')
    })

    item.addEventListener('blur', function () {
        if (!item.value) {
            item.parentElement.classList.remove('focus')
        }
    })
})



document.addEventListener("DOMContentLoaded", function() {
    var nameInput = document.querySelector('input[name="name"]');
    var subjectInput = document.querySelector('input[name="subject"]');
    var messageInput = document.querySelector('textarea[name="message"]');
    var emailLink = document.getElementById('emailLink');

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var name = nameInput.value;
        var subject = subjectInput.value;
        var message = messageInput.value;
        var mailtoLink = "mailto:tomasz.wnuk.biznes@gmail.com?subject=" + encodeURIComponent(name + '\n' + subject) + "&body=" + encodeURIComponent(message);
        emailLink.href = mailtoLink;

        emailLink.click();
    })
});
