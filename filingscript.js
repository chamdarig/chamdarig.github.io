document.addEventListener("DOMContentLoaded", function() {
    const faceElement = document.getElementById("face");
    const happyButton = document.getElementById("happy-btn");
    const normalButton = document.getElementById("normal-btn");
    const sadButton = document.getElementById("sad-btn");
    const historyList = document.getElementById("history-list");

    let feelingHistory = [];

    function updateFace(feeling) {
        faceElement.textContent = feeling.emoji;
        faceElement.setAttribute("data-feeling", feeling.text);
    }

    function addToHistory(feeling) {
        feelingHistory.push(feeling);
        renderHistory();
    } 
    /*
function renderHistory() {
    historyList.innerHTML = "";
    feelingHistory.forEach(feeling => {
        const listItem = document.createElement("li");
        listItem.textContent = `${feeling.date} - ${feeling.text} ${feeling.emoji}`;
        historyList.appendChild(listItem);
    });
}
*/
    function renderHistory() {
        historyList.innerHTML = "";
        feelingHistory.forEach(feeling => {
            const listItem = document.createElement("li");
            listItem.textContent = `${feeling.date} - ${feeling.text}`;
            historyList.appendChild(listItem);
        });
    }

    happyButton.addEventListener("click", function() {
        const feeling = { text: "Happy", emoji: "😊", date: new Date().toLocaleString() };
        updateFace(feeling);
        addToHistory(feeling);
    });

    normalButton.addEventListener("click", function() {
        const feeling = { text: "Normal", emoji: "😐", date: new Date().toLocaleString() };
        updateFace(feeling);
        addToHistory(feeling);
    });

    sadButton.addEventListener("click", function() {
        const feeling = { text: "Sad", emoji: "😢", date: new Date().toLocaleString() };
        updateFace(feeling);
        addToHistory(feeling);
    });
});
