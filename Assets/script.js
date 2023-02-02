const textZones = [...document.querySelectorAll('.col-8')];
const buttons = [...document.querySelectorAll('.btn')];
var colorHour = dayjs().hour();

buttons.forEach(function(buttonArrayFinder) {
  buttonArrayFinder.addEventListener('click', function() {
    let saveArrayPoint = buttons.indexOf(this);
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

function init() {
  updateTasks();
}
init();

var today = dayjs();
$('#currentDay').text(today.format('MMM DD, YYYY [at] HH:mm a'));
