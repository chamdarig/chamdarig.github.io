:root {
  --bg-color: #121212;
  --text-color: #ffffff;
  --accent-color: #1db954;
  --card-bg: #1e1e1e;
  --shadow: rgba(0, 0, 0, 0.5);
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.sidebar {
  width: 20%;
  padding: 20px;
  background-color: var(--card-bg);
  box-shadow: 2px 0 5px var(--shadow);
}

.sidebar h3 {
  margin-bottom: 10px;
  color: var(--accent-color);
}

.categories ul {
  list-style: none;
  padding: 0;
}

.categories ul li a {
  text-decoration: none;
  color: var(--text-color);
  display: block;
  padding: 5px 0;
}

.categories ul li a:hover {
  color: var(--accent-color);
}

.search-bar input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.nav-bar {
  background-color: var(--card-bg);
  padding: 15px;
  display: flex;
  justify-content: space-between;
}

.nav-bar a {
  text-decoration: none;
  color: var(--text-color);
  margin-right: 15px;
}

.nav-bar a:hover {
  color: var(--accent-color);
}

.posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.post-card {
  background-color: var(--card-bg);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px var(--shadow);
  transition: transform 0.3s ease;
}

.post-card:hover {
  transform: scale(1.05);
}

.pagination {
  margin-top: auto;
  padding: 20px;
  text-align: center;
}

.page-btn {
  padding: 10px 20px;
  background-color: var(--accent-color);
  border: none;
  color: var(--text-color);
  border-radius: 5px;
  cursor: pointer;
}

.page-btn:hover {
  background-color: #16a34a;
}
