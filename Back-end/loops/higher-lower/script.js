const randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

const guessInput = document.getElementById('user-guess');
const submitBtn = document.getElementById('submit-btn');
const message = document.getElementById('message');
const attempts = document.getElementById('attempts');

submitBtn.addEventListener('click', function () {
 const userGuess = parseInt(guessInput.value);

 if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
  message.textContent = "Please enter a valid number between 1 and 100.";
  return;
 }
 guessCount++;

 if (userGuess === randomNumber) {
  message.textContent = `Congratulations! You guessed the number correctly. It took you ${guessCount} guesses.`;
  guessInput.disabled = true; 
  submitBtn.disabled = true; 
 } else if (userGuess > randomNumber) {
  message.textContent = "Your guess is too high. Try again!";
 } else {
  message.textContent = "Your guess is too low. Try again!";
 }

 attempts.textContent = `Number of attempts: ${guessCount}`;
 guessInput.value = '';
});
