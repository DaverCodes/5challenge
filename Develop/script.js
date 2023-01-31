
const textZones = [...document.querySelectorAll('.col-8')];
const buttons = [...document.querySelectorAll('.btn')];
// const textarray = document.getElementById('.9text')
// const hourArray = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];
// console.log(hourArray);

buttons.forEach(function(buttonArrayFinder) {
  buttonArrayFinder.addEventListener('click', function() {
    let saveArrayPoint = buttons.indexOf(this);
    console.log(saveArrayPoint);
    let saveText = textZones[saveArrayPoint].value
    let logHr = saveArrayPoint + 9 
    console.log(logHr, saveText);
    localStorage.setItem(logHr, saveText)

    if (saveArrayPoint <= 11) {
      let logHr = saveArrayPoint + 9 
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
// WHEN I refresh the page
// THEN the saved events persist= local storage
var keyList = Object.keys(localStorage)
console.log(keyList);
//stackoverflow
$(document).ready(function () {
  var savesnotesbtn = document.getElementById("savenotesbtn");

  //FILL TEXT AREAS WITH NOTES
  for (var i = 1; i < 11; i++) {
    $("#note" + i + "input").val(localStorage.getItem("note" + i));
  }

  function saveNotes() {
    //Change styles of button
    $("#savenotesbtn").removeClass("notSaved").addClass("Saved");
    // Save data to localstorage
    for (var i = 1; i < 11; i++) {
      localStorage.setItem("note" + i, $("#note" + i + "input").val());
    }
  };
  savesnotesbtn.addEventListener("click", saveNotes);
});
//stack overflow

//chat
const id = document.getElementById("id");
const textArea = document.getElementById("textArea");
const key = id.innerHTML;
const value = localStorage.getItem(key);
if (value) {
  textArea.value = value;
}
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
