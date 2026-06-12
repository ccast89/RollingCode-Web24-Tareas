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
