"use strict";

// Preguntar por el número

//Función para solicitar número entre 1 y 20
function askForNumber() {
  const choicedNumber = Number.parseInt(
    prompt("Ingrese un número entre 1 y 20")
  );
  console.log(`Número elegido: ${choicedNumber}`);
  if (choicedNumber >= 1 && choicedNumber <= 20) {
    console.log(`Número dentro de rango: ${choicedNumber}`);
    return choicedNumber;
  } else {
    console.log(`Número fuera de rango: ${choicedNumber}`);
    return null;
  }
}

const limitChoicedNumber = askForNumber();
console.log(`El intervalo se multiplicará hasta ${limitChoicedNumber}`);

// Función Flecha para multiplicar de acuerdo al número elegido
const multiplication = () => {
  for (let interval = 1; interval <= limitChoicedNumber; interval++) {
    console.log(
      `${interval} x ${limitChoicedNumber} = ${interval * limitChoicedNumber}`
    );
  }
};
multiplication();

// Función Flecha Factorial
const factorial = () => {
  for (
    let factorialNumber = 1;
    factorialNumber <= limitChoicedNumber;
    factorialNumber++
  ) {
    let result = 1;
    for (let multiplier = 1; multiplier <= factorialNumber; multiplier++) {
      result = result * multiplier;
    }
    console.log(`El Factorial de ${factorialNumber} es: ${result}`);
  }
};

factorial();
