const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


var secretNumber = 10;

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

askGuess();

