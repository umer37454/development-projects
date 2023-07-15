let player = document.getElementById('playerText');
let restart = document.getElementById('restartBtn');

let boxes = Array.from(document.getElementsByClassName('one'));

const X_text = 'X';
const O_text = 'O';

let currentPlayer = X_text;
let spaces = Array(9).fill(null);
let count_plays = 0;

const startGame = () => {
  boxes.forEach((box) => {
    box.addEventListener('click', boxClicked);
  })
}

function boxClicked(e) {
  const id = e.target.id;

  if (!spaces[id] && count_plays < 9) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (currentPlayer === O_text) {
      e.target.style.color = 'blue';
    } else {
      e.target.style.color = 'red';
    }

    if (playerHasWon() !== false) {
      player.innerText = `${currentPlayer} won`;

      let winner = playerHasWon();
      count_plays = 10;

      winner.map((winnerBox) => {
        boxes[winnerBox].style.backgroundColor = 'burlywood';
      })

      return;
    }

    count_plays++;
    currentPlayer = currentPlayer == X_text ? O_text : X_text;

    if (count_plays === 9) {
      player.innerText = 'Game Draw';
    }
  }
}

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function playerHasWon() {
  for (const winning of winningCombos) {
    let [a, b, c] = winning;

    if (spaces[a] && (spaces[a] === spaces[b]) && (spaces[a] === spaces[c])) {
      return [a, b, c];
    }
  }
  return false;
}

restart.addEventListener('click', () => {
  spaces.fill(null);

  boxes.forEach((box) => {
    box.innerText = '';
    box.style.backgroundColor = '';
  })

  player.innerText = 'Tic Tac Toe';
  count_plays = 0;

  currentPlayer = X_text;
})

startGame();