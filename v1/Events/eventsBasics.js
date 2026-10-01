// On Click

// 1st way to execute => Inline in HTML using onClick property

// 2nd way to execute  => Here the only problem is using this approach will occur some problems as this ain't give us much information
document.getElementById("owl").onclick = () => {
  alert("OWLLLLLLLLL");
};

// For this you should always use eventListensers as this will give you propogation and information
// AddEventListener gives us more functionality to handle the events such as drag-and-drop, mouse click, keyboard click etc
// 1: Always write events name in string : 'click', 'submit'
// 2: Second parameters will be a function : () => {} || function() {} ; we also pass e as parameter, e stands for Events
// 3: Third parameter will be Either TRUE or FALSE, Default is false
document.querySelector("#river").addEventListener(
  "click",
  (e) => {
    alert("River clickeddd!!!!!");
  },
  false
);

document.querySelector("#images").addEventListener(
  "click",
  (e) => {
    console.log("Clicked inside UL");
  },
  false
);

document.querySelector("#owl").addEventListener(
  "click",
  (e) => {
    console.log("OWL clicked!");
    e.stopPropagation();
  },
  true // here we used event capturing
);

// other appraoches
// attachEvent => this is used in early approaches
// jQuery => .on ,event are used in early appraoches

// what type of events do we get?
// 1: Browser events 2: Env events

// What does Event propogation mean?
/**
 * Event Propogation has two context:
 * 1. Event Bubbling => market use this
 * 2. Event Capturing => but it also have scenarios to use this
 *  JO bhi element tracks script file, big elements from inside to outside this is called Event propogation
 *  Bubbling means from inside to outside, form down to up
 *
 * For doing capturing mode, use true
 *
 * Big elements from inside to outside, are executed when the event propogation is false and when it's true it will change the big elements from outside to inside
 *
 * To stop the bubbling, you can use e.stopPropogation so it not bubble from inside to outside
 */

// Learn about this more
/**
 * 1. Type
 * 2. timestamp
 * 3. defaultPrevented => To prevent the default behaviour of any functionality
 * 4. target
 * 5. source Element
 * 6. to Element
 * 7. current Element
 *
 * // Interview Q
 * => Position Related
 * 1. clientX
 * 2. clientY
 * 3. screenX
 * 4. screenY
 * 5. altKey
 * 6. crtlKey
 * 7. shfitKey
 * 8. keyCode
 */

// Prevent Default
document.querySelector("#google").addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log("Google Clicked");
});

// real world examples
// document.querySelector("#images").addEventListener(
//   "click",
//   (e) => {
//     console.log(e.target.parentNode); // to select whole parent of that image
//     let removeImage = e.target.parentNode;
//     // 1st method to remove
//     removeImage.remove();

//     //2nd method
//     // removeImage.parentNode.removeChild(removeImage );
//   },
//   false
// );

// The above function is good, but the issue is that when you click on li instead of img it will remove all the images, to prevent that we can use strict conditions,
// like tagName, this will ouptut the tagName when you clicked to particular target

document.querySelector("#images").addEventListener(
  "click",
  (e) => {
    console.log(e.target.tagName); // to select whole parent of that image
    if (e.target.tagName === "IMG") {
      // the tagName values will be always be in CAPITAL LETTERS
      let removeImage = e.target.parentNode;
      // 1st method to remove
      removeImage.remove();
    }
    //2nd method
    // removeImage.parentNode.removeChild(removeImage );
  },
  false
);

/**
 * Event Bubbling and Capturing:
 * 
 * Capturing Phase:
   #outer (outermost element)
   #middle
   #inner (target element)
  Bubbling Phase:
   #inner (target element)
   #middle
   #outer (outermost element)
 * 
 */
