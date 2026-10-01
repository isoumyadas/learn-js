const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// forEach so we can loop every value

// Another Method

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "purple":
      // body.style.backgroundColor = e.target.id;
      // break;
      case "lightgreen":
      // body.style.backgroundColor = e.target.id;
      // break;
      case "blue":
      // body.style.backgroundColor = e.target.id;
      // break;
      case "lightBlue":
        body.style.backgroundColor = e.target.id;
        break;
      // NOTE: we should never break the code while using loop in this situation
      default:
        body.style.backgroundColor = "grey";
        break;
    }
  });
});

//Another Method

// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.id === "red") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "green") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "black") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "blue") {
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// });

//Another method

// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     body.style.backgroundColor = e.target.id;
//   });
// });
