const myArr = [0, 1, "soumya", true]; // Array is defined using Square Brackets and in that bracekets the values are called elements and it can any datatype

//how to access the array elements
console.log(myArr[2]);

//we can also decalre the arrays like this too
const heros = new Array("hello", 7, 8);
console.log(heros);
console.log(heros[0]);

// Arrays are the shallow copy and deep copy // shallow copy mean share's same reference point and deep don't!! (like stack and heap)

//Arrays Methods
let arrays = [0, 1, 2, 55, 3, 4, 5, 77];
//how to add the elements in an existing array // you can put only one element while push not like this (7,8) only this (7)
arrays.push(99);
console.log("Push:", arrays);

// pop's helps to remove the last element of the array
arrays.pop(); // there should no parameter while using pop
console.log("Pop:", arrays);

//unshift helps to add the value in elements at starting, but is unoptimized so use it wisely
arrays.unshift(9);
console.log("unshift", arrays);

// shift helps to remove the value in an array at starting
arrays.shift();
console.log("shift", arrays);

// includes and indexOf {Includes gives boolean value if the element exists or not} {indexOf gives index of the exisitng array it gives the position of the element}
console.log(arrays.includes(5));
console.log(arrays.includes(8));

console.log(arrays.indexOf(77));
console.log(arrays.indexOf(55));

//join() method
//join method helps to join all the array elements bind them and convert them into string!
const person = ["soumya", "nitin"];
console.log(person.join());

//slice splice
// The main differnce between splice and slice is slice helps to slice the value and gives you the result of the sliced array
const ice = [1, 2, 3, 45, 6];
console.log(ice);
console.log("Slice::", ice.slice(2, 4)); // in this it will start from 2nd index and end on 3rd index
console.log("OG-Slice::", ice);

// and splice removes the elements in an array and it also change the elements of the array => the remaining elements
console.log(ice.splice(2, 4)); // splice change the original array , so when we splice the value then it removes the splice part in the original array : for ex
console.log(ice);

const something = [1, 22, 43, 34, 15, 36, 67, 88];
console.log("SPLICE:::", something.splice(2, 6)); // it includes the last index too => also this say's is it will start from the 2nd index and splice till 6th value from their, like it will start from 43 and end till it got 6th value
console.log("OG::", something); // og value got changed
// Learn more about slice and splice
