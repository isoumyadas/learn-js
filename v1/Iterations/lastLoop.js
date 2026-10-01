const coding = ["cpp", "js", "gatsby", "react", "next", "node"];

const newArr = coding.forEach((items) => console.log(items));
console.log("newArr", newArr);

// when we store this in a variable, but forEach doesn't return anything when we try to return it will show undefined
let lastestLoop = [];
const loop = coding.forEach((val) => {
  //   console.log(val);
  lastestLoop.push(val);
  // return val;
});
console.log("3rd", lastestLoop);

// so above ex will not return anything!

// New example
// here if we want values with condition check, this return values too
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// here we have to pass callback
const val = numbs.filter((nums) => nums > 4);
console.log(val);
console.log("oldArr::", numbs); // filter doesn't change the og array

// when we start a scope we have return something

const num = numbs.filter((val) => {
  return val > 7; // so when where you start a scope or create a scope always try to return it or else it will not return anything
});
console.log(num);

const words = [
  "Ok",
  "Soumya",
  "Narendra",
  "Jatin",
  "Nitin",
  "Nilesh",
  "Nilesh",
];

const filterWords = words.filter((word) => {
  return word.length > 5;
});

console.log("filterWords:::>", filterWords);

// if we want to check condition on forEach
const newNumArray = [];
numbs.forEach((num) => {
  if (num > 6) {
    newNumArray.push(num);
  }
});
console.log("Result::", newNumArray);

// Fliter: returns the reuslt if condition is allNumbers
// we can also filter with this project

const allBooks = [
  {
    bookName: "Book1",
    genre: "sciFic",
    price: 2330,
    publish: 2001,
  },
  {
    bookName: "Book2",
    genre: "History",
    price: 1222,
    publish: 2002,
  },
  {
    bookName: "Book3",
    genre: "sciFic",
    price: 4569,
    publish: 2004,
  },
  {
    bookName: "Book4",
    genre: "Comic",
    price: 233,
    publish: 1992,
  },
  {
    bookName: "Book5",
    genre: "science",
    price: 2330,
    publish: 1998,
  },
  {
    bookName: "Book6",
    genre: "biography",
    price: 1000,
    publish: 2014,
  },
];

const values = allBooks.filter((item) => {
  return item.genre === "sciFic";
});
console.log("Values => ", values);

const price = allBooks.filter((item) => item.price === 2330);
console.log("Price => ", price);

const checkPublishDate = allBooks.filter(
  (item) => item.publish >= 2000 && item.genre === "History"
);
console.log(checkPublishDate);

// map
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const allNewNums = allNumbers.map((val) => val >= 7); // now here it returns boolean value for this example (using map)
console.log("new::", allNewNums); // also map returns new array, as new we know about stack and heap
console.log("old", allNumbers);

const newArrNums = allNumbers.map((item) => item + 10);
console.log("NewARRNUMS::: ", newArrNums);

const newAllNums = [];
allNumbers.forEach((item) => {
  let newVal = item + 5;
  return newAllNums.push(newVal);
});
console.log(newAllNums);

//Another Example you can use the map:
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformateedArray = kvArray.map(({ key, value }) => ({ [key]: [value] })); // here square brackets are used to dynamically pass the key from the kvArray.
console.log("ReformatedArray", reformateedArray);

// Another way
const products = [
  { name: "sports car" },
  { name: "laptop" },
  { name: "phone" },
];

const productsWithPrice = products.map((product) => {
  return { ...product, price: 100 };
});
console.log(productsWithPrice);

// parseInt
const parseINT = ["1", "2", "3"].map(parseInt);
console.log("ParseINT:>", parseINT);
/**
 * Array.prototype.map passes 3 arguments: the element, the index, and the array. The third argument is ignored by parseInt — but not the second one! This is the source of possible confusion.
 * parseInt("1", 0); // 1
 * parseInt("2", 1); // NaN
 * parseInt("3", 2); // NaN
 */

// Whenever you want to create new array and want loop then you can use map
// or else you can use ForEach // use ForEach only for looping purpose not for creating new array

// chaining (one or more method can be used)
const chaining = allNumbers
  .map((item) => item * 10)
  .map((item) => item + 1)
  .filter((item) => item >= 40); // filter means jo true hoga vahi pass hoga.

console.log("Chaining-Result:: ", chaining);

// Reduce

const reduceNums = [1, 2, 3];

const newReduceVal = reduceNums.reduce((acc, currVal) => {
  console.log(`acc:: ${acc} and currVal:: ${currVal}`);
  return acc + currVal; // so here acc is an empty var which takes value from which we have declared after curly barce (4)
}, 4);
console.log("newReduceVal", newReduceVal);

const optimize = reduceNums.reduce((acc, currVal) => acc + currVal, 1); // works as same as aboveExample // optimize code
console.log(optimize);

// real World ex
const shoppingCart = [
  {
    courseName: "React.js",
    coursePrice: 3444,
  },
  {
    courseName: "Python",
    coursePrice: 3000,
  },
  {
    courseName: "Data-Science",
    coursePrice: 12999,
  },
  {
    courseName: "Node.js",
    coursePrice: 499,
  },
];

const reusltVal = shoppingCart.reduce((acc, item) => acc + item.coursePrice, 0);
console.log(reusltVal);
