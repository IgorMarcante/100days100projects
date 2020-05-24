function handleBloodType(type) {

  let buttonProps = document.getElementsByTagName('button');

  for (let index = 0; index < buttonProps.length; index++) {
    const element = buttonProps[index];
    element.classList.remove('bg-compatible');
    element.classList.remove('bg-selected');
    element.classList.add('bg-not-compatible');
  }

  switch (type) {
    case 'AB-':
      abNeg();
      break;
    case 'AB+':
      abPos();
      break;
    case 'A-':
      aNeg();
      break;
    case 'A+':
      aPos();
      break;
    case 'B-':
      bNeg();
      break;
    case 'B+':
      bPos();
      break;
    case 'O-':
      oNeg();
      break;
    case 'O+':
      oPos();
      break;

    default:
      break;
  }
}

function abNeg() {
  let abNeg = document.getElementById('ab-');
  let abPos = document.getElementById('ab+');

  abNeg.classList.remove('bg-not-compatible');
  abPos.classList.remove('bg-not-compatible');

  abNeg.classList.add('bg-selected');
  abPos.classList.add('bg-compatible');
}

function abPos() {
  let abPos = document.getElementById('ab+');
  abPos.classList.remove('bg-not-compatible');
  abPos.classList.add('bg-compatible');
}
function aNeg() {
  let abNeg = document.getElementById('ab-');
  let abPos = document.getElementById('ab+');
  let aNeg = document.getElementById('a-');
  let aPos = document.getElementById('a+');

  abNeg.classList.remove('bg-not-compatible');
  abPos.classList.remove('bg-not-compatible');
  aNeg.classList.remove('bg-not-compatible');
  aPos.classList.remove('bg-not-compatible');


  abNeg.classList.add('bg-compatible');
  abPos.classList.add('bg-compatible');
  aNeg.classList.add('bg-selected');
  aPos.classList.add('bg-compatible');

}
function aPos() {
  let abPos = document.getElementById('ab+');
  let aPos = document.getElementById('a+');

  abPos.classList.remove('bg-not-compatible');
  aPos.classList.remove('bg-not-compatible');

  abPos.classList.add('bg-compatible');
  aPos.classList.add('bg-selected');
}

function bNeg() {
  let bNeg = document.getElementById('b-');
  let bPos = document.getElementById('b+');
  let abNeg = document.getElementById('ab-');
  let abPos = document.getElementById('ab+');

  abPos.classList.remove('bg-not-compatible');
  abNeg.classList.remove('bg-not-compatible');
  bNeg.classList.remove('bg-not-compatible');
  bPos.classList.remove('bg-not-compatible');

  abPos.classList.add('bg-compatible');
  abNeg.classList.add('bg-compatible');
  bNeg.classList.add('bg-selected');
  bPos.classList.add('bg-compatible');
}
function bPos() {
  let bPos = document.getElementById('b+');
  let abPos = document.getElementById('ab+');

  abPos.classList.remove('bg-not-compatible');
  bPos.classList.remove('bg-not-compatible');

  bPos.classList.add('bg-selected');
  abPos.classList.add('bg-compatible');
}

function oNeg() {
  let abNeg = document.getElementById('ab-');
  let abPos = document.getElementById('ab+');
  let aNeg = document.getElementById('a-');
  let aPos = document.getElementById('a+');
  let bNeg = document.getElementById('b-');
  let bPos = document.getElementById('b+');
  let oNeg = document.getElementById('o-');
  let oPos = document.getElementById('o+');

  abNeg.classList.remove('bg-not-compatible');
  abPos.classList.remove('bg-not-compatible');
  aNeg.classList.remove('bg-not-compatible');
  aPos.classList.remove('bg-not-compatible');
  bNeg.classList.remove('bg-not-compatible');
  bPos.classList.remove('bg-not-compatible');
  oNeg.classList.remove('bg-not-compatible');
  oPos.classList.remove('bg-not-compatible');

  abNeg.classList.add('bg-compatible');
  abPos.classList.add('bg-compatible');
  aNeg.classList.add('bg-compatible');
  aPos.classList.add('bg-compatible');
  bNeg.classList.add('bg-compatible');
  bPos.classList.add('bg-compatible');
  oNeg.classList.add('bg-selected');
  oPos.classList.add('bg-compatible');
}
function oPos() {
  let abPos = document.getElementById('ab+');
  let aPos = document.getElementById('a+');
  let bPos = document.getElementById('b+');
  let oPos = document.getElementById('o+');


  abPos.classList.remove('bg-not-compatible');
  aPos.classList.remove('bg-not-compatible');
  bPos.classList.remove('bg-not-compatible');
  oPos.classList.remove('bg-not-compatible');

  
  abPos.classList.add('bg-compatible');
  aPos.classList.add('bg-compatible');
  bPos.classList.add('bg-compatible');
  oPos.classList.add('bg-selected');
}