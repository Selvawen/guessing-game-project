const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numAttempts = 5;

const checkGuess = function (num, secretNumber) {
  numAttempts--;
  if (num > secretNumber) {
    console.log("Too high.");
  } else if (num < secretNumber) {
    console.log("Too low.");
  } else {
    console.log("Correct!");
    return true;
  }

  if (numAttempts === 0) {
    console.log("You Lose.");
    rl.close();
    return true;
  }

  console.log(`You have ${numAttempts} attempts remaining.`);
  return false;
};

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const secretNumber = randomInRange(0, 100);

const askGuess = (secretNumber) => {
  rl.question("Enter a guess: ", function (userNum) {
    const guessNum = Number(userNum);
    if (checkGuess(guessNum, secretNumber)) {
      console.log("You win!");
      rl.close();
    } else {
      askGuess(secretNumber);
    } 
  });
};

function askRange() {
  rl.question("Enter a max number: ", function (maxRange) {
    rl.question("Enter a min number: ", function (minRange) {
      const min = Number(minRange);
      const max = Number(maxRange);
      const secretNumber = randomInRange(min, max);
      console.log(`I'm thinking of a number between ${min} and ${max}...`);
      askGuess(secretNumber);
    });
  });
}

askRange();

function askLimit() {
  rl.question("Enter the number of attempts: ", function (attempts) {
    numAttempts = parseInt(attempts);
    askRange(); 
  });
}

askLimit(); 

//You lose.