// script.js

document.getElementById('calculate-btn').addEventListener('click', calculateTotalTime);

function calculateTotalTime() {
    // Get swim time
    const swimHours = parseInt(document.getElementById('swim-hours').value) || 0;
    const swimMinutes = parseInt(document.getElementById('swim-minutes').value) || 0;
    const swimSeconds = parseInt(document.getElementById('swim-seconds').value) || 0;

    // Get T1 time
    const t1Minutes = parseInt(document.getElementById('t1-minutes').value) || 0;
    const t1Seconds = parseInt(document.getElementById('t1-seconds').value) || 0;

    // Get bike time
    const bikeHours = parseInt(document.getElementById('bike-hours').value) || 0;
    const bikeMinutes = parseInt(document.getElementById('bike-minutes').value) || 0;
    const bikeSeconds = parseInt(document.getElementById('bike-seconds').value) || 0;

    // Get T2 time
    const t2Minutes = parseInt(document.getElementById('t2-minutes').value) || 0;
    const t2Seconds = parseInt(document.getElementById('t2-seconds').value) || 0;

    // Get run time
    const runHours = parseInt(document.getElementById('run-hours').value) || 0;
    const runMinutes = parseInt(document.getElementById('run-minutes').value) || 0;
    const runSeconds = parseInt(document.getElementById('run-seconds').value) || 0;

    // Convert all times to seconds
    const totalSeconds =
        (swimHours * 3600) + (swimMinutes * 60) + swimSeconds +
        (t1Minutes * 60) + t1Seconds +
        (bikeHours * 3600) + (bikeMinutes * 60) + bikeSeconds +
        (t2Minutes * 60) + t2Seconds +
        (runHours * 3600) + (runMinutes * 60) + runSeconds;

    // Convert total seconds back to hours, minutes, and seconds
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Format time to HH:MM:SS
    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

    // Display result
    document.getElementById('total-time').textContent = formattedTime;
}

function padZero(num) {
    return num.toString().padStart(2, '0');
}
