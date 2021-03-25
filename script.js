"use strict";
// document.querySelector(".message").textContent = "🎊 Hurray! Correct Number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value;

////----------------------------------Code-------------------

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    //! when The Number is Empty
    if (!guess) {
        displayMessage("😑 No Number");
    }
    //! When Player win
    else if (guess === number) {
        displayMessage("🎊 Hurray! Correct Number");
        document.querySelector(".number").textContent = number;
        document.querySelector("body").style.backgroundColor = "#007f5f";
        document.querySelector(".number").style.width = "30rem";

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }
    //! When the player Guess Is too High
    else if (guess > number) {
        if (score > 1) {
            displayMessage("📈 Too High");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage = "🧨 You Lose The Game";
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "#bf0603";
        }
    }
    // ! When the player Guess is too Low
    else if (guess < number) {
        if (score > 1) {
            displayMessage("📉Too Low");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage = "🧨 You Lose The Game";
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "#bf0603";
        }
    }
});

// ! AGAIN BUTTON (RESET THE GAME).

document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guess....");
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});