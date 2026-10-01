// Learn about precision

const num1 = new Number(100); // Difference is new Number tells the it's a precise number and it should be a number and also this is how we create the string to number too.
const num2 = 200;

console.log(num1);
console.log(num2);

console.log(num1.toString()); // Converts to string
console.log(num1.toFixed(2)); // It is mostly used in Ecommerce apps, This helps to give the fixed number after decimal

const otherNumber = 29.888;
console.log(otherNumber.toPrecision(3)); // So this gives you precise number of values or we can say gives you round off

const localeString1 = 100000;
console.log("Locale String:::", localeString1.toLocaleString()); // Locale string helps to section out things
console.log("Locale String:::", localeString1.toLocaleString("en-IN"));
console.log("Locale String:::", localeString1.toLocaleString("en-IN"), {
  maximumFractionDigits: 2,
  style: "currency",
  currency: "INR", // This will give you output liek this → ₹1,23,456.79
});

// +++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-2)); // this absoulte which helps to change the negative values to positive but it can't change the postive to neg
console.log(Math.round(4.6)); // this gives the round off value
console.log(Math.round(4.4)); // this gives the round off value

// same you can do with these methods
console.log(Math.ceil(4.3)); // This gives the most probabal value like this will give 5 but when you do same with 4.4 then also it will give you 5
console.log(Math.floor(4.9)); // This gives you the least probabl valye like this will give you 4 not 5 and when you try to do samw with 4.9 then also this will give you 4 only

// Math
console.log(Math.random()); // This method gives you number between 0 to 1
console.log(Math.random() * 10 + 1); // so this does is multiply with 10 which shifts the value to front and 1 helps to tell that we need minimum 1 number and more than that

// But when you dont need that decimal number then you can use floor dont use round

console.log("All is well::: ", Math.floor(Math.random() * 10) + 1);

// But when you need to explicit that you need min 10 not less than that, then
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// Max min
console.log(Math.max(8, 7, 9, 45));
console.log(Math.min(8, 7, 9, 45));
