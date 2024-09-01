// Mapping of numbers to segments (a-g)
const segmentMap = {
    '0': ['a', 'b', 'c', 'd', 'e', 'f'],
    '1': ['b', 'c'],
    '2': ['a', 'b', 'd', 'e', 'g'],
    '3': ['a', 'b', 'c', 'd', 'g'],
    '4': ['b', 'c', 'f', 'g'],
    '5': ['a', 'c', 'd', 'f', 'g'],
    '6': ['a', 'c', 'd', 'e', 'f', 'g'],
    '7': ['a', 'b', 'c'],
    '8': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    '9': ['a', 'b', 'c', 'd', 'f', 'g']
};

document.getElementById('timeInput').addEventListener('input', function() {
    const time = this.value;
    if (/^\d{2}:\d{2}$/.test(time)) {
        const [hours, minutes] = time.split(':');
        displayDigit('digit1', hours[0]);
        displayDigit('digit2', hours[1]);
        displayDigit('digit3', minutes[0]);
        displayDigit('digit4', minutes[1]);
    }
});

function displayDigit(digitId, number) {
    const digitElement = document.getElementById(digitId);
    digitElement.innerHTML = '';  // Clear previous segments

    const segments = segmentMap[number];
    segments.forEach(segment => {
        const segmentElement = document.createElement('div');
        segmentElement.className = `segment ${segment} on`;
        digitElement.appendChild(segmentElement);
    });

    // Add all segments for completeness
    ['a', 'b', 'c', 'd', 'e', 'f', 'g'].forEach(segment => {
        if (!segments.includes(segment)) {
            const segmentElement = document.createElement('div');
            segmentElement.className = `segment ${segment}`;
            digitElement.appendChild(segmentElement);
        }
    });
}
