/* Ejercicios con for
Mostrar números del 1 al 10. 
Crea un programa que muestre por consola los números del 1 al 10 utilizando un ciclo for. Salida esperada:
1
2
3
4
5
6
7
8
9
10 */
console.log("EJERCICIO Nº 1 (FOR)- MOSTRAR NÚMEROS DEL 1 AL 10");

for (let i = 1; i <= 10; i++) {
  console.log(`${i}`);
}

/* 2. Tabla de multiplicar de un número. 
Solicita al usuario un número y muestra su tabla de multiplicar del 1 al 10 utilizando un ciclo for. Ejemplo:
Ingrese un número: 5
Salida esperada:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50 */

/*ALGORITMO
- Dato de entrada: El número que ingrese el usuario
- Proceso: El programa debe mutiplicar el numero ingresado hasta llegar a numero x 10
-Salida: El programa mostrará la tabla completa
*/
console.log("EJERCICIO Nº 2 (FOR)- TABLA DE MULTIPLICAR DE UN NÚMERO");

let tabla = Number(
  prompt(
    "Hola 🤗!! Que gusto tenerte aquí!\nHoy vamos a aprender las tablas de multiplicar!\nIngresá el número de la tabla que quieras aprender 🧮",
  ),
);

if (tabla) {
  console.log(
    `La tabla que elegiste aprender hoy es la tabla del ${tabla}!\n A practicar📝!`,
  );
  for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
} else {
  alert("Por favor, ingresá un número🔢.");
}

/* 3. Suma de los primeros 10 números 
Utiliza un ciclo for para sumar los números del 1 al 10 y mostrar el resultado final.
Salida esperada:
La suma total es: */
console.log("EJERCICIO Nº 3 (FOR)- SUMA DE LOS PRIMEROS 10 NÚMEROS");

let suma = 0;

for (let i = 1; i <= 10; i++) {
  suma = suma + i;
}
console.log(`La suma total es de ${suma} `);

console.log("EJERCICIOS CON WHILE");
/* Ejercicios con while
1. Contador del 1 al 10
Crea un programa que muestre por consola los números del 1 al 10 utilizando un ciclo while.
Salida esperada:
1
2
3
4
5
6
7
8
9
10 */
console.log("EJERCICIO Nº 1 (WHILE)- CONTADOR DEL 1 AL 10");

let contador = 1;

while (contador <= 10) {
  console.log(contador);
  contador++;
}

/* 2. Cuenta regresiva
Utiliza un ciclo while para mostrar una cuenta regresiva desde 10 hasta 1.
Salida esperada:
10
9
8
7
6
5
4
3
2
1
¡Despegue! 🚀 */
console.log("EJERCICIO Nº 2 (WHILE)- CUENTA REGRESIVA");

let cuentaRegresiva = 10;

while (cuentaRegresiva >= 1) {
  console.log(cuentaRegresiva);
  cuentaRegresiva--;
}
console.log("¡Despegue!🚀");

/* 3. Mostrar números pares hasta 20
Utiliza un ciclo while para mostrar todos los números pares entre 2 y 20.
Salida esperada:
2
4
6
8
10
12
14
16
18
20 */
console.log("EJERCICIO Nº 3 (WHILE)- MOSTRAR NÚMEROS PARES HASTA 20");

let numPar = 2;

while (numPar <= 20) {
  console.log(numPar);
  numPar = numPar + 2;
}
