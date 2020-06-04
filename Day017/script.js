setInterval(chargeLight, 1000);

function chargeLight() {
  const redLight = document.getElementById('red-light');
  const yellowLight = document.getElementById('yellow-light');
  const greenLight = document.getElementById('green-light');

  if (redLight.classList.contains('light-red')) {
    redLight.classList.remove('light-red');
    redLight.classList.add('light');

    yellowLight.classList.remove('light');
    yellowLight.classList.add('light-yellow');
  } else if (yellowLight.classList.contains('light-yellow')) {
    yellowLight.classList.remove('light-yellow');
    yellowLight.classList.add('light');

    greenLight.classList.remove('light');
    greenLight.classList.add('light-green');
  } else if (greenLight.classList.contains('light-green')) {
    greenLight.classList.remove('light-remove');
    greenLight.classList.add('light');

    redLight.classList.remove('light');
    redLight.classList.add('light-red');
  }


}