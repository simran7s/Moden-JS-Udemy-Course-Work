// Game Values
let min = 19,
    max = 20,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.getElementById('guess-value'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again Listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === "play-again") {
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);
    console.log(winningNum + " " + guess + " " + guessesLeft);

    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
    }
    // if won
    else if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct! YOU WIN`);
    } else {
        guessesLeft -= 1;
        if (guessesLeft <= 0) {
            gameOver(false, `Game Over, ${winningNum} was the number. YOU LOSE`);
        }
        else {
            guessInput.value = "";
            setMessage(`${guess} is not correct. ${guessesLeft} guess(es) left`, "black");
        }
    }
});

function gameOver(won, msg) {
    let color;
    won == true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true;
    // Change border to green
    guessInput.style.borderColor = color;
    guessInput.style.textColor = color;

    guessInput.value = "";
    setMessage(msg, color);

    // Play Again
    guessBtn.value = "Play Again";
    guessBtn.className += "play-again";
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}



function getRandomNum(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}