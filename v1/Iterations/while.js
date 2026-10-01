// DO WHILE LOOP

let index = 0;

while (index <= 10) {
  // here we put condition
  console.log(`Value of index is ${index}`);
  index = index + 2; // this line does is increment the value with +2
}

// On array
let myArray = ["Flash", "Superman", "Batman"];

let arr = 0;
while (arr < myArray.length) {
  console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1; // here always we have to do some sort of incrementation
}

// Do while loop

let score = 1;

do {
  console.log(`Your score is ${score}`);
  score++;
} while (score <= 10);

// But what if the value is 11, it will execute the code as 11 but after that condition is statisfied, this is the difference

let score2 = 11;

do {
  console.log(`Your score iddds ${score2}`);
  score2++;
} while (score2 <= 10);
