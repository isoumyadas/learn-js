const heros = ["superman", "batman", "aquaman"];
const marvel = ["thor", "spiderman", "black panther"];

// heros.push(marvel); // helps to push values in existing array
// console.log(heros);

// now how to access the values of the array in array
// console.log(heros[3][0]); // here we've accessed the element of 3rd index and it's value of index

// Now this is not a efficient way to add two array

//concat :: concat helps to combine one or two arrays and return's a new array

const allHeros = heros.concat(marvel);
console.log("all Heros::: ", allHeros);

// Spread Operator mean spread up the things like in array if we use spread then that array will spread up individually

const all_heros = [...heros, ...marvel]; // whenever you spread, use spread using square barckets
console.log("Spread_Operator::: ", all_heros);

// Flat method helps to flat all the elements present in an array creates a new array with all sub-array elements concatenated

const allArray = [1, 2, 3, [2, 3, 4, 5], [23, 4, 5]];
console.log("Old AllArray:::", allArray);
console.log(allArray.flat(Infinity));

// when you do data scraping, when scrap data from another websites it comes in another format like nodelist, objects, strings but we need array and also we need to loop an array
// so here we can use Array

//asking if it's an array
console.log(Array.isArray("soumya")); // this gives boolean value
console.log(Array.from("soumya")); // this converts this into individual seperation.

// But when you pass object as element
console.log(Array.from({ name: "Soumya" })); // Then this show empty array [], because it ask's whether to take key or value we have specific it

// similarly we can use of to make new array of any elements
const num1 = 100;
const num2 = 200;
x;
const num3 = 900;
console.log(Array.of(num1, num2, num3));
