
function handleConvert(){
  let num = document.getElementById("decimal").value;
  let result = document.getElementById('binary');
  var converted = Number(num).toString(2);

  result.innerText = 'Binary: ' + converted;

}