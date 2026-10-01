// So my Task is:
// Topic: Add Friend Feature it same button
/**
 *  Whenver I Click on AddFriend button the text "Stranger" should get convert into "Friends"
 */

const strangerSel = document.querySelector("h5");
const btn = document.querySelector("#friend");
// const remove = document.querySelector("#remove");
let check = 0;

//Method no 2
btn.addEventListener("click", () => {
  if (check == 0) {
    strangerSel.innerHTML = "Friends";
    strangerSel.style.color = "green";
    btn.style.backgroundColor = " grey";
    btn.innerHTML = "Remove";
    check = 1;
  } else {
    strangerSel.innerHTML = "Stranger";
    strangerSel.style.color = "Red";
    btn.style.backgroundColor = " rgb(26, 113, 90)";
    btn.innerHTML = "Add Friend";
    check = 0;
  }
});

// Method no 1
// remove.addEventListener("click", () => {
//   strangerSel.innerHTML = "Stranger";
//   strangerSel.style.color = "red";
// });
