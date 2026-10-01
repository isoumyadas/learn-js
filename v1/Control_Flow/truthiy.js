// truthy value and falsy value

const email = "soumya@email.com";

if (email) {
  // so here we haven't checked or applied any conditional methods, but then also it assumes as true, so here comes truthy and falsy values
  console.log("Your email is verified");
} else {
  console.log("hmmm. email is missing?");
}

/**
 * Falsy Values
 * false; ""; 0; BigInt: 0n; null; undefined; NaN; -0
 *
 *
 * Truthy Values
 * true; "not an empty string"/ "0" / "false" " "; 1; []; {}; function() {};
 *
 */

// how to check the if array in empty

const empty = [];

if (empty.length === 0) {
  console.log("Array is empty");
}

// this is how also check the length of an object
const object = {};

if (Object.keys(object).length === 0) {
  console.log("Object is empty");
}

// Note:

/**
 *
 * false == 0 => true
 * false == '' => true
 * 0 == '' => true
 *
 */

// Nullish Coalescing Operator (??): null & undefined

// why this is use? because when the data comes from the database then we don't get direct response we can get null or data! so for that we use this if it's null then we can adjust it's case if not then give response

let val1;

val1 = 6 ?? 8;
console.log(val1);

// second case
let val2 = null ?? 10; // why it gives the 10 as output, because we get 10 as value so it will never assign null, if there is no option then it will assign as null
console.log(val2);

// but there is never 10 their will some function that will call some data from database.

// another case
// if there is multiple assigned then
val1 = null ?? 56 ?? undefined ?? 30; // then the first value which is given it will take that only for here it will take 56
console.log(val1);

// This is specailly made for null and undefined only
// If there is any error then how we can handle

// Ternary operator
// condition ? true : false   // syntax

const iceTea = 120;
iceTea >= 100
  ? console.log(`Your cash is accepted`)
  : console.log(`Please buy something higher than 100`);
