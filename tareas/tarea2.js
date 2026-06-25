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
  console.log(`La palabra "${palabra}" está incluída en la frase 😁`);
} else {
  console.log(`La palabra "${palabra}" no está incluída en la frase 😣`);
}
/* Usando Math
Crear un script que simule el juego de Adivina el número. Primero se genera un número aleatorio entre 1 y 10 que el usuario no debe saber, Luego el usuario ingresa un número entre 1 y 10 tratando de adivinar. Devolver un mensaje si ganó o perdió. */

alert("Hola!!!😁 Jugamos??? Tenés que adivinar un número del 1 al 10");

let numeroRandom = Math.ceil(Math.random() * 10);
let numeroElegido = prompt("Ingresá un número");

numeroElegido = Number(numeroElegido);

if (numeroElegido == numeroRandom) {
  alert("Felicidades!!!! Adivinaste el número 🎉");
} else {
  alert(
    `Lo siento 😣, no acertaste.\nEl número correcto es: ${numeroRandom}\nSuerte para la próxima🍀`,
  );
}

/* Juguemos con Switch
En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua.
Si no elige el menú de la lista aparecerá la frase elija carne, pescado o verdura.
Usar emojis */

alert(
  "Hola! Bienveni@ a nuestro restaurante 😊\n Elegí una de las opciones de menú y te recomendamos la bebida perfecta para acompañarlo.",
);
let opcion = prompt(
  "Seleccioná qué plato deseas comer hoy:\n1. Ojo de Bife a la parilla con papas rústicas y manteca de hierbas 🥩\n2. Salmón rosado en costra de almendras con puré de calabaza 🐟\n3. Risotto de hongos silvestres y vegetales asados 🥗",
); /*Las ideas de los platos las saqué de la ia*/

switch (opcion) {
  case "1":
    alert(
      "¡Excelente elección! 🥩 Para resaltar los sabores del Ojo de Bife, te sugerimos acompañarlo con una copa de nuestro mejor Vino Tinto Malbec 🍷",
    );
    break;
  case "2":
    alert(
      "¡Plato sofisticado! 🐟 La frescura del salmón en costra combina de forma increíble con un refinado Vino Blanco Chardonnay helado 🥂",
    );
    break;
  case "3":
    alert(
      "¡Una delicia saludable! 🥗 El risotto de hongos tiene una textura cremosa ideal para limpiar el paladar con Agua mineral bien fresca con rodajas de limón 🥛",
    );
    break;
  default:
    alert("Por favor, elija una opción del menú escribiendo 1, 2 o 3.");
    break;
}
alert("Gracias por elegirnos!");
