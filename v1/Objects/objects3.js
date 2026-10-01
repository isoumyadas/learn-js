// destructuring
const course = {
  coursename: "Javascript",
  price: "223",
  courseInstructor: "Soumya",
};

const { coursename } = course;
console.log(coursename); // this is how we can access the value of the object with using destructure method.

const { courseInstructor: instructor } = course; // by giving colon , you can access the value which you've assigned
console.log(instructor);

// json format
// {
//     "name" : "soumya",
//     "price" : "freee",
//     "instructor": "soumya"
// }

// usually data comes in array of object or object format
