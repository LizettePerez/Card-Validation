import validator from './validator.js';


const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que se envíe el formulario

  const creditCardNumber = form.querySelector('#creditCardNumber').value;
  /* eslint-disable no-console */
  console.log(creditCardNumber);
  /* eslint-enable no-console */


  if (validator.isValid(creditCardNumber)) {
    const lastFourDigits = creditCardNumber.substr(-4);
    alert(`¡Compra realizada! Se realizo un cargo en la tarjeta finalizada en ${lastFourDigits} por un monto de $53.000`);
  } else {
    alert('El número de tarjeta no es válido, no se pudo realizar la compra. Intenta nuevamente.');
  }
});



// TARJETA NUMERO
const input = document.querySelector('#creditCardNumber');
const resultCardNumber = document.querySelector('#resultCardNumber');

input.oninput = function () {

  const maskedValue = validator.maskify(input.value);
  const formattedValue = maskedValue.replace(/(.{4})/g, '$1 ');
  resultCardNumber.innerHTML = formattedValue;
};

// TARJETA NOMBRE
const input2 = document.querySelector('#creditCardName');
const resultCardName = document.querySelector('#resultCardName');

input2.oninput = function () {
  resultCardName.innerHTML = input2.value;
};

//TARJETA CVV
const input3 = document.querySelector('#creditCardCvv');
const resultCardCvv = document.querySelector('#resultCardCvv');

input3.oninput = function () {
  resultCardCvv.innerHTML = input3.value;
};

//TARJETA VENCIMIENTO MES
const input4 = document.querySelector('#creditCardDateMonth');
const resultCardVencimientoMonth = document.querySelector('#resultCardVencimientoMonth');

input4.oninput = function () {
  resultCardVencimientoMonth.innerHTML = input4.value;
};

//TARJETA VENCIMIENTO AÑO
const input5 = document.querySelector('#creditCardDateYear');
const resultCardVencimientoYear = document.querySelector('#resultCardVencimientoYear');

input5.oninput = function () {
  resultCardVencimientoYear.innerHTML = input5.value;
};



/* eslint-disable no-console */
console.log(validator);
/* eslint-enable no-console */


