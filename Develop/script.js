const textZones = [...document.querySelectorAll('.col-8')];
const buttons = [...document.querySelectorAll('.btn')];
var colorHour = dayjs().hour();

buttons.forEach(function(buttonArrayFinder) {
  buttonArrayFinder.addEventListener('click', function() {
    let saveArrayPoint = buttons.indexOf(this);
    console.log(saveArrayPoint);
    let saveText = textZones[saveArrayPoint].value
    let log = saveArrayPoint + 9
    let logHr = 'hr'+ log
    localStorage.setItem(logHr, saveText)
  });
});

function updateTasks() {
  for (let i = 9; i <= 17; i++) {
    $(`#hourBlock-${i} .description`).val(localStorage.getItem(`hr${i}`));
  }
}

for (let i = 9; i < 18; i++) {
  var hour = $('#hourBlock-' + i)
  hour.addClass(i < colorHour ? 'past' : (i === colorHour ? 'present' : 'future'))
}

// WHEN I refresh the page
// THEN the saved events persist
function init() {
  updateTasks();
}
init();


var keyList = Object.keys(localStorage)
console.log(keyList);








//stackoverflow
// $(document).ready(function () {
//   var savesnotesbtn = document.getElementById("savenotesbtn");

//   //FILL TEXT AREAS WITH NOTES
//   for (var i = 1; i < 11; i++) {
//     $("#note" + i + "input").val(localStorage.getItem("note" + i));
//   }

//   function saveNotes() {
//     //Change styles of button
//     $("#savenotesbtn").removeClass("notSaved").addClass("Saved");
//     // Save data to localstorage
//     for (var i = 1; i < 11; i++) {
//       localStorage.setItem("note" + i, $("#note" + i + "input").val());
//     }
//   };
//   savesnotesbtn.addEventListener("click", saveNotes);
// });
//stack overflow

//chat
// const textArea = document.getElementById("textArea");
// const key = id.innerHTML;
// const value = localStorage.getItem(key);
// if (value) {
//   textArea.value = value;
// }
//



// var SavedText = localStorage.getItem()
// console.log(SavedText);

// if (hourArray.includes(keyList)) {
//   localStorage.getItem(keyList)
// }
// let 
// // console.log(localStorage.getItem("9am"));





// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar = add day.js
var today = dayjs();
$('#currentDay').text(today.format('MMM DD, YYYY [at] HH:mm:ss:SSS'));








// javascript code that knows if a number between 9 and 17 is greater than- less thab- or equal to any other number in that array







// pseudocode
// GIVEN I am using a daily planner to create a schedule



// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours=finish up time blocks

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future=  compare time block with current day.js time. apply correct class based on comparison 

// WHEN I click into a timeblock
// THEN I can enter an event = create a variable and store in event listener to set to local storage

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
