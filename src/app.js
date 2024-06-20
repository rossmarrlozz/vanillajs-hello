/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["My homework", "The keys", "the car"];
  let when = [
    "before the class",
    "rigth on time",
    "when i finished",
    "during my lunch",
    "while i was praying"
  ];
  const getRandomElement = listElemnts => {
    let element = "";
    element = listElemnts[Math.floor(Math.random() * listElemnts.length)];
    return element;
  };
  let excuseGen = document.querySelector("#excuse");
  console.log(excuseGen);
  excuseGen.innerHTML =
    getRandomElement(who) +
    " " +
    getRandomElement(action) +
    " " +
    getRandomElement(what) +
    " " +
    getRandomElement(when);
  console.log("Hello Rigo from the console!");
};
