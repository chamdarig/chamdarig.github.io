// Obliczanie wschodów i zachodów słońca na podstawie wybranej daty i lokalizacji
document.getElementById('calculateBtn').addEventListener('click', function () {
    const date = new Date(document.getElementById('date').value);
    const citySelect = document.getElementById('city');
    const lat = citySelect.options[citySelect.selectedIndex].dataset.lat;
    const lon = citySelect.options[citySelect.selectedIndex].dataset.lon;

    if (!isNaN(date.getTime())) {
        const { sunrise, sunset } = SunCalc.getTimes(date, lat, lon);
        const sunriseStr = formatTime(sunrise);
        const sunsetStr = formatTime(sunset);
        document.getElementById('result').innerText = `Wschód słońca: ${sunriseStr}, Zachód słońca: ${sunsetStr}`;
    } else {
        document.getElementById('result').innerText = 'Wybierz prawidłową datę.';
    }
});

function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Rysowanie wykresu dla całego roku
document.getElementById('plotBtn').addEventListener('click', function () {
    const citySelect = document.getElementById('city');
    const lat = citySelect.options[citySelect.selectedIndex].dataset.lat;
    const lon = citySelect.options[citySelect.selectedIndex].dataset.lon;

    const startDate = new Date("2025-01-01");
    const sunriseTimes = [];
    const sunsetTimes = [];
    const labels = [];

    for (let i = 0; i < 365; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);
        const { sunrise, sunset } = SunCalc.getTimes(date, lat, lon);
        sunriseTimes.push(convertTimeToDecimal(sunrise));
        sunsetTimes.push(convertTimeToDecimal(sunset));
        labels.push(date.toISOString().slice(5, 10)); // Format "MM-DD"
    }

    drawAnnualChart(labels, sunriseTimes, sunsetTimes);
});

function convertTimeToDecimal(time) {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    return hours + minutes / 60;
}

function drawAnnualChart(labels, sunriseTimes, sunsetTimes) {
    const ctx = document.getElementById('dayLengthChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Wschód słońca',
                    data: sunriseTimes,
                    borderColor: 'rgb(255, 165, 0)',
                    tension: 0.1,
                },
                {
                    label: 'Zachód słońca',
                    data: sunsetTimes,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1,
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Godzina'
                    },
                    ticks: {
                        callback: function (value) {
                            const hours = Math.floor(value);
                            const minutes = Math.round((value - hours) * 60);
                            return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
                        }
                    }
                },
                x: {
                    ticks: {
                        maxTicksLimit: 12
                    }
                }
            }
        }
    });
}
