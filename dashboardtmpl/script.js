// Toggle Dark Mode
document.getElementById('toggle-dark-mode').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
});

// Restore Dark Mode Preference
if (localStorage.getItem('dark-mode') === 'true') {
  document.body.classList.add('dark-mode');
}

// Fetch and Display Data
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    // Update cards with mock data
    document.getElementById('total-users').textContent = users.length;
    document.getElementById('new-signups').textContent = Math.floor(users.length / 2);
    document.getElementById('revenue').textContent = `$${users.length * 1000}`;
    
    // Populate chart
    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: users.map(user => user.name),
        datasets: [{
          label: 'User Revenue',
          data: users.map(user => Math.floor(Math.random() * 1000)),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      }
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    alert('Failed to fetch data.');
  }
}

// Initialize
fetchData();
