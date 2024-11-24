// Mockup Data
let users = [];
let calendarEvents = [];

// Function to toggle between pages
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach((page) => page.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}

// Function to add a user
function addUser() {
  const name = prompt('Enter user name:');
  const role = prompt('Enter user role (e.g., resident, manager, admin):');
  if (name && role) {
    users.push({ name, role });
    renderUsers();
  }
}

// Function to render the user list
function renderUsers() {
  const userList = document.getElementById('user-list');
  userList.innerHTML = '';
  users.forEach((user, index) => {
    const li = document.createElement('li');
    li.textContent = `${user.name} - ${user.role}`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
      users.splice(index, 1);
      renderUsers();
    };
    li.appendChild(deleteButton);
    userList.appendChild(li);
  });
}

// Function to add an event to the calendar
function addEvent() {
  const eventName = prompt('Enter event name:');
  const eventDate = prompt('Enter event date (YYYY-MM-DD):');
  if (eventName && eventDate) {
    calendarEvents.push({ name: eventName, date: eventDate });
    renderCalendar();
  }
}

// Function to render calendar events
function renderCalendar() {
  const calendarContainer = document.getElementById('calendar-container');
  calendarContainer.innerHTML = '';
  calendarEvents.forEach((event, index) => {
    const div = document.createElement('div');
    div.textContent = `${event.date}: ${event.name}`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
      calendarEvents.splice(index, 1);
      renderCalendar();
    };
    div.appendChild(deleteButton);
    calendarContainer.appendChild(div);
  });
}

// Initial render
renderUsers();
renderCalendar();
