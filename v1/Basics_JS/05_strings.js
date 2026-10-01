// Concating

// Old Method
console.log("Hello" + "Soumya" + 19 + 20 + "happy"); // => Now 19 and 20 didn't add because the conosle.log starts with string
// above one is old method, not recomended

// New Method
const name = "Soumya";
const age = 21;
console.log(`Hello my name is ${name} and I'm ${age}`);

// declaring the string there is another method
const gameName = new String("Super Marioo");
console.log(gameName);

console.log(gameName[2]); //  Accesing the key value pair
console.log(gameName.__proto__); // To know which prototype is this

//To find the length of the string
console.log(gameName.length);

//Convert string into uppercase
console.log(gameName.toUpperCase);

// To know in which position which char exisit
console.log(gameName.charAt(3));

// To know which char is in which posi
console.log(gameName.indexOf("M"));

// Tip: Go through the methods of strings on MDN and learn about it make a note of or remember the usage of it!

// Substring
console.log("SubString:::", gameName.substring(0, 8)); // you can't assign the negative values

// Slice
console.log(gameName.slice(-11, 3)); // this gives the starting values of the variable and sliced the remaining values such from -11 to 3
console.log(gameName.slice(-11, 5));
console.log(gameName.slice(0 - 5)); // => Here it will slice off the start to index 5 and give you the result
console.log(gameName.slice(0, 5)); // => But, here you'll get the sliced value of the string

// trim
const superName = "    Hello    ";
console.log(superName.trim()); // => Trim helps to remove whitespaces
console.log(superName);

// replace
const url = "soumyaranjandas@gmail-com";
console.log(url.replace("-", ".")); // Remember: This is will never change the og value it only cahnge the copy of the given variable

//includes
console.log(url.includes("@gmail"));

// There are many more methods of string give atleast 10-20 mins for it read it implement it, below is MDN link =>
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
