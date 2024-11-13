let useScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let userWin = true;
const msg = document.querySelector("#msg");
const useScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    console.log("the game was draw");
    msg.innerHTML = "<b>DRAW!!</b>";
    msg.style.backgroundColor = "#081b31";
}
const whoWin = (userWin, userChoice, compChoice) => {
    if (userWin == true) {
        console.log("You win!!\n");
        useScore++;
        msg.innerHTML = `<b>YOU WON!! ${userChoice} beats ${compChoice}</b>`;
        useScorePara.innerText = useScore;
        msg.style.backgroundColor = "green";
    } else {
        console.log("Ohh Noo!! Ypu lost\n");
        compScore++;
        msg.innerHTML = `<b>YOU LOSE!!${compChoice} beats ${userChoice}</b>`
        compScorePara.innerText = compScore;
        msg.style.backgroundColor = "Red";
    }
}

const playGame = (userChoice) => {
    const compChoice = getCompChoice();
    console.log("computer choice : ", compChoice);
    console.log("user choice : ", userChoice);

    if (userChoice == compChoice) {
        //draw game
        drawGame();
    } else {
        if (userChoice === "rock") {
            // compChoice = paper,scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // compChoice = rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            // compChoice = rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        whoWin(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})