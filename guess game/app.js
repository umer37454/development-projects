
let maximum = parseInt(prompt("enter maximum number"));

while (!maximum) {
  maximum = parseInt(prompt("enter valid number"));
}

let targetNum = Math.floor(Math.random() * maximum) + 1;

//console.log(targetNum);

let guess = prompt("enter a guess number");
let attempts = 1;

while (parseInt(guess) !== targetNum) {

  if (guess === 'q') {
    break;
  }
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Your number is too high ! Enter again");
  }
  else {
    guess = prompt("Your number is too low! Enter again");
  }

}

if (guess === 'q') {
  console.log("you quit");
} else {
  console.log("Congo");
  console.log(`it took you ${attempts} guesses`);
}
