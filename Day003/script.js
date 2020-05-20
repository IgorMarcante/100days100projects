var hours = 0;
var minutes = 0;
var seconds = 0;

var cron;

function start() {
  cron = setInterval( () => {timer()}, 1000)
}

function pause() {
  clearInterval(cron);
}

function stop() {
  clearInterval(cron);
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById('timer').innerText = '00:00:00';
}

function timer() {
  seconds++;
  
  if(seconds === 60){
    seconds = 0;
    minutes++;
  }
  
  if(minutes === 60){
    minutes = 00;
    hours++;
  }
  
  document.getElementById('timer').innerText = ("00" + hours).slice(-2)+ ':' + ("00" + minutes).slice(-2) + ':'+("00" + seconds).slice(-2);
}