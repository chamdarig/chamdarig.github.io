// Event dla widoku całorocznego
document.getElementById('plotBtn').addEventListener('click', function () {
    const citySelect = document.getElementById('city');
    const lat = citySelect.options[citySelect.selectedIndex].dataset.lat;
    const lon = citySelect.options[citySelect.selectedIndex].dataset.lon;

    // Daty i długości dnia
    const startDate = new Date("2025-01-01");
    const sunriseTimes = [];
    const sunsetTimes = [];
    const labels = [];

    for (let i = 0; i < 365; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);
        const { sunrise, sunset } = calculateSunTimes(date, lat, lon);
        sunriseTimes.push(convertTimeToDecimal(sunrise)); // Konwertujemy na godziny (np. 6.30)
        sunsetTimes.push(convertTimeToDecimal(sunset));
        labels.push(date.toISOString().slice(5, 10)); // Format "MM-DD"
    }

    drawAnnualChart(labels, sunriseTimes, sunsetTimes);
});

// Funkcja pomocnicza: Konwersja godziny do zapisu dziesiętnego (np. "06:30" -> 6.5)
function convertTimeToDecimal(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours + minutes / 60;
}

// Rysowanie wykresu dla całego roku
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
                        callback: function(value) {
                            const hours = Math.floor(value);
                            const minutes = Math.round((value - hours) * 60);
                            return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
                        }
                    }
                },
                x: {
                    ticks: {
                        maxTicksLimit: 12 // Zmniejszamy ilość etykiet na osi X
                    }
                }
            }
        }
    });
}
