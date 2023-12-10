// Setting the target date for the timer
const startDay = new Date("2023-07-03");

// Defining the updateTimer function
function updateTimer() {
    var currentDate = new Date();
    var timeDifference = currentDate - startDay;

    var months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.44));
    var years = Math.floor(months / 12);
    months %= 12;

    var yearText = years === 1 ? 'year' : 'years';
    var monthText = months === 1 ? 'month' : 'months';

    const timerText = 
      years > 0
        ? `${years} ${yearText} and ${months} ${monthText}`
            : months > 0
        ? `${months} ${monthText}`
            : 'Less than a month';

    document.getElementById("timer").innerHTML = timerText;
}

// Initial call to set the timer
updateTimer();

// Update the timer every second
setInterval(updateTimer, 1000);
