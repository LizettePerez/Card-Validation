import validator from './validator.js';


document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se envíe el formulario

    const creditCardNumber = form.querySelector('#creditCardNumber').value;
    /* eslint-disable no-console */
    console.log(creditCardNumber);
    /* eslint-enable no-console */


    if (validator.isValid(creditCardNumber)) {
      const maskedNumber = validator.maskify(creditCardNumber);
      alert(`La tarjeta ${maskedNumber} es válida.`);
    } else {
      alert('El número de tarjeta no es válido.');
    }
  });
});


/* eslint-disable no-console */
console.log(validator);
/* eslint-enable no-console */
