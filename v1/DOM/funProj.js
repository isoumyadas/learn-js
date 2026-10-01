// 1. Create a Func which creates Div with some properties
// 2. And create a loop to loop 5 div at a time with different colors and text.

const createDiv = (titleName, colors) => {
  let doc = document.createElement("div");
  doc.className = "divs";
  doc.id = "unique";
  doc.style.color = "black";
  doc.style.fontWeight = "bold";
  doc.style.backgroundColor = colors;
  doc.style.padding = "1rem";
  // 1st way to do this
  // const textNode = document.createTextNode(titleName);
  // doc.appendChild(textNode);

  // 2nd way to do this
  doc.appendChild(document.createTextNode(titleName));
  document.body.appendChild(doc);
};

const colors = ["red", "green", "yellow", "lightBlue", "lightGreen"];
const titleName = ["Red", "Green", "Yellow", "Light Blue", "Light Green"];

for (let i = 0; i < 5; i++) {
  createDiv(titleName[i], colors[i]);
}
