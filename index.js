let minNum = 50;
let maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if (Number.isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess > maxNum || guess < minNum) {
        alert('Please guess a number between ' + minNum + ' and ' + maxNum);
    } else {
        attempts++;
        if (guess < answer) {
            alert('Too low! Try again.');
        } else if (guess > answer) {
            alert('Too high! Try again.');
        } else {
            alert('You got it! the answer is ${answer}. It took you ${attempts} attempts.');
            running = false;
        }
    }