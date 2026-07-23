/* 1. El Acumulador de "Dinero con Tope" (Ciclo while)
Consigna: Imagina que quieres ahorrar para un objetivo de $1000. El programa debe pedir al usuario que ingrese montos de ahorro diarios (en un prompt o variable) y los vaya sumando. El ciclo while debe ejecutarse mientras la suma total sea menor a $1000. Al llegar o superar el objetivo, imprime "¡Objetivo alcanzado!".
Desafío lógico: ¿Qué pasa si el usuario ingresa un número negativo? Añade una validación para que no sume montos inválidos.
Objetivo: Manejo de acumuladores con condiciones de salida basadas en metas. */

console.log("EJERCICIO Nº 1 (TAREA 4)- ACUMULADOR DE DINERO CON TOPE");

let objetivo = 1000;
let totalAhorrado = 0;

alert(
  `😊Hola!! Cómo estás??\nEstoy aquí para informarte cuanto vas ahorrando!\n💰En tu alcancía hay $${totalAhorrado} por ahora`,
);

while (totalAhorrado < objetivo) {
  let ingreso = prompt(`Ingresa el monto que vas a ahorrar hoy`);

  if (ingreso === null) {
    alert(
      "Parece que el chanchito no va a engordar hoy 😣\nHasta la próxima!! 💸",
    );

    break;
  }

  let ahorroDiario = Number(ingreso);
  if (ahorroDiario <= 0 || isNaN(ahorroDiario)) {
    alert(
      "No ingresasaste un monto válido, esta alcancía solo recibe dinero 🤑!!\nIntentá de nuevo",
    );
  } else {
    totalAhorrado = totalAhorrado + ahorroDiario;
    alert(`Tu total ahorrado hasta ahora es $${totalAhorrado} 💵💵💵`);
  }

  console.log(`💰En tu alcancía hay $${totalAhorrado} por ahora`);
}

if (totalAhorrado >= objetivo) {
  console.log(`🥳🎉¡Objetivo alcanzado! Total final: $${totalAhorrado}`);
  alert(`🥳🎉¡Objetivo alcanzado!\n💲💲💲Total final: $${totalAhorrado}`);
} else {
  alert("Sin esfuerzo no vas a llegar a tu meta 😉");
}
/* 2. El "Triángulo de Asteriscos" (Ciclo for anidado)
Consigna: Utiliza dos bucles for (uno dentro de otro) para imprimir un triángulo de asteriscos en la consola con una altura de 5 líneas:
*
**
***
****
*****
Desafío lógico: El bucle externo controla las filas y el interno controla cuántos asteriscos imprimir en cada fila. 
Objetivo: Dominar la complejidad de los bucles anidados, fundamental para entender estructuras de datos complejas en el futuro.  */
console.log("EJERCICIO Nº 2 (TAREA 4)- EL TRIÁNGULO DE ASTERISCOS");

let altura = 5;

for (let i = 1; i <= altura; i++) {
  let fila = "";
  for (let contadorAsterisco = 1; contadorAsterisco <= i; contadorAsterisco++) {
    fila = fila + "*";
  }
  console.log(fila);
}

/* 3. El Simulador de "Token de Seguridad" (Ciclo while)
Contexto: Hoy en día, los sistemas de seguridad nos piden ingresar un código que caduca en segundos o nos limita la cantidad de intentos.
Consigna: Crea un programa que simule un sistema de autenticación de 2 pasos. El sistema tiene un código fijo (ej: 5555). El usuario tiene un máximo de 3 intentos para ingresarlo correctamente.
Desafío lógico: Usa un contador que aumente con cada intento fallido y un while que verifique dos condiciones: que el código sea incorrecto y que los intentos sean menores a 3. */

console.log("EJERCICIO Nº 3 (TAREA 4)- EL SIMULADOR DE TOKEN DE SEGURIDAD");

let token = "1234";
let ingresoToken = "";
let intentos = 3;
let tokenCorrecto = false;

while (intentos > 0 && !tokenCorrecto) {
  ingresoToken = prompt(
    `🔑Ingresá el Token para poder realizar la transferencia\nRecordá que sólo tenés ${intentos} intentos👀`,
  );

  if (ingresoToken === token.trim()) {
    tokenCorrecto = true;
  } else {
    intentos--;
  }
}

if (tokenCorrecto) {
  alert("Transferencia realizada 💸");
  console.log("Transferencia realizada 💸");
} else {
  alert(
    "🔒Superaste la cantidad máxima de intentos permitidos. Por razones de seguridad, tu clave/token ha sido bloqueado. Para desbloquearlo, acercate a un cajero automático o comunícate con atención al cliente",
  );
  console.log(
    "🔒Superaste la cantidad máxima de intentos permitidos. Por razones de seguridad, tu clave/token ha sido bloqueado. Para desbloquearlo, acercate a un cajero automático o comunícate con atención al cliente",
  );
}

