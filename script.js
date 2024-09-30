const guess = document.getElementById("Guess");
const Sub = document.getElementById("guessit");
const answer = Math.floor(Math.random() * 100 + 1);
const timer = document.getElementById("time");
const result = document.getElementById("res");
let time = 0;
let guesses = 0;

function timerStand() {
    timer.innerHTML = time;

    time += 1;

    if(time === 3600) {
        result.innerHTML = "WHY ARE YOU STILL HERE YOU LITTLE BIRCH WOOD";
    }
}

Sub.onclick = function() {
    guesses += 1;

    setInterval(timerStand, 1000);

    if(guess.value < answer) {
        result.innerHTML = `The number is too small!`;
    }
    else if(guess.value > answer) {
        result.innerHTML = "The Number is too big!";
    }
    else if(guess.value == answer) {
        result.innerHTML = `${guess.value} IS THE CORRECT NUMBER, IT TOOK YOU ${guesses} GUESSE(S)`;
        setTimeout(function() {
            location.reload();
        }, 5000);
    }
    else if(isNaN(guess.value)) {
        result.innerHTML = `${guess.value} is not a number!`;
    }
    else if(guess.value === "") {
        result.innerHTML = "You have to write something";
    }
    guess.value = "";

}

console.log(answer)