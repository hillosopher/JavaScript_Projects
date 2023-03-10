"use strict";

let instruments = ["flute", "drums", "guitar", "clarinet", "trombone"];

function callLoop() {
  for (let i = 0; i < instruments.length; i++) {
    let item = document.getElementById("loop");
    item.innerHTML += instruments[i] + `</br>`;
  }
}
