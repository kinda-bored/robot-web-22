// Team letter hover functionality
const letters = document.querySelectorAll(".teamAt,.teamBt,.teamCt");
const displayText = document.getElementById("displayText");

// Get the description elements
const desOneBox = document.getElementById("descriptions-one");
const descriptOne = desOneBox ? desOneBox.innerText : '';
const desTwoBox = document.getElementById("descriptions-two");
const descriptTwo = desTwoBox ? desTwoBox.innerText : '';
const desThreeBox = document.getElementById("descriptions-three");
const descriptThree = desThreeBox ? desThreeBox.innerText : '';

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

// Team button click functionality
const teamA = document.getElementById("teamA");
const teamB = document.getElementById("teamB");
const teamC = document.getElementById("teamC");

const selected = document.querySelectorAll(".selected");

//textbox to change when button pressed
const descript = document.getElementById("displayText");
var currTeam = 0;

function printText(num, team){
    switch (num) {
        case 1:
            descript.textContent = descriptOne;
            teamA.classList.add("selected");
            teamB.classList.remove("selected");
            teamC.classList.remove("selected");
            break;
        case 2:
            descript.textContent = descriptTwo;
            teamA.classList.remove("selected");
            teamB.classList.add("selected");
            teamC.classList.remove("selected");
            break;
        case 3:
            descript.textContent = descriptThree;
            teamA.classList.remove("selected");
            teamB.classList.remove("selected");
            teamC.classList.add("selected");
            break;
        default:
            break;
    }
}

teamA.onclick = function(){
    currTeam = 1;
    printText(currTeam, teamA);
};

teamB.onclick = function(){
    currTeam = 2;
    printText(currTeam, teamB);
};

teamC.onclick = function(){
    currTeam = 3;
    printText(currTeam, teamC);
};
