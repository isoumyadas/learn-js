//Notes:
/**
 *
 *  A promise is in one of these states:
 *  1. Pending: initial state, neither fulfilled nor rejected.
 *  2. Fulfilled: meaning that the operation was completed successfully.
 *  3. Rejected: meaning that the operation is failed.
 *
 */

// Creation of Promise
// 1. Promise takes 2 parameter  >> a. CallBack b. An Object which takes extra methods

const promiseOne = new Promise(function (resolve, reject) {
  // This callback takes two param => 1.resolve 2.reject
  // Do an async task
  // DB calls, cryptography, network

  setTimeout(function () {
    console.log("Async Task is Completed..");
    resolve(); // resolve is directly connected to then. 1. When you declare resolve it actually runs then.
  }, 1000);
});

promiseOne.then(function () {
  // then is directly connected to resolve
  console.log("Succesfull");
});

// Another way to do...
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Task Completed......");
    resolve();
  }, 2000);
}).then(() => {
  console.log("Resolved"); // In then everything gets returned. not in creation!
});

// ===============

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "sammy", email: "sorry@sorry.com" }); // many times the data passed as object.
  }, 3000);
});

promiseThree.then((user) => {
  console.log("user:", user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "soumyaa", age: 22 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 4000);
});

promiseFour
  .then((user) => {
    console.log("User::", user);
    const data = user.username;
    console.log("data", data);
    return data;
  })
  .catch((err) => {
    console.log("err:>", err);
  })
  .finally(() => {
    console.log("Done");
  }); // This is an default, as this will run any how

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", price: 2230 });
    } else {
      reject("Error: JS went wrong");
    }
  }, 5000);
});

// new Approach (Async Await)
const aysncFunction = async () => {
  try {
    const res = await promiseFive;
    console.log("res::>", res);
  } catch (error) {
    console.log("Error:", error);
  }
};
aysncFunction();

// Scenario 1
async function getAllUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log("res::>", res);
    const data = await res.json(); // here we changed the incoming res string into json, as we know response moslty comes as string.
    console.log("DATA::", data);
    return data;
  } catch (error) {
    console.log("Error::>", error);
  }
}

getAllUsers();

//Scenario 2
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    // this then is used to handle the above then.
    console.log("DATA::::>", data);
  })
  .catch((err) => err);
