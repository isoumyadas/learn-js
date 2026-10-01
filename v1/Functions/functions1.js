// Basic function call

function sayMyName() {
  console.log("Soumya");
  console.log("Ranjan");
  console.log("Das");
}

sayMyName(); // so here sayMyName is known as Reference and () is execution

// adding two numbers

function addNumbers(number1, number2) {
  console.log(number1 + number2);
}

addNumbers(2, 3);

// returning in function
function addNumbers(number1, number2) {
  console.log(number1 + number2);
  return number1 + number2; // after you return you can't execute anything after return , return will be returning the result
}

const result = addNumbers(8, 9);
console.log("RESULT: ", result);

// another way to write the functions , you can check wiht applying conditions

function userLoginMessage(username) {
  //   if (username === undefined)
  if (!username) {
    console.log("Please enter the username");
    return;
  }

  return `Hey ${username} welcome to club!`;
}

console.log(userLoginMessage("Soumya")); // while not passing any arguments then it will print undefined

// using rest operator ...
// so if you have multpile values but you have save it into particular params, then you can use rest

function calculateAllPrice(...val1) {
  return val1;
}

console.log(calculateAllPrice(100, 200, 300, 400, "Soumya", true)); // so while using rest operator it will this all in array

// objects

const user = {
  username: "Soumya",
  age: 23,
};

const course = {
  title: "Javascript",
  price: 2378,
};

function userDetail(anyObject) {
  //   console.log(`${anyObject.username} is ${anyObject.age} year old`);
  console.log(
    `Welcome to ${anyObject.title} course which is only ${anyObject.price}/-`
  );
}

// userDetail(user);
// userDetail(course);
userDetail({
  title: "react.js",
  price: 4556,
}); // you can also pass an object in arguments

// we can also pass array
const newArray = ["soumya", "nitin", "messi"];

function getUserName(newOutput) {
  return newOutput[1];
}
// console.log(getUserName(newArray));

// same like objects are passed, you can pass the array in arguments
console.log(getUserName([3000, "Gravy", "Loving"]));
