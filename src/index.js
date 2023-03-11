import validator from './validator.js';

console.log(validator);

function validarTarjeta(){
    var tarjeta = document.getElementById('tarjeta').value;
    if (tarjeta == ''){
        alert('Por favor ingrese un número de tarjeta.');
        return;
    }

    if (isNaN(tarjeta)) {
        alert('Ingrese solo números en el campo de número de tarjeta.');
        return;
    }
}