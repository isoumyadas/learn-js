// singleton
const newObj = new Object();

// non-singleton
const newObj1 = {};

(newObj1.name = "sammy"), (newObj1.age = 21);

console.log(newObj1);

//=========================================================================================
const regularUser = {
  email: "sammy@gmail.com",
  username: {
    fullname: {
      firstname: "Soumya",
      lastname: "Das",
    },
  },
};

console.log(regularUser.username.fullname.lastname); // this is how we can access multiple nested objects

// Object.assign // concating the multiple user
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// this is one way to do this
const obj4 = Object.assign({}, obj1, obj2, obj3); // so here {} is target value and all other are source
console.log(obj4);

// another and latest way to this
const obj5 = { ...obj1, ...obj2, ...obj3 };
console.log("Obj5", obj5);

// this is how data comes from database in format of json and array of objects
const userList = [
  {
    name: "soumya",
    age: 21,
  },

  {
    name: "Messi",
    age: 36,
  },

  {
    name: "Nitin",
    age: 21,
  },
];

// To access this
console.log("Array-of-Object: ", userList[2].name);

// how to access the keys and value from any objects
console.log(Object.keys(obj1)); // this gives the value in array [1,2]
console.log(Object.values(obj1));
console.log(Object.entries(regularUser));
// =>  output:: [
//   [ 'email', 'sammy@gmail.com' ],
//   [ 'username', { fullname: [Object] } ] :: username is key and after comma is value
// ]

// when you want to see the if the property is exist or not
console.log(userList[0].hasOwnProperty("name"));
console.log(userList[0].hasOwnProperty("loggedIn"));
