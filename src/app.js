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
  //write your code here

  setNumber(numbers);
  setSuit(suits);
};

function setSuit(suits) {
  //suite function
  let suit = suits[randomPick(suits)];
  document.querySelectorAll(".suit").forEach(elm => {
    elm.innerHTML = suit;
    if (suit == "♥" || suit == "♦") {
      document.querySelector(".my-card").style.color = "red";
    }
  });
}
function setNumber(numbers) {
  //number function
  document.querySelector(".number").innerHTML = numbers[randomPick(numbers)];
}
function randomPick(array) {
  //random function
  return Math.floor(Math.random() * array.length);
}
