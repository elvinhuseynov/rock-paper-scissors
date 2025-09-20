// document.body.style.backgroundColor = "gray";
// let currentValue = 0;
// const minus = document.getElementById("minus");
// const plus = document.getElementById("plus");
// const value = document.getElementById("value");

// const checkValueForBackground = () => {
//   if (currentValue === 0) {
//     document.body.style.backgroundColor = "gray";
//   } else if (currentValue % 2 === 0) {
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "blue";
//   }
// };

// minus.addEventListener("click", () => {
//   currentValue--;
//   value.textContent = currentValue;

//   checkValueForBackground();
// });

// plus.addEventListener("click", () => {
//   currentValue++;
//   value.textContent = currentValue;

//   checkValueForBackground();
// });

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const points = document.getElementById("points");
const computerGuess = document.getElementById("computerGuess");

const plays = ["rock", "paper", "scissors"];

const winner = {
  rock: (guess) => {
    if (guess === "rock") {
      return "tie";
    } else if (guess === "scissors") {
      return "win";
    } else {
      return "lose";
    }
  },
  scissors: (guess) => {
    if (guess === "rock") {
      return "lose";
    } else if (guess === "scissors") {
      return "tie";
    } else {
      return "win";
    }
  },
  paper: (guess) => {
    if (guess === "rock") {
      return "win";
    } else if (guess === "scissors") {
      return "lose";
    } else {
      return "tie";
    }
  },
};

const playGame = (userGuess) => {
  const compGuess = plays[Math.floor(Math.random() * 3)];
  const text = winner[userGuess](compGuess);
  console.log(userGuess, compGuess, winner[userGuess](compGuess));

  points.textContent = text;
  computerGuess.textContent = compGuess + "  " + userGuess;
};

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));
