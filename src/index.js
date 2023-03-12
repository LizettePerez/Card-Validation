// import validator from './validator.js';
// console.log(validator);

function handleValidation(){
    var creditCardNumber = document.getElementById('creditCardNumber').value;
    //ALERTA PARA INGRESAR NUMERO//
    if (creditCardNumber == ''){
        alert('Por favor ingrese un número de tarjeta.');
        return;
    }

    //ALERTA PARA INGRESAR SOLO NUMEROS//
    if (isNaN(creditCardNumber)) {
        alert('Ingrese solo números en el campo de número de tarjeta.');
        return;
    }
}

