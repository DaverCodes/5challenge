

const scheduleBlocks = [...document.querySelectorAll('.scheduleBlock')];

console.log(scheduleBlocks)

var today = dayjs();
$('#currentDay').text(today.format('MMM DD, YYYY [at] HH:mm:ss:SSS'));





//______________option.1___________________________________
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

//____________________option.2_________________________________________________
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


// <!-- Use class for "past", "present", and "future" to apply styles to the
// time-block divs accordingly. The javascript will need to do this by
// adding/removing these classes on each div by comparing the hour in the
// id to the current hour. The html provided below is meant to be an example
// demonstrating how the css provided can be leveraged to create the
// desired layout and colors. The html below should be removed or updated
// in the finished product. Remember to delete this comment once the
// code is implemented.
// -->

// <!-- past class = grey present class =red future class = green -->