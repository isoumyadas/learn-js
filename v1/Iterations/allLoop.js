// These all are array specific loop

// for of
const numbers = [1, 22, 33, 44, 5, 6, 6, 77];

for (const num of numbers) {
  console.log(`The value is ${num}`);
}

// same you can do for strings

const greeting = "Soumya Ranjan Das";

for (const greet of greeting) {
  console.log(`The char are ${greet}`);
}

console.log(`+++++++++++++++++++++++++++++++++++++++++++++++`);
console.log(`+++++++++++++++++++++++++++++++++++++++++++++++`);

// you can also apply condition init

const greeting2 = "Soumya Ranjan Das";

for (const greet of greeting2) {
  if (greet == " ") {
    //here it checks if there is space then please continue the loop, but don't add the space
    continue;
  }
  console.log(`The char are ${greet}`);
}

// Maps
// Maps don't repeat the key-value pairs, it only has unique values
const map = new Map();
map.set("IN", "india"); // Key is IN and value is India
map.set("ARG", "argentina");
map.set("FR", "france");

console.log(map);

// we can also add loop in map

for (const [y, x] of map) {
  console.log(y, ":", x); // here y means key and x means value
}

// we can also do for object
const myObject = { game1: "Bgmi", game2: "Efootball" };

// for (const [key, value] of myObject) {
//   // this will not work
//   console.log(key, ":", value);
// }
