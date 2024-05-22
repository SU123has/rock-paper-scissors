let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice-user");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const genCompChoice = () => {
  const options = ["choice-rock", "choice-paper", "choice-scissors"];
  const index = Math.floor(Math.random() * 3);
  //generates random number between 0 and 2
  return options[index];
};

const genMsg = (msg) => {
  const message = document.querySelector("#msgBox");
  message.innerText = msg;
};

const drawGame = () => {
  genMsg("Game Draw");
};

const userWins = () => {
  userScore++;
  console.log("user score: ", userScore);
  document.querySelector("#user-score-val").innerText = userScore;
  genMsg("User Wins!");
};

const compWins = () => {
  compScore++;
  console.log("comp score: ", compScore);
  document.querySelector("#comp-score-val").innerText = compScore;
  genMsg("Computer Wins!");
};

const updateCompChoice = (compChoice) => {
  const compChoiceImage = document.querySelector(".computer-choice");

  if (compChoice === "choice-rock") {
    compChoiceImage.innerHTML =
      "<img src='assests/rock.png' alt='rock' id='compChoice'/>";
  } else if (compChoice === "choice-paper") {
    compChoiceImage.innerHTML =
      "<img src='assests/paper.png' alt='paper' id='compChoice'/>";
  } else {
    compChoiceImage.innerHTML =
      "<img src='assests/scissors.png' alt='scissors' id='compChoice'/>";
  }
};

const playGame = (userChoice) => {
  console.log("user: ", userChoice);
  const compChoice = genCompChoice();
  console.log("comp: ", compChoice);
  updateCompChoice(compChoice);
  if (userChoice === compChoice) {
    console.log("Draw");
    drawGame();
  } else if (userChoice === "choice-rock") {
    compChoice === "choice-paper" ? compWins() : userWins();
  } else if (userChoice === "choice-scissors") {
    compChoice === "choice-rock" ? compWins() : userWins();
  } else if (userChoice === "choice-paper") {
    compChoice === "choice-scissors" ? compWins() : userWins();
  }
};
