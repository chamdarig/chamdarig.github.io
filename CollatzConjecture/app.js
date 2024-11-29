// app.js
const svg = document.getElementById("collatz-visualization");
const startButton = document.getElementById("start-button");

// Function to generate the Collatz sequence
function collatzSequence(n) {
  const sequence = [n];
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    sequence.push(n);
  }
  return sequence;
}

// Function to visualize the Collatz sequence
function visualizeCollatz() {
  // Clear the previous visualization
  svg.innerHTML = "";

  const sequence = collatzSequence(27); // Start with a specific number (e.g., 27)
  const radius = 15;
  let x = 50;
  let y = 300;

  sequence.forEach((num, index) => {
    // Create a circle for each number in the sequence
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", "blue");
    svg.appendChild(circle);

    // Add text inside the circle
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("fill", "white");
    text.setAttribute("dy", ".35em"); // Adjust vertical alignment
    text.textContent = num;
    svg.appendChild(text);

    // Draw lines between the numbers
    if (index > 0) {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", x - 50);
      line.setAttribute("y1", y);
      line.setAttribute("x2", x);
      line.setAttribute("y2", y);
      line.setAttribute("stroke", "black");
      svg.appendChild(line);
    }

    // Update x and y for the next circle
    x += 60;
    y += (Math.random() - 0.5) * 50; // Add some random vertical variation
  });
}

// Attach event listener to the button
startButton.addEventListener("click", visualizeCollatz);
