function convertTime() {
// Get the input values
    let seconds = parseFloat(document.getElementById("secondsInput").value) || 0;
    let milliseconds = parseFloat(document.getElementById("millisecondsInput").value) || 0;

    // Convert milliseconds to seconds and add to total seconds
    let totalSeconds = seconds + milliseconds / 1000;

    // Convert seconds to hours and minutes
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let remainingSeconds = (totalSeconds % 60).toFixed(2);

    // Display the result
    let result = `${hours} hours, ${minutes} minutes, and ${remainingSeconds} seconds.`;
    document.getElementById("result").textContent = result;
}
