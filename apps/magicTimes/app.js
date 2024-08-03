// Function to save the entered time
function saveTime() {
    const hourInput = document.getElementById('hourInput');
    const minuteInput = document.getElementById('minuteInput');
    const hourValue = hourInput.value.trim();
    const minuteValue = minuteInput.value.trim();

    // Regular expression to validate hours (00-23) and minutes (00-59)
    const hourPattern = /^([01]\d|2[0-3])$/;
    const minutePattern = /^[0-5]\d$/;

    if (hourPattern.test(hourValue) && minutePattern.test(minuteValue)) {
        // Create a new table row and cell
        const tableBody = document.querySelector('#timeTable tbody');
        const newRow = document.createElement('tr');
        const newCell = document.createElement('td');

        // Set the cell's text content to the entered time
        newCell.textContent = `${hourValue}:${minuteValue}`;

        // Append the cell to the row, and the row to the table body
        newRow.appendChild(newCell);
        tableBody.appendChild(newRow);

        // Clear the input fields
        hourInput.value = '';
        minuteInput.value = '';

        // Focus back to the hour input
        hourInput.focus();
    } else {
        alert('Please enter a valid time in the format HH:MM');
    }
}

// Event listener for hours input
document.getElementById('hourInput').addEventListener('input', function() {
    const hourInput = document.getElementById('hourInput');
    const hourValue = hourInput.value;

    // If the length of the entered hours is 2, move focus to the minutes input
    if (hourValue.length === 2) {
        document.getElementById('minuteInput').focus();
    }
});

// Event listener for Save button
document.getElementById('saveButton').addEventListener('click', saveTime);

// Event listener for keydown events on input fields to trigger save on Enter
document.getElementById('hourInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        saveTime();
    }
});

document.getElementById('minuteInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        saveTime();
    }
});

