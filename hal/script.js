document.getElementById('submitButton').addEventListener('click', () => {
  const name = document.getElementById('nameInput').value.trim();
  const resultMessage = document.getElementById('resultMessage');
  
  if (name) {
    resultMessage.textContent = `I'm sorry, ${name}. I'm afraid I can't do that.`;
  } else {
    resultMessage.textContent = "Please enter your name, human.";
  }
});
