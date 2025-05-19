const letters = document.querySelectorAll(".letter");
const displayText = document.getElementById("displayText");

letters.forEach(letter => {
    letter.addEventListener("mouseover", () => {
        displayText.textContent = letter.getAttribute("data-text");
        letters.forEach(l => l.classList.remove("active"));
        letter.classList.add("active");
    });
});