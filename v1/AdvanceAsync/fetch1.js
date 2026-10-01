/**
 *  Fetch Api excepts two params => 1. URL 2. Optional Parameters(such as method: POST, PUT, GET)
 */

// Here we have learned about promises and fetch in deep and throughly.

// Intially the when Promise runs,
// it returns an empty object as undefined but after the certain time after it get's resolved the undefined property fills automatically.

// TODO: Promise is an object representing the eventual completion or failure of an async operation.

// Callback Hell --> Example
// createOrder(cart, function (orderId) {
//   proccedToPayment(orderId, function (payment) {
//     orderSummary(payment, function (updateWallet) {
//       updateWallet();
//     });
//   });
// });

// Callback hell was hard to maintain, non-readable

// we always return a promise from promise while chaining

//Creating an Promise

const cart = ["shoes", "pants", "kurta"];

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderId = "123";
    if (orderId) {
      resolve(orderId);
    }
  });

  return pr;
}

function validateCart(cart) {
  return true;
}

function proccedToPayment() {
  return new Promise(function (resolve, reject) {
    resolve("Payment Succesfull");
  });
}

// promise is called

const promise = createOrder(cart);
promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return proccedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    // to handle error gracefully, whenever you call promise always write catch.
    console.log(err.message);
  });

// Fetch understanding

const newUser = {
  userName: "Sammy",
  age: 34,
};

fetch("https://fakestoreapi.com/carts?limit=5", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newUser),
})
  .then((res) => {
    if (!res.ok) {
      console.log("Something went wrong");
      return;
    }
    return res.json();
  })
  .then((data) => {
    // console.log("Data:>", JSON.stringify(data[0].products[1])); // This is used to get the data
    console.log("Success True"); // This is used for creation of data
  })
  .catch((Error) => console.log(Error));

// Project

const btn = document.querySelector("button");
const contain = document.querySelector("#container");

const clickEvent = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    if (!res.ok) {
      console.log("Problem"); // Here we have put the condition, because we want to parse the data into json format, so we can get the message data too, but there is no need to do this.
    }
    // console.log("Da:>", data[0].username);
    data.forEach((el) => {
      return contain.append(JSON.stringify(el.username));
    });

    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

btn.addEventListener("click", clickEvent);
