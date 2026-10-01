// Date : Date is an object in javascript.
// JavaScript stores dates as number of milliseconds since January 01, 1970

let myDate = new Date();

console.log("To String:::", myDate.toString());
console.log("To Locale String:::", myDate.toLocaleString());
console.log("To Date String:::", myDate.toDateString());
console.log("To JSON:::", myDate.toJSON());
console.log("To Locale Date String:::", myDate.toLocaleDateString());
console.log(typeof myDate);

// my created date
// let myCreatedDate = new Date(2023, 3, 14, 6, 8);
let myCreatedDate = new Date("04-23-2023");
console.log("myCreatedDate::", myCreatedDate.toDateString());
console.log("myCreatedDate::", myCreatedDate.toLocaleString());
console.log("myCreatedDate::", myCreatedDate.toLocaleDateString());

const weekday = myDate.toLocaleString("default", {
  weekday: "long",
  month: "long",
});

console.log(weekday);

//TimeStamps
let TimeStamp = Date.now();
console.log(TimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000));
// Learn more about Timestamps

console.log(myCreatedDate.getDay());
console.log(myCreatedDate.getTime());
console.log(myCreatedDate.getMonth());
console.log(myCreatedDate.getUTCDate());
