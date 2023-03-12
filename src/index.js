// import validator from './validator.js';

// console.log(validator);

function handleValidation() {
    // Obtener los valores de los campos
    const creditCardNumber = document.getElementById("creditCardNumber").value;
    const creditCardName = document.getElementById("creditCardName").value;
    const creditCardDateMonth = document.getElementById("creditCardDateMonth").value;
    const creditCardDateYear = document.getElementById("creditCardDateYear").value;
    const creditCardCvv = document.getElementById("creditCardCvv").value;

    // Verificar que todos los campos estén completos
    if (creditCardNumber === "" || creditCardName === "" || creditCardDateMonth === "" || creditCardDateYear === "" || creditCardCvv === "") {
        document.getElementById("output").innerHTML = "Por favor complete todos los campos.";
        return;
    }

    //Verificar que tenga al menos 11 digitos
    if (creditCardNumber.length <= 11) {
        alert("El número de tarjeta de crédito debe tener al menos 11 dígitos.");
        return false;
    }

    // Validar el número de tarjeta de crédito
    if (!validateCreditCardNumber(creditCardNumber)) {
        document.getElementById("output").innerHTML = "La tarjeta de crédito " + creditCardNumber + " no es válida.";
        return;
    }

    // Si llegamos hasta aquí, todos los campos son válidos
    document.getElementById("output").innerHTML = "La tarjeta de crédito " + creditCardNumber + " es válida.";


}

function validateCreditCardNumber(creditCardNumber) {
    const trimmedNumber = document.getElementById("creditCardNumber").value;


    // Implementar el algoritmo de Luhn
    let sum = 0;
    let shouldDouble = false;
    for (let i = trimmedNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(trimmedNumber.charAt(i), 10);
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return (sum % 10) === 0;
}
