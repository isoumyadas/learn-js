const myObject = {
  js: "Javascript",
  rb: "Ruby",
  cpp: "C++",
  swift: "okay apple",
};

// for In
for (const key in myObject) {
  console.log(`${key} : ${myObject[key]}`); // myObject[key] will give you values and key will give you keys, for in is mostly used for objects iteration
}

// can this will work in array
const programmingLanguages = ["js", "cpp", "swift", "jsx"]; // arrays has keys starts form 0 to infinity

for (const key in programmingLanguages) {
  console.log(programmingLanguages[key]); // so while doing key it gives us key value of array that starts from 0 but while consoling like this way it will give you value
}

// for itrating on map is not possible for "forin loop"
// learn about forIn loop
