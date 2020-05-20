function clock(){
  var date = new Date();
  var hour =  ("00" + date.getHours()).slice(-2);
  var minutes =  ("00" + date.getMinutes()).slice(-2);
  var seconds =  ("00" + date.getSeconds()).slice(-2);

  var formatData = ("00" + date.getDate()).slice(-2) +"/"+("00" + (date.getMonth()+1)).slice(-2)+"/"+date.getFullYear();
 

  var clock = hour+":"+minutes+":"+seconds;

  document.getElementById('clock').innerHTML = clock;
  document.getElementById('date').innerHTML = formatData;
}

  var starter = setInterval(clock,1000);