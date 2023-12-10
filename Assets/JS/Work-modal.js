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
