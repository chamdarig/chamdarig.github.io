document.getElementById('cta-button').addEventListener('click', function() {
    alert("Get ready for your heroic journey into JavaScript!");
});

document.getElementById('cta-blog').addEventListener('click', function() {
    alert("You are about to enter the world of JavaScript blog posts. Enjoy the journey!");
});

// Theme Switcher
let isDark = true;

function toggleTheme() {
    isDark = !isDark;
    if (isDark) {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    }
}

// Add a simple button to switch themes (optional)
let themeButton = document.createElement("button");
themeButton.textContent = "Toggle Theme";
themeButton.style.position = "fixed";
themeButton.style.top = "20px";
themeButton.style.right = "20px";
themeButton.style.padding = "10px";
themeButton.style.backgroundColor = "#FFD700";
themeButton.style.color = "#000";
themeButton.style.border = "none";
themeButton.style.cursor = "pointer";
document.body.appendChild(themeButton);

themeButton.addEventListener('click', toggleTheme);
