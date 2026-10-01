// IMP

/**
 *  Fetch Api excepts two params => 1. URL 2. Optional Parameters(such as method: POST, PUT, GET)
 */

// Scenario 1
async function getAllUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log("res::>", res);
    const data = await res.json(); // here we changed the incoming res string into json, as we know response moslty comes as string.
    console.log("DATA::", data);
    return data;
  } catch (error) {
    console.log("Error::>", error);
  }
}

// getAllUsers();

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

// 1. Note: all the network request always goes in onFulfilled[], as these are giving us some response. even error is 404,400,200,201
// 2. When fetch calls it invokes two things, the yellow line goes to memory for memory allocation and green line goes for request to find response,
//    after if the data is resolve or reject, it then goes to data and then data goes to Global Memory and this gives to response
// 3. And fetch is most high priority, so it executes first then any other async func. also the fetch goes to priority queque

// New Examples

fetch("https://fakestoreapi.com/carts?limit=5")
  .then((res) => res.json())
  .then((data) => {
    const resData = JSON.stringify(data);
    console.log("resData::", resData);
    return resData;
  });

// we can also check if there is any error

fetch("https://fakestoreapi.com/carts?limit=5") // If there is any problem in api, then also the fetch will run. it will show the error but then also it will resolve
  // so for that we need to apply some checks/ condition
  .then((res) => {
    if (res.ok) {
      console.log("successful");
      return res.json();
    } else {
      console.log("Nope");
    }
  }) // this actually returns an promise so that's why we gave another then to handle the response or data
  .then((data) => {
    const resData = JSON.stringify(data);
    console.log("resData::", resData);
    return resData;
  });

// Same example but using async & await

async function cartsData() {
  // To ensure it should be error hassle free
  try {
    const fetchData = await fetch("https://fakestoreapi.com/carts?limit=5"); // this is promise so, we have assigned await here
    console.log("FetchData::>", fetchData);

    const resData = await fetchData.json(); // this returns promise too, so we have assigned await here too

    // ForEach for looping fetchData every value.
    resData.forEach((res) => {
      console.log("res", res);
    });

    console.log("resData", resData);
    return resData;
  } catch (error) {
    console.log("Error::>", error);
  }
}

cartsData(); // called the function to execute
