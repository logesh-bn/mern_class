let secretNumber;
let attemptsLeft;
const maxAttempts = 10;

const input = document.getElementById("userGuess");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

function generateNumber() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = maxAttempts;
  input.disabled = false;
  document.querySelector("button[onclick='checkGuess()']").disabled = false;
  input.value = "";
  message.textContent = "";
  attemptsText.textContent = `You have ${attemptsLeft} attempts remaining.`;
  message.style.color = "#333";
}

function checkGuess() {
  const guess = parseInt(input.value);

  if (isNaN(guess)) {
    message.textContent = "🚫 Please enter a valid number.";
    message.style.color = "orange";
    return;
  }

  attemptsLeft--;

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}`;
    message.style.color = "green";
    endGame();
  } else if (attemptsLeft === 0) {
    message.textContent = `💀 Game Over! The number was ${secretNumber}`;
    message.style.color = "red";
    endGame();
  } else {
    message.textContent = guess < secretNumber ? "📉 Too low!" : "📈 Too high!";
    message.style.color = "blue";
    attemptsText.textContent = `You have ${attemptsLeft} attempts remaining.`;
  }
}

function endGame() {
  input.disabled = true;
  document.querySelector("button[onclick='checkGuess()']").disabled = true;
}

function resetGame() {
  generateNumber();
}

generateNumber(); // Start the game initially
