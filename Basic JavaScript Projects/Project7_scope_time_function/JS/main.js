"use strict";

let p = document.getElementById("out");
let currentHour = new Date().getHours();

function isItEight() {
  currentHour >= 20
    ? (p.innerHTML = `It's after 8:00pm!`)
    : (p.innerHTML = `It's not 8:00pm yet`);
  console.log(currentHour);
}
