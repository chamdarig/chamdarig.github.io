// script.js

document.getElementById('race-type').addEventListener('change', setPreset);
document.getElementById('calculate-btn').addEventListener('click', calculateTotalTime);

function setPreset() {
    const raceType = document.getElementById('race-type').value;
    const swimDistance = document.getElementById('swim-distance');
    const bikeDistance = document.getElementById('bike-distance');
    const runDistance = document.getElementById('run-distance');

    switch(raceType) {
        case 'sprint':
            swimDistance.value = 0.75;
            bikeDistance.value = 20;
            runDistance.value = 5;
            break;
        case 'olympic':
            swimDistance.value = 1.5;
            bikeDistance.value = 40;
            runDistance.value = 10;
            break;
        case 'half-ironman':
            swimDistance.value = 1.9;
            bikeDistance.value = 90;
            runDistance.value = 21.1;
            break;
        case 'ironman':
            swimDistance.value = 3.8;
            bikeDistance.value = 180;
            runDistance.value = 42.2;
            break;
        default:
            swimDistance.value = 0;
            bikeDistance.value = 0;
            runDistance.value = 0;
    }
}

function calculateTotalTime() {
    const swimDistance = parseFloat(document.getElementById('swim-distance').value);
    const swimPace = parseFloat(document.getElementById('swim-pace').value);
    const bikeDistance = parseFloat(document.getElementById('bike-distance').value);
    const bikePace = parseFloat(document.getElementById('bike-pace').value);
    const runDistance = parseFloat(document.getElementById('run-distance').value);
    const runPace = parseFloat(document.getElementById('run-pace').value);
    const t1Time = parseInt(document.getElementById('t1-time').value) || 0;
    const t2Time = parseInt(document.getElementById('t2-time').value) || 0;

    const validationMessage = validateInputs(swimDistance, swimPace, bikeDistance, bikePace, runDistance, runPace);
    if (validationMessage) {
        document.getElementById('validation-message').textContent = validationMessage;
        return;
    }

    document.getElementById('validation-message').textContent = '';

    // Calculate total time in seconds
    const swimTime = swimDistance * swimPace * 60; // swimPace is in min/km
    const bikeTime = bikeDistance / bikePace * 3600; // bikePace is in km/h
    const runTime = runDistance * runPace * 60; // runPace is in min/km
    const totalTime = swimTime + bikeTime + runTime + t1Time + t2Time;

    // Convert to HH:MM:SS
    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    const seconds = Math.floor(totalTime % 60);

    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    document.getElementById('total-time').textContent = formattedTime;
}

function padZero(num) {
    return num.toString().padStart(2, '0');
}

function validateInputs(swimDistance, swimPace, bikeDistance, bikePace, runDistance, runPace) {
    if (swimDistance < 0 || swimPace <= 0 || bikeDistance < 0 || bikePace <= 0 || runDistance < 0 || runPace <= 0) {
        return 'All distances must be non-negative and all paces must be positive numbers.';
    }
    if (swimDistance > 4 || bikeDistance > 200 || runDistance > 50) {
        return 'Distances seem too large. Please check your inputs.';
    }
    if (swimPace < 1 || swimPace > 10 || bikePace < 5 || bikePace > 60 || runPace < 3 || runPace > 20) {
        return 'Pace values are outside of reasonable ranges.';
    }
    return '';
}
