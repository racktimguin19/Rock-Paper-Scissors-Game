const handOptions = {
  rock: "/assets/Rock.png",
  paper: "/assets/Paper.png",
  scissors: "/assets/Scissors.png",
};

let SCORE = 0;

const pickUserHand = (hand) => {
  console.log(hand);

  // Hide the current page
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  // show the next page with the hand you picked
  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set the user pick
  document.getElementById("userPickImage").src = handOptions[hand];

  let cpHand = pickComputerHand();
  referee(hand, cpHand);
};

const pickComputerHand = () => {
  let hands = ["rock", "paper", "scissors"];

  // Math.random() generates a random number between 0 to 1
  // so we will multiply it with the length of the hands array
  // and then use Math.floor() to make it a whole number
  // Math.floor() returns the largest integer less than or equal to a given number
  let cpHand = hands[Math.floor(Math.random() * 3)];

  // set the computer pick
  document.getElementById("computerPickImage").src = handOptions[cpHand];

  return cpHand;
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("You Lose! 😭");
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("You Win! 😍");
    setScore(SCORE + 1);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie! 😕");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("You Win! 😍");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("You Lose! 😭");
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie! 😕");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie! 😕");
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("You Win! 😍");
    setScore(SCORE + 1);
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("You Lose! 😭");
  }
};

const restartGame = () => {
  // Hide the current page
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  // show the starting page to pick hand again

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
};

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
};

const setScore = (score) => {
  SCORE = score;
  document.querySelector(".score h1").innerText = score;
};
