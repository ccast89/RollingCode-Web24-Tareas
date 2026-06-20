/* Trabajemos con String
Se necesita un script que solicite al usuario escribir una frase o texto y luego ingresar una palabra que quiera buscar. En cualquier caso (sea que encuentre la palabra o no) el programa debe devolver un mensaje informando el resultado (Usar emojis también).
Usar los métodos aprendidos en la clase para encontrar la solución. */
let frase = prompt("Por favor, ingrese una frase o un texto");
let palabra = prompt(
  "Por favor, indique la palabra que desea buscar dentro de la frase o texto previamente ingresado",
);
frase = frase.trim().toLowerCase();
palabra = palabra.trim().toLowerCase();

if (frase.includes(palabra)) {
  console.log(`La palabra ${palabra} está incluída en la frase 😁`);
} else {
  console.log(`La palabra ${palabra} no está incluída en la frase 😣`);
}
/* Usando Math
Crear un script que simule el juego de Adivina el número. Primero se genera un número aleatorio entre 1 y 10 que el usuario no debe saber, Luego el usuario ingresa un número entre 1 y 10 tratando de adivinar. Devolver un mensaje si ganó o perdió. */

alert("Hola!!!😁 Jugamos??? Tenés que adivinar un número del 1 al 10");

let numeroRandom = Math.ceil(Math.random() * 10);
let numeroElegido = prompt("Ingresá un número");

numeroElegido = Number(numeroElegido);
console.log(numeroRandom);

if (numeroElegido == numeroRandom) {
  alert("Felicidades!!!! Adivinaste el número 🎉");
} else {
  alert("Lo siento 😣, no acertaste, suerte para la próxima🍀");
}
/* Juguemos con Switch
En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua.
Si no elige el menú de la lista aparecerá la frase elija carne, pescado o verdura.
Usar emojis */
