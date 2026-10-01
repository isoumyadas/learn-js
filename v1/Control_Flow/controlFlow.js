// Pura code ek particular conditional flow pe run hona cahiye!

/**
 * conditional & Logical operators
 *
 * 1. <  => smaller than
 * 2. >  => greater than
 * 3. <=  => smaller than and equal to
 * 4. >=  => greater than and euqal to
 * 5. !=  => not equal to
 * 6. ==  => equal to
 * 7. ===  => strict equal to
 * 8. && => and [ Checks if both value is true or not if not then, it will not execute or fall in else block]
 * 9. || => or [ Checks if both of one value gets statisfied, if both of one doesn't get statisfied then it will not execute]
 */

// If
if (true) {
  // If it's true then the code get's executed but when it's false code doesn't get executed
}

// also their is else which acts as if condition is not statisfied then print me

// eg:

const points = 100;

if (points > 200) {
  let power = "heal";
  console.log(`Please ${power}`);
} else {
  console.log(`Knocked out`);
}

if (points === 100) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

// short hand notation
// but this is not reccomded
const value = 10000;

if (value > 600) console.log("You are lucky0"); // implicit return
// you can also write the multiple lines by seperating with commas
if (value > 600)
  console.log("You are lucky"), console.log("You are double Lucky"); // Not reccomended to write this type of code

// Nesting::
// if you want to check multiple conditions

if (value < 500) {
  console.log("Less than 500");
} else if (value < 800) {
  console.log("Less than 800");
} else {
  console.log(`Less than 50000`);
}

// real-life example

const debitCard = true;
const userLoggedIn = true;

if (debitCard && userLoggedIn) {
  console.log("You can buy courses!");
} else {
  console.log("Please Follow Proccess to buy courses!");
}

const signedWithGoggle = true;
const signedWithEmail = false;

if (signedWithEmail || signedWithGoggle) {
  console.log("Hello User");
} else {
  console.log("Please Login");
}
