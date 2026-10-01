// for loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  //   console.log(element);
}

/**
 *
 *  let i = 0 => This means assigning the value
 *
 *  i <= 10 => This is known as condition, checking
 *
 *  i++ =>  This iterates the value
 *
 *  // Working
 *
 *  The value is assigned then it's goes to condition and then it itrates after itrating, it goes to value that stores the value then again it start's the same proccess, but it will start from condition!
 *
 */

// we can add condition in loops

for (let i = 0; i < 10; i++) {
  const element = i;

  if (element == 5) {
    console.log(`This is the best Number if have ever seen`);
  }
  console.log(element);
}

// we can add loop in loop
for (let i = 0; i <= 10; i++) {
  console.log(`Outer value is ${i}`);
  // if you don't understand this then watch this vid again
  for (let j = 0; j <= 10; j++) {
    console.log(`This is new Method ${j} and ${i}`);
  }
}
// so here nested loop can access the outer loop values for eg: i

// with the help of this we can print table
for (let i = 0; i <= 10; i++) {
  console.log(`Table for ${i}`);
  // if you don't understand this then watch this vid again
  for (let j = 0; j <= 10; j++) {
    console.log(i + "*" + j + "= " + i * j);
  }
}

// Loop on array

const myArray = ["Flash", "Batman", "Superman"];

console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}

/**
 *
 * If you don't put ++ after i then it will infinitly loop through
 */

// Learning about keywords => break and continue
// Break means break the statement and continue will continue the statement

for (let j = 0; j < 20; j++) {
  if (j == 5) {
    console.log(" 5 is detected....");
    break;
  }
  console.log(` Value is ${j}`);
}

console.log(`=========================================`);

for (let j = 0; j < 20; j++) {
  if (j == 5) {
    console.log(" 5 is detected...."); // here it will print this then, continue to print the other numbers
    continue;
  }
  console.log(` Value is ${j}`);
}
