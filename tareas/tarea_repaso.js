// Ejercicios de Lógica y Algoritmos
// 1. El Buscador de Valores Únicos (for)
// Resuelto en clase

//2. El Separador de Tipos (for)
// Resuelto en clase

//3. El Transformador de Textos (for)

/* Dado un array de palabras, crea un nuevo array donde todas las palabras tengan su primera letra en mayúscula y el resto en minúscula.

const palabras = ["jAvAsCrIpT", "pRoGrAmAcIoN", "eJeRcIcIo"];

//ALGORITMO
/*
ENTRADA: Array palabras
PROCESO: recorrer las palabras para convertir la primera letra en mayusculas, las demàs en minusuculas y guardarlas en un array nuevo
SALIDA: mostrar un mje con el array con las palabras capitalizadas
*/
console.log("3. El Transformador de Textos (for)");

const palabras = ["jAvAsCrIpT", "pRoGrAmAcIoN", "eJeRcIcIo"];
const palabrasCapitalizadas = [];

for (let i = 0; i < palabras.length; i++) {
  let palabraMinuscula = palabras[i].toLowerCase();

  let palabraTransformada =
    palabraMinuscula.at(0).toUpperCase() + palabraMinuscula.substring(1);

  palabrasCapitalizadas.push(palabraTransformada);
}
console.log(`Las palabras capitalizadas son: ${palabrasCapitalizadas} `);
console.log("-----------------------");

/*4. Análisis de Temperaturas (for)

 Dado un array que representa las temperaturas de la semana, encuentra la **temperatura máxima** y la **temperatura mínima**.

const temperaturas = [18, 22, 15, 28, 12, 25, 19];*/
console.log("4. Análisis de Temperaturas (for)");

/* ALGORITMO
ENTRADA: Array con temperaturas
PROCESO: comprar todas las temperaturas para determinar cual es la mayor y la menor, guardar las temperaturas maxima y minima
SALIDA: un mensaje con las temperaturas máxima y minima */

const temperaturas = [18, 22, 15, 28, 12, 25, 19];
let temperaturaMaxima = temperaturas[0];
let temperaturaMinima = temperaturas[0];

for (let i = 1; i < temperaturas.length; i++) {
  if (temperaturas[i] > temperaturaMaxima) {
    temperaturaMaxima = temperaturas[i];
  }

  if (temperaturas[i] < temperaturaMinima) {
    temperaturaMinima = temperaturas[i];
  }
}
alert(
  `La temperatura mínima para esta semana será de ${temperaturaMinima}º ❄️, mientras que la máxima no superará los ${temperaturaMaxima}º 🫠`,
);
console.log(
  `La temperatura mínima para esta semana será de ${temperaturaMinima}º ❄️, mientras que la máxima no superará los ${temperaturaMaxima}º 🫠`,
);
console.log("-----------------------");

/* 5. El Codificador Simple (for)

Crea un programa que recorra un array de números y genere un nuevo array donde cada número sea multiplicado por sí mismo (el cuadrado), pero **solo si es un número par**. Si es impar, el valor debe permanecer igual.

const datos = [1, 2, 3, 4, 5, 6, 7, 8];*/
console.log("5. El Codificador Simple (for)");

/* ALGORITMO
ENTRADA: array de números, nuevo array
PROCESO:recorrer el primer array e identificar si los números son pares. Multiplicar los números pares por si mismos.
SALIDA:  Nuevo array con los números pares identificados*/

const datos = [1, 2, 3, 4, 5, 6, 7, 8];
const datosMultiplicados = [];

for (i = 0; i < datos.length; i++) {
  if (datos[i] % 2 === 0) {
    datosMultiplicados.push(datos[i] * datos[i]);
  } else {
    datosMultiplicados.push(datos[i]);
  }
}
console.log(`El nuevo algoritmo es: ${datosMultiplicados}`);
console.log("-----------------------");
/* 6. El Buscador de "La Frase Secreta" (while)
Resuelto en clase*/

/* 7. La Batería del Robot (while)

Imagina que un robot tiene una batería inicial de 100%. Cada tarea que realiza consume una cantidad aleatoria de energía (entre 5 y 20).
- **Reto:** Cuenta cuántas tareas logró realizar antes de apagarse.

let bateria = 100;*/
console.log("7. La Batería del Robot (while)");
/* ALGORITMO
ENTRADA: batería inicial
PROCESO: crear una tarea con un consumo entre 5 y  20, restar ese consumo a la bateria inicial hasta que se agote la bataria
SALIDA: mensaje con el número de tareas que realizó el robot */

