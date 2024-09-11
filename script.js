window.onload = function () {
    // Initializing timer values
    var seconds = 00; 
    var tens = 00; 

    // DOM elements for displaying time
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");

    // Button elements for start, stop, reset, and lap actions
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var buttonLap = document.getElementById('button-lap');

    // Element to store lap times
    var lapList = document.getElementById('laps');
    var lapCounter = 1; // Counter for lap numbers
    var Interval; // To store setInterval function

    // Audio file for sound effects
    const audio = new Audio();
    audio.src = "audio/clocksound.mp3"; // Path to clock sound file

    // Start button functionality
    buttonStart.onclick = function() {
        audio.play(); // Play audio
        clearInterval(Interval); // Clear previous intervals if any
        Interval = setInterval(startTimer, 10); // Start timer, every 10ms
    }

    // Stop button functionality
    buttonStop.onclick = function() {
        audio.play(); // Play audio
        clearInterval(Interval); // Stop timer
    }

    // Reset button functionality
    buttonReset.onclick = function() {
        audio.play(); // Play audio
        clearInterval(Interval); // Stop timer
        tens = "00"; // Reset tens
        seconds = "00"; // Reset seconds
        appendTens.innerHTML = tens; // Update DOM
        appendSeconds.innerHTML = seconds; // Update DOM
        lapList.innerHTML = ""; // Clear lap list
        lapCounter = 1; // Reset lap counter
        storeLaps(); // Update stored laps
    }

    // Lap button functionality
    buttonLap.onclick = function () {
        audio.play(); // Play audio

        // Add current time and lap number to lap list
        lapList.innerHTML += '<table><tr> <span class="lap-seconds"><th>Time ' 
        + appendSeconds.innerHTML + '</span>:<span class="lap-tens">' 
        + appendTens.innerHTML + '</span></th> <th>Lap Number  ' + lapCounter + '</th>'+'</tr></table>';

        lapCounter++; // Increment lap counter
        storeLaps(); // Update stored laps
    }

    // Function to start the timer
    function startTimer() {
        tens++; // Increment tens (milliseconds)

        // If tens are less than or equal to 9, add a leading zero
        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }

        // Update tens without leading zero if greater than 9
        if (tens > 9){
            appendTens.innerHTML = tens;
        } 

        // If tens go beyond 99, increment seconds and reset tens
        if (tens > 99) {
            seconds++; // Increment seconds
            appendSeconds.innerHTML = "0" + seconds; // Add leading zero for seconds
            tens = 0; // Reset tens to 0
            appendTens.innerHTML = "0" + 0; // Display tens as "00"
        }

        // Remove leading zero if seconds are greater than 9
        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }

    // Function to store laps in local storage
    function storeLaps() {
        window.localStorage.myLaps = lapList.innerHTML; // Store lap list in browser storage
    }

    // Function to retrieve and display laps from local storage on page load
    function getLaps() {
        lapList.innerHTML = window.localStorage.myLaps; // Retrieve stored laps
    }

    // Retrieve laps when the page is loaded
    getLaps();
}
                   //start of dark theme code 
// Dark theme toggle functionality
const toggledark = document.getElementById('toggle-dark');
const body = document.body;

// Toggle between light and dark themes based on checkbox input
toggledark.addEventListener('input', e => {
    const isChecked = e.target.checked; // Check if dark theme checkbox is checked

    // Add or remove the 'dark-theme' class to the body based on the checkbox status
    if (isChecked) {
        body.classList.add('dark-theme'); // Apply dark theme
    } else {
        body.classList.remove('dark-theme'); // Remove dark theme
    }
}
                            //end of dark theme-code
);


  