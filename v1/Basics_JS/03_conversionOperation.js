// To Check the type of the value => typeof
//You can use
let value = 33;
let letter = "abc";

console.log(typeof value);
console.log(typeof letter);

// What if i want the varaible value1 as string and letter1 as number

let value1 = String(33);
let letter1 = Number("33");

console.log(typeof value1);
console.log(typeof letter1);

// Now what if the varaible value is unqiue it includes string as well as number

let unique = "33abc";
let unique1 = Number(unique);
console.log("Unique:::", unique1); // => This shows NaN means Not a Number
console.log(typeof unique1);

//Boolean Values
// True => 1
// False => 0; undefined => Undefined; null => 0

//Notes to remember
/* 
    1 => True; 0 => False;
    "" => False;
    "Soumya" => True
*/

// *********************************** Operations ***********************************************************

// To make the number Negative
let numberVal = 12;
let negVal = -numberVal;
console.log("Negative Value:::", negVal);

// Type of Operations
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log("Power Off:::", 2 ** 4); // => Power off
console.log("Divide:::", 2 / 2); // => Divide
console.log("Remiander:::", 2 % 2); // => Remainder

// So here is the tricky conversion
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); // => It converts into 122 becuase starting value is String so it behaves as String for all the values
console.log(1 + 2 + "2"); // => It converts into 32 because starting value is Number and it acts to add the numbers

//Learn about Prefix and Postfix on MDN
// Prefix : ++a ; Postfix: a++
