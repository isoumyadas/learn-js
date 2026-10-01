// Hello World!!!
// constructor se banega to singleton use hoga // object literals me nhi hoga!

//singelton
// Object.create; // this is known as constructor one // this is how we can create object too

//object literals
const jsUser = {
  name: "Soumya",
  age: 21,
  location: "Ahmedabad",
  email: "soumya@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
}; // this is how object's are decarled

// how to access the object // their are two methods
//1st method
console.log(jsUser.email);

//2nd method
console.log(jsUser["email"]); // while using square notation always access with quotes"", to access
// why to use this method most probably
const okayUser = {
  name: "Soumya",
  "full-name": "Soumya Ranjan Das", // so we can't access this with using 1st method, so using 2nd method it will get acccess
};

console.log(okayUser["full-name"]);

// symbol // how to decalre it and use it
const mySymb = Symbol("key1"); // this is been decalred

const symbol = {
  name: "Messi",
  [mySymb]: "Lionel Messi", // this is the syntax to use symbol
};

console.log(symbol[mySymb]);

// to change the value in the object
const performance = Symbol("key4");
const change = {
  name: "Liverpool",
  UCL: 6,
  [performance]: "Best",
};

change.UCL = 9;
console.log(change);

// to frezze the object so no one can change that object vaklues
// Object.freeze(change);

// change.name = "Mumbai City Fc";
// console.log(change);

// we can use object using fucntion too

// this one is static
change.greetingOne = function () {
  console.log("You are in Liverpool");
};
console.log(change.greetingOne());
console.log(change);

// this one is dynamic
change.greetingTwo = function () {
  console.log(`You are in ${this.name}`); // using "this" mean pointing to the object name or variable name // learn more about this keyword
};

console.log(change.greetingTwo());
console.log(change);
