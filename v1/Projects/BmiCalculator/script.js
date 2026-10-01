const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Read Docs for this method

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const message = document.querySelector("#weight-guide");
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (!height) {
    result.innerText = `Please input valid height, your height shows this ${height}`;
  } else if (!weight) {
    result.innerText = `Please input valid weight, your weight shows this ${weight}`;
  } else {
    result.innerHTML = `<span>${bmi}</span>`;
  }

  if (bmi < 18.6) {
    message.innerHTML = `<span>${bmi}, You are Under Weight!</span>`;
  } else if (bmi <= 24.9) {
    message.innerHTML = `<span>${bmi}, You are Normal Weight!</span>`;
  } else {
    message.innerHTML = `<span>${bmi}, You are Over Weight!</span>`;
  }
});

// Another way to write this code.......
// const form = document.querySelector("form");
// // this usecase will give you empty
// // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector("#height").value);
//   const weight = parseInt(document.querySelector("#weight").value);
//   const results = document.querySelector("#results");

//   if (height === "" || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === "" || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });
