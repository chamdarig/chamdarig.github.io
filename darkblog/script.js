const posts = [
  { id: 1, title: "Introduction to JavaScript", content: "JavaScript is a versatile language..." },
  { id: 2, title: "Understanding the DOM", content: "The DOM allows you to interact with web pages..." },
  { id: 3, title: "Async Programming in JS", content: "JavaScript supports asynchronous programming..." },
  // Add more posts here
];

const postsPerPage = 3;
let currentPage = 1;

// Function to render posts
function renderPosts(page = 1) {
  const container = document.getElementById("posts-container");
  container.innerHTML = "";

  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;
  const paginatedPosts = posts.slice(start, end);

  paginatedPosts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    `;
    container.appendChild(postElement);
  });

  renderPagination();
}

// Function to render pagination
function renderPagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(posts.length / postsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.classList.add("pagination-btn");
    button.disabled = i === currentPage;
    button.addEventListener("click", () => {
      currentPage = i;
      renderPosts(i);
    });
    pagination.appendChild(button);
  }
}

// Search functionality
document.getElementById("search").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm)
  );

  if (searchTerm) {
    renderFilteredPosts(filteredPosts);
  } else {
    renderPosts(currentPage);
  }
});

function renderFilteredPosts(filteredPosts) {
  const container = document.getElementById("posts-container");
  container.innerHTML = "";

  filteredPosts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    `;
    container.appendChild(postElement);
  });
}

// Initialize the blog
renderPosts();
