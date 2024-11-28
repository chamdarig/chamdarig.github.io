document.addEventListener("DOMContentLoaded", () => {
  const numberPad = document.getElementById("number-pad");
  const selection = document.getElementById("selection");
  const checkButton = document.getElementById("check-button");
  const feedback = document.getElementById("feedback");

  const secretCode = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10));
  console.log("Secret Code (for testing):", secretCode); // For debugging

  const userSelection = [];

  // Create number buttons (0-9)
  for (let i = 0; i <= 9; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.classList.add("number");
    btn.addEventListener("click", () => {
      if (userSelection.length < 6 && !btn.classList.contains("selected")) {
        btn.classList.add("selected");
        userSelection.push(i);
        updateSelection();
        if (userSelection.length === 6) {
          checkButton.disabled = false;
        }
      }
    });
    numberPad.appendChild(btn);
  }

  // Update the selected numbers display
  function updateSelection() {
    selection.innerHTML = userSelection
      .map((num) => `<span>${num}</span>`)
      .join("");
  }

  // Check the user's guess
  checkButton.addEventListener("click", () => {
    let correctPosition = 0;
    let correctNumber = 0;
    const codeCopy = [...secretCode];
    const guessCopy = [...userSelection];

    // First pass: Check for correct positions
    for (let i = 0; i < 6; i++) {
      if (guessCopy[i] === codeCopy[i]) {
        correctPosition++;
        codeCopy[i] = guessCopy[i] = null; // Mark as matched
      }
    }

    // Second pass: Check for correct numbers in wrong positions
    for (let i = 0; i < 6; i++) {
      if (guessCopy[i] !== null && codeCopy.includes(guessCopy[i])) {
        correctNumber++;
        codeCopy[codeCopy.indexOf(guessCopy[i])] = null; // Remove matched number
      }
    }

    // Display feedback
    feedback.textContent = `Correct Numbers in Correct Position: ${correctPosition}, Correct Numbers in Wrong Position: ${correctNumber}`;

    // Reset for the next round (if needed)
    userSelection.length = 0;
    updateSelection();
    document.querySelectorAll(".number").forEach((btn) => btn.classList.remove("selected"));
    checkButton.disabled = true;
  });
});
