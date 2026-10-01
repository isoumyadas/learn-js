// {} = this is known as scope , this is not a Object, scope comes with if else , functions
// if () {
// this is scope
// }

// global scope mean's which can be used inside the scope but it's decarled outside the scope
// global scope (ye scope ander use ho sakta h)

let a = 500; // while this is known as global which can be used inside the scope and outside too.
const b = 5660;

if (true) {
  let a = 50;
  const b = 80; // (but ye bahar use nhi hona cahiye)
  var c = 90; // but var can be used anywhere!
  console.log(a); // Block scope can be used inside the scope only! if we tried to use outside the scope it gives error
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

// nested fucntions // yes we can add functions in functions
function outer() {
  let value = "Messi";

  function inner() {
    let website = "Youtube";
    console.log(`${website} is made for ${value}`);
  }

  console.log("Parent-Value:: ", value);
  // console.log(website); // this line will never be executed because of block scope // NOTE: parent value is outer and child value is inner so inner can access the parent value but inside the scope and which can't be accesed outside the scope

  inner(); // if you don't call the child value inside the parent scope then the parent function will not work
}
// console.log(value); // same for this too
outer(); // and if you don't call this then the entire nested fucntion will not work

// +++++++++++++++++++++++++++++++++++++++ INTRESTING +++++++++++++++++++++++++++++++++++++++++++++++++++
// You can hold the function in an variable

// but here is different execution will happen before it's initilized
console.log(lovely(5));
function lovely(a) {
  return a + 2; // this will work
}

console.log(holdingFunc(8)); // so when we hold the function in an variable, then  the execution will not happen before the initilization
const holdingFunc = function (value) {
  return value + 1; // so this will not work
};
