//Fetch
// fetch takes two params ie: fetch('URL', {}) , Second parametertakes methods, extraHeaders, body Etc. By defualt fetch api is GET req.

fetch("https://fakestoreapi.com/products", {})
  .then((res) => res.json()) // this returns as promise.
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// POST method
fetch("https://fakestoreapi.com/products", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  }),
})
  .then((res) => res.json()) // this returns as promise.
  .then((data) => console.log("data", data))
  .catch((err) => console.log(err));

//PUT
fetch("https://fakestoreapi.com/products/7", {
  method: "PUT",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    title: "Jadugar",
    price: 13.5,
    description: "Changed the description entriely",
    image: "https://i.pravatar.cc",
    category: "electronic",
  }),
})
  .then((res) => res.json()) // this returns as promise.
  .then((data) => console.log("dataDeleted", data))
  .catch((err) => console.log(err));

//Delete
fetch("https://fakestoreapi.com/products/7", {
  method: "Delete",
})
  .then((res) => res.json()) // this returns as promise.
  .then((data) => console.log("data", data))
  .catch((err) => console.log(err));

// In async Await

const getAllProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const res = await response.json();
    console.log("res", res);
  } catch (error) {
    console.log(error);
  }
};

getAllProducts();

//Why ?
// To extract the JSON body content from the Response object, you need to call .json(),
// which returns another promise. This is because reading the response body and parsing it as JSON is an asynchronous operation that might take some time,
// especially for larger responses.
