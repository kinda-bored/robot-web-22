// Get all the team letter elements (A, B, C)
const letters = document.querySelectorAll(".teamAt,.teamBt,.teamCt");
// Get the element where the description will be displayed
const displayText = document.getElementById("displayText");

// Get the hidden description elements for each team
const desOneBox = document.getElementById("descriptions-one");
const descriptOne = desOneBox ? desOneBox.innerText : '';
const desTwoBox = document.getElementById("descriptions-two");
const descriptTwo = desTwoBox ? desTwoBox.innerText : '';
const desThreeBox = document.getElementById("descriptions-three");
const descriptThree = desThreeBox ? desThreeBox.innerText : '';

// When you hover over a letter, show the correct description and highlight the letter
letters.forEach(letter => {
    letter.addEventListener("mouseover", () => {
        let text = '';
        if (letter.id === "teamA") text = descriptOne;
        else if (letter.id === "teamB") text = descriptTwo;
        else if (letter.id === "teamC") text = descriptThree;
        displayText.textContent = text;
        letters.forEach(l => l.classList.remove("active"));
        letter.classList.add("active");
    });
});

// Get references to each team letter by ID
const teamA = document.getElementById("teamA");
const teamB = document.getElementById("teamB");
const teamC = document.getElementById("teamC");

// Function to update the description and highlight when a letter is clicked
function printText(num, team){
    switch (num) {
        case 1:
            displayText.textContent = descriptOne;
            teamA.classList.add("selected");
            teamB.classList.remove("selected");
            teamC.classList.remove("selected");
            break;
        case 2:
            displayText.textContent = descriptTwo;
            teamA.classList.remove("selected");
            teamB.classList.add("selected");
            teamC.classList.remove("selected");
            break;
        case 3:
            displayText.textContent = descriptThree;
            teamA.classList.remove("selected");
            teamB.classList.remove("selected");
            teamC.classList.add("selected");
            break;
        default:
            break;
    }
}

// When you click a letter, show the correct description and highlight it
teamA.onclick = function(){
    printText(1, teamA);
};
teamB.onclick = function(){
    printText(2, teamB);
};
teamC.onclick = function(){
    printText(3, teamC);
};
