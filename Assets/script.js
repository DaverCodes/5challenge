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


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar = add day.js
var today = dayjs();
$('#currentDay').text(today.format('MMM DD, YYYY [at] HH:mm:ss:SSS'));
