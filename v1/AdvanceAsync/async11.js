// Async programming is a process that allows an application to run a second set of instructions while focusing on its primary or basic process.
// Few use cases for async programming include reduced inefficiencies from an application and efficient data collection.

//Example of async
setTimeout(() => {
  console.log("1. Hello world i'm 1st");
}, 1200);
setTimeout(() => {
  console.log("2. Hello world i'm 2nd");
}, 1000);

// Callback & callback hell looks like pyramid structure because it is too much nested

function task1(callback) {
  setTimeout(() => {
    console.log(" I. Everyday is Wonderful");
    callback();
  }, 2000);
}

function task2(callback) {
  setTimeout(() => {
    console.log(" II. Forgot about this");
    callback();
  }, 3000);
}

// this is what callback hell looks like
task1(() => {
  task2(() => {});
});

// another example ex: Callback
const showMessage = (callback) => {
  console.log(callback);
};

const firstMessage = (callback) => {
  setTimeout(() => {
    showMessage(`Messaged`);
    callback();
  }, 2000);
};

const seMessage = () => {
  showMessage("You");
};

firstMessage(seMessage);

// Promises

// A promise is a assurance or guarntee that something will happen in the future.
// A person can promise another person a specific outcome or reuslt. A promise is an object that holds the future value of an async operation

// Ex: Requesting some data from a server, the promise, promises us to get the data which can use in future.

// States of a Promise
// 1. Pending
// 2. Fulfilled
// 3. Rejected

const promise = new Promise((resolve, reject) => {
  const allWentWell = true;

  if (allWentWell) {
    resolve("All things went well!");
  } else {
    reject("OOps! something went wrong!");
  }
}, 2000);

console.log(promise);

// Firstly promise is always in pending state after that it will be either resolve or reject

const promise1 = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 10);

  setTimeout(() => {
    if (randomNumber < 4) {
      resolve("Well Done! You Gussed Right!");
    } else {
      reject("Oops! You Guessed Wrong! Unlucky.");
    }
  });
}, 2000);

console.log(promise1);

// Then & catch
promise1
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

// Example
const pro1 = new Promise((resolve, reject) => {
  resolve("Well");
});
const pro2 = new Promise((resolve, reject) => {
  resolve("Well Done");
});
const pro3 = new Promise((resolve, reject) => {
  reject("Well You Failed");
});

pro1
  .then((value) => {
    console.log(value);
    return pro2;
  })
  .then((value) => {
    console.log(value);
    return pro3;
  })
  .catch((error) => {
    console.log(error);
  });

// Promise All: If you've bunch of promises like 5-6 then you can check if its fulfilled if one get's reject then whole things get's rejected

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise One Resolved");
  }, 2000);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Two Resolved");
  }, 1500);
});

Promise.all([promiseOne, promiseTwo])
  .then((data) => console.log(data[0], data[1]))
  .catch((error) => console.log(error));

// Async & Await

const preHeatOven = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const preHeatOven = true;

      if (preHeatOven) {
        resolve("Preheat oven to 180deg");
      } else {
        reject("Failed Task");
      }
    }, 1000);
  });
};
const addSugar = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addSugar = true;

      if (addSugar) {
        resolve("Place it");
      } else {
        reject("Failed Task");
      }
    }, 1000);
  });
};
const addFlourAndChoco = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const saltFlour = true;

      if (saltFlour) {
        resolve("Stir it");
      } else {
        reject("Failed Task");
      }
    }, 1000);
  });
};
const bakeMixture = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bakeMix = true;

      if (bakeMix) {
        resolve("Brownies");
      } else {
        reject("Failed Task");
      }
    }, 1000);
  });
};

const bakeChocoBrownies = async () => {
  try {
    const taskOne = await preHeatOven();
    console.log(taskOne);

    const taskTwo = await addSugar();
    console.log(taskTwo);

    const taskThree = await addFlourAndChoco();
    console.log(taskThree);

    const taskFour = await bakeMixture();
    console.log(taskFour);

    console.log("Enjoy");
  } catch (error) {
    console.log("err", error);
  }
};
bakeChocoBrownies();
