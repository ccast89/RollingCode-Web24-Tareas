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
