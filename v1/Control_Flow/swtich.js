// swtich syntax
/**
 * switch (key) {
    case value:
        
        break;

    default:
        break;
}
 */

const month = 5;

switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break; // so here, is the theory if you don't put the break statement, then after the condition is statisfied it will run all the case after the conditon is statisfied, except defualt
  case 6:
    console.log("June");
    break;

  default:
    console.log("Not any of the month");
    break;
}

// same you can do for string too..

const monthName = "May";

switch (monthName) {
  case "Jan":
    console.log("Januaryyyyy");
    break;
  case "Feb":
    console.log("Febuaryyyyy");
    break;
  case "March":
    console.log("Marchhhhhh");
    break;
  case "April":
    console.log("Aprillllllll");
    break;
  case "May":
    console.log("Mayyyyyyyy");
    break; // so here, is the theory if you don't put the break statement, then after the condition is statisfied it will run all the case after the conditon is statisfied, except defualt
  case "June":
    console.log("Juneeeeee");
    break;

  default:
    console.log("Not any of the month");
    break;
}
