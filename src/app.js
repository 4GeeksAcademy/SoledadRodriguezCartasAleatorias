/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";
function createRandomCard() {
  let palo = ["♦", "♥", "♠", "♣"];
  let value = [
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

  function randomItem(carta) {
    let rnd = Math.random();
    let item = Math.floor(rnd * carta.length);
    return carta[item];
  }
  let bastoFinal = randomItem(palo);

  let randomPalo = document.getElementById("basto");
  randomPalo.innerHTML = bastoFinal;

  let randomPalo2 = document.getElementById("bastoAbajo");
  randomPalo2.innerHTML = bastoFinal;

  let valueCard = randomItem(value);

  let randomValueCard = document.getElementById("cardValue");
  randomValueCard.innerHTML = valueCard;

  console.log(bastoFinal);
  if (bastoFinal == "♥" || bastoFinal == "♦") {
    basto.style.color = "red";
    bastoAbajo.style.color = "red";
  } else {
    basto.style.color = "black";
    bastoAbajo.style.color = "black";
  }
}
window.onload = function() {
  //write your code here
  createRandomCard();
  setInterval(createRandomCard, 10000);
};
