// IIFE : Immediate Invoked Function Expression

// Syntax:: () () // the first parenthesis is used for writing something in it  and second is used for exection
// ex::

// named IIFE
(function imme() {
  console.log("DB Connected");
})(); // if we don't put semi-colon then it wil give error for another IIFE.

// So why we use IFFE ::?
/** So, for ingoring the global scopes pollution we use IIFE,*/

// How to put params and arguments in IIFE, also we can make arrow fucntion IIFE

// simple IIFE
((name) => {
  console.log(`Hola ${name}`);
})("Sammy");
