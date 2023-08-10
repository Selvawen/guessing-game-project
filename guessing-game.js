const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


// this is the old value of secretNumber: var secretNumber = 10;

const checkGuess = function (num) {
    if (num > secretNumber) {
        console.log('Too high.');
        return false;
    } else if (num < secretNumber) {
        console.log('Too low.');
        return false;
    } else {
        console.log('Correct!');
        return true;
    }
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const secretNumber = randomInRange();


const askGuess = () => {
    rl.question('Enter a guess: ', function (userNum) {
        const guessNum = Number(userNum);
        if (checkGuess(guessNum)) {
            console.log('You win!');
            rl.close();
        } else {
            askGuess();
        }
    });
}

//askGuess();

function askRange() {
    rl.question('Enter a max number: ', function(maxRange) {
        rl.question('Enter a min number: ', function(minRange) {
            const min = Number(minRange);
            const max = Number(maxRange);
            const secretNumber = randomInRange(min, max);
            console.log(`I'm thinking of a number between ${min} and ${max}...`);
            askGuess(); 
        });
    });
}

askRange();