//MASK
(function () {
  VMasker(document.getElementById("CPF")).maskPattern('999.999.999-99');
})();

function handleValidate(){
  let cpf = document.getElementById("CPF").value;
  let result = document.getElementById('result');

  if(Validator(cpf.replace('.','').replace('.','').replace('-',''))){
    result.innerText = 'CPF is valid';
    result.classList.remove('notValid');
    result.classList.add('valid');
  }else{
    result.innerText = 'CPF is not valid';
    result.classList.remove('valid');
    result.classList.add('notValid');
  }
}

function Validator(cpf) {
  var sum;
  var rest;
  sum = 0;
  if (cpf == "00000000000") return false;

  for (i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  rest = (sum * 10) % 11;

  if ((rest == 10) || (rest == 11)) rest = 0;
  if (rest != parseInt(cpf.substring(9, 10))) return false;

  sum = 0;
  for (i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  rest = (sum * 10) % 11;

  if ((rest == 10) || (rest == 11)) rest = 0;
  if (rest != parseInt(cpf.substring(10, 11))) return false;
  return true;
}
