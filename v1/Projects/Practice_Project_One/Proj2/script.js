// Selecting the id's

let heading = document.querySelector("#heading");
const submit = document.querySelector("#Submit");
let newBtnDiv = document.querySelector("#newBtnDiv");
const username = "Hey Soumya....";

// Eventlistners

submit.addEventListener("click", (e) => {
  e.preventDefault();
  heading.textContent = username;
  alert((heading.textContent = username));
  console.log("heading::", heading);
  heading.style.color = "green";
  console.log(e.target.tagName);
  if (e.target.tagName === "BUTTON") {
    let newBtn = document.createElement("button");
    newBtn.textContent = "Claim Here!";
    newBtn.style.backgroundColor = "lightgreen";
    newBtn.style.padding = "10px 30px";
    newBtnDiv.appendChild(newBtn);
    if (newBtn) {
      newBtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("You Won The Prize!!!, Congrats...");
        newBtn.remove();
      });
    }
  }
});

// Summary of this simple Project:
/**
 *
 * So, this project was only purpose for learning => here we have learned about the,
 *  querySelectors, createElement, addEventListners, e.target.tagName
 *
 *  Implemented simple basic styling, remove()
 *
 *  What does this project do?
 *  => Main purpose was to learn about addEventListners. So, here we've selected the three elements heading, div, button
 *
 *  => When the moment submit is clicke, it will pop up an alert msg, and change the textContent and also append an button named as 'CLAIM PRIZE'
 *  => The Moment you clicked the claim prize, another alert msg pops, and it removes the  'CLAIM PRIZE' button.
 *
 *  That's It, More to learn. But this is good start>
 *
 */
