let userScore = 0;
let compScore = 0;
let drawScore = 0;

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", () => {
  userScore = compScore = drawScore = 0;
  document.querySelector("#draw-score-val").innerText = drawScore;
  document.querySelector("#user-score-val").innerText = userScore;
  document.querySelector("#comp-score-val").innerText = compScore;
  genMsg("Play Your Move");
  changeMsgBoxColor("default");
});

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
  drawScore++;
  document.querySelector("#draw-score-val").innerText = drawScore;
  changeMsgBoxColor("draw");
};

const userWins = () => {
  userScore++;
  document.querySelector("#user-score-val").innerText = userScore;
  genMsg("User Wins!");
  changeMsgBoxColor("user");
};

const compWins = () => {
  compScore++;
  document.querySelector("#comp-score-val").innerText = compScore;
  genMsg("Computer Wins!");
  changeMsgBoxColor("comp");
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

const changeMsgBoxColor = (event) => {
  const msgBox = document.getElementById("msg-box");
  if (event === "user") {
    msgBox.style.backgroundColor = "#8dd95b";
  } else if (event === "comp") {
    msgBox.style.backgroundColor = "#de554b";
  } else if (event === "draw") {
    msgBox.style.backgroundColor = "#f0e743";
  } else {
    msgBox.style.backgroundColor = "#a9daf5";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  updateCompChoice(compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else if (userChoice === "choice-rock") {
    compChoice === "choice-paper" ? compWins() : userWins();
  } else if (userChoice === "choice-scissors") {
    compChoice === "choice-rock" ? compWins() : userWins();
  } else if (userChoice === "choice-paper") {
    compChoice === "choice-scissors" ? compWins() : userWins();
  }
};
