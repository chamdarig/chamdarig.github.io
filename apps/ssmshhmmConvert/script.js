function convertTime() {
    // Get the input value
    let inputTime = parseFloat(document.getElementById("timeInput").value);

    if (isNaN(inputTime)) {
        document.getElementById("result").textContent = "Please enter a valid number.";
        return;
    }

    // Separate the seconds and milliseconds
    let totalSeconds = Math.floor(inputTime);
    let milliseconds = (inputTime - totalSeconds) * 1000;

    // Add the milliseconds to the total seconds
    let combinedSeconds = totalSeconds + milliseconds / 1000;

    // Convert to hours and minutes
    let hours = Math.floor(combinedSeconds / 3600);
    let minutes = Math.floor((combinedSeconds % 3600) / 60);
    let remainingSeconds = (combinedSeconds % 60).toFixed(3);

    // Display the result
    let result = `${hours} hours, ${minutes} minutes, and ${remainingSeconds} seconds.`;
    document.getElementById("result").textContent = result;
}
