/* eslint-disable */
const suits = ["♣", "♥", "♠", "♦"];
const numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = function() {
  newCard();
  document.querySelector(".button-29").addEventListener("click", () => {
    newCard();
  });
};

function newCard() {
  setNumber(numbers);
  setSuit(suits);
}

function setSuit(suits) {
  let suit = suits[randomPick(suits)];
  document.querySelector(".my-card").style.color = "black";
  document.querySelectorAll(".suit").forEach(elm => {
    elm.innerHTML = suit;
    if (suit == "♥" || suit == "♦") {
      document.querySelector(".my-card").style.color = "red";
    }
  });
}
function setNumber(numbers) {
  document.querySelector(".number").innerHTML = numbers[randomPick(numbers)];
}
function randomPick(array) {
  return Math.floor(Math.random() * array.length);
}
