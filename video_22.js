// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;  // Track the number of guesses

// Game loop: Prompt the user until they guess correctly
while (true) {
    let guess = prompt("Enter your guess (between 1 and 100):");
    guess = Number.parseInt(guess);
    attempts++;  // Increment attempt count

    // Check if the guess is correct
    if (guess === randomNumber) {
        console.log("Congratulations! Your guess is correct.");
        console.log("Your Score is:", 100 - attempts); // Calculate the score
        break;
    } 
    // Provide feedback if the guess is wrong
    else if (guess > randomNumber) {
        console.log("Too high! Try a lower number.");
    } else {
        console.log("Too low! Try a higher number.");
    }
}
