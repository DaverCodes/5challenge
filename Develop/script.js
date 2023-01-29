
const textZones = [...document.querySelectorAll('.col-8')];
const buttons = [...document.querySelectorAll('.btn')];
const hourArray = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];
console.log(hourArray);

buttons.forEach(function(buttonArrayFinder) {
  buttonArrayFinder.addEventListener('click', function() {
    let saveArrayPoint = buttons.indexOf(this);
    console.log(saveArrayPoint);
    let saveText = textZones[saveArrayPoint].value
    if (saveArrayPoint <= 11) {
      let logHr = saveArrayPoint + 9 + 'AM'
      console.log(logHr, saveText);
      localStorage.setItem(logHr, saveText)
    } else {
      if (saveArrayPoint = 12) {
        let logHr = saveArrayPoint + 'PM'
        console.log(logHr, saveText);
        localStorage.setItem(logHr, saveText)
      } else {
        if (saveArrayPoint > 12) {
          let logHr = saveArrayPoint - 12 + PM
          console.log(logHr, saveText);
          localStorage.setItem(logHr, saveText)
        }
      }
    }
  });
});
// get item and put it in text area
var keyList = Object.keys(localStorage)
console.log(keyList);



var today = dayjs();
$('#currentDay').text(today.format('MMM DD, YYYY [at] HH:mm:ss:SSS'));

// save.onclick = function () {
//   const log9 = hrInput9.value;
  
//   console.log(log9);
//   localStorage.setItem('9am', log9);
//   location.reload();



// };


// const timeContinuum = dayjs().hour()
// const workArray = 

//options for past-present-future color code


//______________option#1___________________________________
// timeBlocks.forEach(block => {
//   const blockHour = block.firstElementChild.id;
//   const blockDiv = block.lastElementChild;


// if (workArray < timeContinuum) {
//   blockDiv.classList.add("past");
//   blockDiv.classList.remove("present", "future");
// } else if workArray === timeContinuum) {
//   blockDiv.classList.add("present");
//   blockDiv.classList.remove("past", "future");
// } else {
//   blockDiv.classList.add("future");
//   blockDiv.classList.remove("past", "present");
// }
// });

//____________________option#2_________________________________________________
// function isTimePastPresentorFuture (workArray)  
// {  
//   if (workArray == timeContinuum)  
//   {  
//     return "Correct";  
//   }  
//   else if (workArray > numberToGuess)  
//   {  
//     return "Lower";  
//   }  
//   else  
//   {  
//     return "Higher";  
//   }  
// }

//______________________________________________________________


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// javascript code that knows if a number between 9 and 17 is greater than- less thab- or equal to any other number in that array







// pseudocode
// GIVEN I am using a daily planner to create a schedule


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar = add day.js

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours=finish up time blocks

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future=  compare time block with current day.js time. apply correct class based on comparison 

// WHEN I click into a timeblock
// THEN I can enter an event = create a variable and store in event listener to set to local storage

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist= local storage