/* 4. Gestor de "Horas de Estudio" (Ciclo for)
Contexto: Los estudiantes suelen organizar su semana para cumplir con el curso Fullstack.
Consigna: Crea un programa donde el usuario ingrese cuántas horas dedicará a estudiar cada día de la semana (7 días). El programa debe usar un ciclo for para solicitar el dato 7 veces, ir sumando las horas en un acumulador y, al final, mostrar el promedio de horas diarias dedicadas al estudio.
Desafío lógico: ¿Qué pasa si el usuario ingresa un valor negativo? El programa debe ignorar ese dato y pedir que ingrese un número mayor a 0. */
console.log("EJERCICIO Nº 4 (TAREA 4)- HORAS DE ESTUDIO");

let totalHoras = 0;

alert(
  "👋🏼 Hola! ⌚ Bienvend@ a tu contador de horas de estudio!\nVamos a contar cuantas horas estudiaste en total durante la semana 📝",
);

for (let i = 1; i <= 7; i++) {
  let horasIngresadas = Number(
    prompt(
      `🤔¿Cuántas horas estudiaste hoy?\nIngresá las horas que estudiaste (pero de verdad 😉)`,
    ),
  );
  if (horasIngresadas < 0 || isNaN(horasIngresadas)) {
    alert(
      "❌❌❌ Por favor, ingresá un número mayor a 0, estoy seguro que si estudiaste",
    );
    i--; /*Este -- es para que se vuelva a repetir el día*/
  } else {
    totalHoras = totalHoras + horasIngresadas;
    alert(
      `En el día ${i}, estudiaste ${horasIngresadas} horas\nEl total acumulado de horas es de ${totalHoras} horas`,
    );
    console.log(
      `En el día ${i}, estudiaste ${horasIngresadas} horas\nEl total acumulado de horas es de ${totalHoras} horas`,
    );
  }
}

let promedioHoras = totalHoras / 7;

if (promedioHoras > 2) {
  alert(
    `🎉🎉🎉Felicidades!!! Tu total de horas de estudio acumuladas es de ${totalHoras} horas😁\nEso te da un promedio de ${promedioHoras.toFixed(2)} horas por día!!\nSeguí así y pronto alcazaras tu meta!!🤩`,
  );
  console.log(
    `🎉🎉🎉Felicidades!!! Tu total de horas de estudio acumuladas es de ${totalHoras} horas😁\nEso te da un promedio de ${promedioHoras.toFixed(2)} horas por día!!\nSeguí así y pronto alcazaras tu meta!!🤩`,
  );
} else {
  alert(
    `Tu total de horas de estudio acumuladas es de ${totalHoras.toFixed(2)}\nEso te da un promedio de ${promedioHoras} horas por día!😣\nDeberías dedicarte un poco más asi podes avanzar!🙃`,
  );
  console.log(
    `Tu total de horas de estudio acumuladas es de ${totalHoras.toFixed(2)}\nEso te da un promedio de ${promedioHoras} horas por día!😣\nDeberías dedicarte un poco más asi podes avanzar!🙃`,
  );
}

/* 5. Simulador de "Carrito de Descuentos Progresivos" (Ciclo while)
Contexto: Muchas tiendas online aplican descuentos que dependen de la cantidad de productos en el carrito.
Consigna: El usuario comienza con un producto. El programa debe preguntar el precio de cada producto y sumarlo. El ciclo while continuará pidiendo productos mientras el usuario escriba "si" para agregar otro. Si el total supera los $5000, el sistema debe imprimir: "¡Has obtenido un 10% de descuento!".
Desafío lógico: Debes llevar un control del total acumulado en cada iteración y aplicar el descuento solo una vez al final, antes de imprimir el resultado. */

console.log(
  "EJERCICIO Nº 5 (TAREA 4)- SIMULADOR DE CARRITO DE DESCUENTOS PROGRESIVOS",
);

//ALGORITMO
/*
DATOS DE ENTRADA: total=0, respuesta del usuario, total acumulado
PROCESO: pregunta el precio, suma al precio total, pregunta si quiere continuar, verificar el total si es mayor que 5000 y hacer el descuento.
SALIDA: Mensaje avisando si se aplica el descuento y mostrar los totales.
*/
let totalCarrito = 0;
let continuar = "si";

while (continuar.toUpperCase().trim() === "SI") {
  let precio = Number(
    prompt("💲 Por favor, indica el precio del producto que seleccionaste"),
  );

  if (isNaN(precio) || precio <= 0) {
    alert("❌ Por favor, ingresa un precio válido!");
    continue;
  }
  totalCarrito += precio;
  alert(`🛒 El total de tu carrito hasta ahora es de $${totalCarrito}`);
  console.log(`Total del carrito: $${totalCarrito}`);

  continuar =
    prompt("🤔 Desea agregar otro producto?\nEscribe 'si' para continuar") ||
    "";
}

if (totalCarrito > 5000) {
  alert(`🎉 Felicidades, obtuviste un 10% de descuento 🤑`);
  console.log(`Total sin descuento: $${totalCarrito}`);
  let descuento = totalCarrito * 0.1;
  totalCarrito -= descuento;
  alert(`Tu nuevo total es de $${totalCarrito}`);
  console.log(`Total con descuento: $${totalCarrito}`);
}
alert(`Muchas gracias por elegirnos\nEspramos que disfrutes tu compra 😁`);

// Si prompt devuelve null, la parte "|| ''" le asigna un texto vacío
