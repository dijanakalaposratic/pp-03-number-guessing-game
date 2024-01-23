let minNum = 50;
let maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while (running) {
	guess = prompt(`Guess a number between ${minNum} and ${maxNum}`);
	guess = Number(guess);

	while (isNaN(guess) || guess < minNum || guess > maxNum) {
		guess = prompt(`Please enter a valid number between ${minNum} and ${maxNum}`);
		guess = Number(guess);
	}

	attempts++;

	if (guess < answer) {
		alert("Too low! Try again.");
	} else if (guess > answer) {
		alert("Too high! Try again.");
	} else {
		alert(`You got it! The answer is ${answer}. It took you ${attempts} attempts.`);
		running = false;
	}
}