let bateria = 100;
let tareas = 0;

while (bateria > 0) {
  let consumoAleatorio = Math.floor(Math.random() * (20 - 5)) + 5; //Esta fórmula la saqué de la documentacion de mdn, pero estaba dentro de una funcion: Math.random() * (max - min) + min
  bateria -= consumoAleatorio;
  tareas++;

  console.log(
    `🤖 El robot realizó su ${tareas}º, lo que consumió ${consumoAleatorio}% de batería\nBatería restante: ${bateria}%`,
  );
}

alert(
  `🤖El robot realizó un total de ${tareas} tareas, por lo que la batería se agotó!!🪫\n\nEs hora de recargarla🔋`,
);
console.log(`Total de tareas realizadas: ${tareas} tareas 😮‍💨`);

console.log("-----------------------");

/* 8. La Calculadora de Conversión (function)

Crea una función llamada `convertirAMinutos` que reciba un número de horas y retorne la cantidad equivalente en minutos.

- **Reto:** Invoca la función con diferentes valores y muestra el resultado en consola.
- **Pista:** `minutos = horas * 60`. */
console.log("8. La Calculadora de Conversión (function)");

/* console.log("FUNCION DECLARATIVA");
function convertirAMinutos(horas) {
  let minutos = horas * 60;
  console.log(`${horas} horas equivalen a ${minutos} minutos`);
} */

/* const convertirAMinutos = (horas) => {
  let minutos = horas * 60;
  console.log(`${horas} horas equivalen a ${minutos} minutos`);
}; */ //Aqui la converti en flecha y después intenté hacerla más corta

const convertirAMinutos = (horas) => {
  console.log(`${horas} horas equivalen a ${horas * 60} minutos`);
};

convertirAMinutos(2);
convertirAMinutos(9);
convertirAMinutos(15);
console.log("-----------------------");

/* 9. El Comparador de Edad (function)
Crea una función llamada `puedeVotar` que reciba una edad (número) y retorne `true` si la persona tiene 18 años o más, y `false` en caso contrario. */
console.log("9. El Comparador de Edad (function)");

/* console.log("FUNCION DECLARATIVA");

function puedeVotar(edad) {
  if (edad >= 18) {
    console.log("✅Estás habilitado para votar!!!");
    alert("✅Estás habilitado para votar!!!");
    return true;
  } else {
    console.log("❌ Todavía no podes votar");
    alert("❌ Todavía no podes votar");
    return false;
  }
} */

const puedeVotar = (edad) => {
  if (edad >= 18) {
    console.log("✅Estás habilitado para votar!!!");
    alert("✅Estás habilitado para votar!!!"); //Por ahora repito el console.log y alert para ir viendo los mjs que devuelve, entiendo q esto no se debería hacer siempre.
    return true;
  } else {
    console.log("❌ Todavía no podes votar");
    alert("❌ Todavía no podes votar");
    return false;
  }
};

puedeVotar(16);
puedeVotar(25);
//No sé como hacerla más corta a esta flecha.

console.log("-----------------------");
//10. El Calculador de Descuentos (function)

/* Crea una función llamada `calcularPrecioFinal` que reciba dos parámetros: `precioOriginal` y `porcentajeDescuento`. La función debe retornar el precio final después de aplicar el descuento.
 */
console.log("10. El Calculador de Descuentos (function)");

/* console.log("FUNCION DECLARATIVA");
function calcularPrecioFinal(precioOriginal, porcentajeDescuento) {
  let descuento = (precioOriginal * porcentajeDescuento) / 100;
  let precioAAbonar = precioOriginal - descuento;
  return Number(precioAAbonar.toFixed(2));
} */

/* const calcularPrecioFinal = (precioOriginal, porcentajeDescuento) => {
  let descuento = (precioOriginal * porcentajeDescuento) / 100;
  let precioAAbonar = precioOriginal - descuento;
  return Number(precioAAbonar.toFixed(2));
}; */

const calcularPrecioFinal = (precioOriginal, porcentajeDescuento) => {
  let precioAAbonar =
    precioOriginal - (precioOriginal * porcentajeDescuento) / 100;
  return Number(precioAAbonar.toFixed(2));
};

console.log(`Tu precio final es de $${calcularPrecioFinal(6541, 20)}`);
console.log(`Tu precio final es de $${calcularPrecioFinal(684, 5)}`);
console.log(`Tu precio final es de $${calcularPrecioFinal(7533, 8)}`);
