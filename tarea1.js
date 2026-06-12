/* 📝 Ejercicio 1: Comparar números enteros
Solicita al usuario dos números enteros.  
Convierte las entradas a números enteros.  
Determina cuál de los dos números es mayor, o si son iguales.  
Muestra el resultado en la consola. */

let num1 = prompt("Ingrese el primer número a comparar");
let num2 = prompt("Ingrese el segundo número a comparar");

num1 = parseInt(num1);
num2 = parseInt(num2);

if (num1 > num2) {
  console.log(`El número ingresado de mayor valor es ${num1}`);
} else if (num1 < num2) {
  console.log(`El número ingresado de mayor valor es ${num2}`);
} else {
  console.log("Ambos números son iguales");
}

/* 📝 Ejercicio 2: Calcular promedio de notas
Pide al usuario tres notas con decimales.  
Convierte las entradas a números decimales.
Calcula el promedio de las tres notas usando operadores aritméticos.  
Muestra el promedio en la consola.  
Usa un condicional para indicar si el promedio es suficiente para aprobar (ejemplo: mayor o igual a 6). */

let nota1 = prompt("Ingrese la primera nota con decimales");
let nota2 = prompt("Ingrese la segunda nota con decimales");
let nota3 = prompt("Ingrese la tercera nota con decimales");

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);

let promedio = (nota1 + nota2 + nota3) / 3;

console.log(`Tu promedio es de: ${promedio}`);

if (promedio >= 8) {
  console.log(
    "😁 Excelente!! Aprobaste y estás entre los mejores de la clase!!",
  );
} else if (promedio >= 6) {
  console.log("😊Muy bien!!! Aprobaste!!!");
} else {
  console.log(
    "😣No te alcanzó para aprobar... A estudiar para la recuperación!",
  );
}

/* 📝 Ejercicio 3: Calculadora básica
Solicita al usuario dos números decimales.  
Convierte las entradas. 
Pide al usuario que ingrese el tipo de operación: suma, resta, multiplicación o división.  
Usa condicionales para ejecutar la operación correspondiente.  
Muestra el resultado en la consola.  
Si la operación no es válida, informa al usuario con un mensaje en la consola. */

let numCal1 = prompt("Ingrese un número con decimales");
let numCal2 = prompt("Ingrese otro número con decimales");
let operacion = prompt(
  "Ingrese qué tipo de operación desea realizar: suma | resta | multiplicación | división",
);

numCal1 = parseFloat(numCal1);
numCal2 = parseFloat(numCal2);

if (operacion === "suma") {
  console.log(`El resultado de la suma es ${numCal1 + numCal2}`);
} else if (operacion === "resta") {
  console.log(`El resultado de la resta es ${numCal1 - numCal2}`);
} else if (operacion === "multiplicación") {
  console.log(`El resultado de la multiplicación es ${numCal1 * numCal2}`);
} else if (operacion === "división") {
  console.log(`El resultado de la división es ${numCal1 * numCal2}`);
} else {
  console.log(`Por favor, ingrese una opción válida`);
}

/* Ejercicio de clase
Un comerciante hace descuentos a sus clientes de la siguiente forma:
- Si ha comprado menos de 100 dolares no hay descuento
- Si la compra está entre 100 y 300 dolares le descuenta un 5%
- Si la compra está por encima de 300 hasta 500 dolares le descuenta un 10%
- Si la compra supera los 500 dolares le descuenta un 15%
*/
let pesos = prompt(
  "Por favor, ingrese el monto total en pesos que desea cambiar por dólares",
);

pesos = parseFloat(pesos);

let dolares = pesos / 1400;
let descuento5 = (pesos * 5) / 100;
let descuento10 = (pesos * 10) / 100;
let descuento15 = (pesos * 15) / 100;

if (dolares < 100) {
  console.log("Gracias por confiar en nosotros!");
} else if (dolares >= 100 && dolares <= 300) {
  console.log(
    `Por tu compra de USD${dolares}, te haremos un descuento del 5% en pesos! Por lo que tu nuevo total en pesos sería de $${pesos - descuento5}. Gracias por confiar en nosotros!`,
  );
} else if (dolares > 300 && dolares <= 500) {
  console.log(
    `Por tu compra de USD${dolares}, te haremos un descuento del 10% en pesos! Por lo que tu nuevo total en pesos sería de $${pesos - descuento10}. Gracias por confiar en nosotros!`,
  );
} else {
  console.log(
    `Felicidades! Por tu compra de USD${dolares}, te haremos un descuento del 15% en pesos! Por lo que tu nuevo total en pesos sería de $${pesos - descuento15}. Gracias por confiar en nosotros!`,
  );
}
