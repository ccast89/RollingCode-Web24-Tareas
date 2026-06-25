/* Ejercicio 1: El Cuenta Regresiva 🚀
Instrucciones: Usa un ciclo for para mostrar en la consola una cuenta regresiva del 5 al 1. Al final, fuera del ciclo, muestra el mensaje "¡Despegue!".
Pista: Para que el ciclo reste en lugar de sumar, en la tercera parte del for debes usar i-- en lugar de i++, y tu condición debe ser i >= 1.*/

for (let i = 5; i >= 1; i--) {
  console.log(`${i}`);
}
console.log("Despegue!");

/*Ejercicio 2: La Tabla del 5 ✖️
¡Vamos a automatizar las tablas de multiplicar!
Instrucciones: Utiliza un ciclo for que vaya del 1 al 10. En cada vuelta, debes multiplicar el número 5 por el valor de i y mostrar el resultado en la consola.
Salida esperada: ```text
5 x 1 = 5
5 x 2 = 10
... (así hasta el 10)*/

let num = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}
/*Ejercicio 3: El Contador de "Hola" 🗣️
A veces el ciclo for no se usa para hacer matemática, sino para repetir una acción muchas veces.
Instrucciones: Pídele al ciclo for que imprima en la consola la palabra "Hola 👋" exactamente 7 veces.
Pista: Aquí no necesitas sumar nada en una variable externa, solo poner el console.log dentro del ciclo.*/

let palabra = "hola";

for (let i = 1; i <= 7; i++) {
  console.log(`${palabra}`);
}
/*Ejercicio 4: Suma solo de números Pares 🔢 (Reto)
Este es un poquito más difícil, pero sé que puedes hacerlo. Es muy parecido al que acabamos de resolver de los primeros 10 números.
Instrucciones: Modifica el ejercicio que hicimos antes para que solo sume los números pares del 1 al 10 (es decir, el 2, 4, 6, 8 y 10). Muestra el resultado final fuera del ciclo.
Pista: Puedes hacer que el ciclo for avance de dos en dos cambiando el i++ por i = i + 2 (empezando desde i = 2). */

let suma = 0;

for (let i = 2; i <= 10; i = i + 2) {
  suma = suma + i;
}
console.log(`la suma total es de ${suma}`);
