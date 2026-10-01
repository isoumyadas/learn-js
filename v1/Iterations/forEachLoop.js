const coding = ["cpp", "js", "gatsby", "react", "next", "node"];
const coding1 = ["cpp", "js", "gatsby"];

coding.forEach((item) => {
  console.log(item);
});

// we can also do with already assigned func
function printMe(item) {
  console.log(item);
}
coding1.forEach(printMe);

//
// 8:18:00 // learn from this line
// forEach also has index, arr as access

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// array of object
const myNewObject = [
  {
    languageName: "Javascript",
    fileName: "js",
  },

  {
    languageName: "Python",
    fileName: "py",
  },

  {
    languageName: "C++",
    fileName: "cpp",
  },
];

myNewObject.forEach((item) => {
  console.log(item.languageName);
});
// Here item means every object in the array, so we can have access of it
