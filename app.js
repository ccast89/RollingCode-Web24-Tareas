/* Ejercicio 1: "La Cuenta Regresiva de Despegue" (setInterval y DOM)
Consigna: Crea una página web con un título grande que diga "10" y un botón que diga "Iniciar Cuenta Regresiva". Al hacer clic en el botón, debe comenzar un contador hacia atrás de 1 en 1 segundo hasta llegar a 0. Cuando llegue a 0, el texto del título debe cambiar a "¡Despegue! 🚀" y el contador debe detenerse automáticamente.

Tips para resolverlo:
Guarda el resultado de setInterval en una variable global o externa para poder usar clearInterval cuando el número llegue a 0.
Recuerda transformar el texto del DOM a número (parseInt) para poder restarle 1 en cada iteración. */

const contador = document.querySelector("#contador");
let intervalo = null;

const segundero = () => {
  intervalo = setInterval(() => {
    contador.textContent = parseInt(contador.textContent) - 1;
    if (contador.textContent === "0") {
      clearInterval(intervalo);
      contador.textContent = "¡Despegue! 🚀 ";
    }
  }, 1000);
};

document.querySelector("#btnIniciar").addEventListener("click", segundero);

//-------------------

/* Ejercicio 2: "El Semáforo Inteligente" (setTimeout encadenado)
Consigna: Simula el comportamiento de un semáforo en la pantalla. Crea un círculo (o un cuadro) que cambie de color automáticamente al hacer clic en un botón "Encender Semáforo":
Empieza en Rojo (durante 3 segundos).
Pasa automáticamente a Amarillo (durante 2 segundos).
Pasa automáticamente a Verde (durante 3 segundos).


Tips para resolverlo:
Puedes modificar los estilos usando elemento.style.backgroundColor = "red".
Para lograr la secuencia, puedes usar setTimeout anidados o funciones estructuradas con tiempos acumulados, asegurándote de cambiar la clase o el estilo del elemento del DOM en cada paso. */

const semaforo = document.querySelector("#semaforo");

const tiempoSemaforo = () => {
  semaforo.style.backgroundColor = "red";
  setTimeout(() => {
    semaforo.style.backgroundColor = "yellow";
  }, 3000);
  setTimeout(() => {
    semaforo.style.backgroundColor = "green";
  }, 5000);
  setTimeout(() => {
    semaforo.style.backgroundColor = "gray";
  }, 8000);
};

document
  .querySelector("#btnSemaforo")
  .addEventListener("click", tiempoSemaforo);
//----------------

/* Ejercicio 3: "El Mensaje Flash" (setTimeout y clases de Bootstrap)
Consigna: Crea un botón que diga "Guardar Cambios" y un contenedor de alerta oculto (con la clase d-none de Bootstrap). Al hacer clic en el botón:
La alerta debe aparecer mostrando el mensaje "¡Datos guardados con éxito!".
Pasados 3 segundos, la alerta debe desaparecer automáticamente volviendo a ocultarse.

Tips para resolverlo:
Para mostrar y ocultar la alerta, utiliza classList.remove('d-none') y classList.add('d-none').
El setTimeout será el encargado de ejecutar la línea que vuelve a agregar la clase d-none tras los 3000 milisegundos. */

const guardar = document.querySelector("#btnGuardar");
const alerta = document.querySelector("#alerta");

const mostrarAlerta = () => {
  alerta.classList.remove("d-none");
  setTimeout(() => (alerta.classList = "d-none"), 3000);
};

guardar.addEventListener("click", mostrarAlerta);
//---------------

/* Ejercicio 4: "Buscador de Usuario" (async/await y fetch)
Consigna: Crea un botón que diga "Cargar Usuario" y una tarjeta vacía en el HTML. Al hacer clic en el botón, utiliza async/await y fetch para consumir la API pública de JSONPlaceholder ([https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)). Una vez que lleguen los datos, pinta el nombre y el correo electrónico dentro de la tarjeta en el DOM.

Tips para resolverlo:
No olvides que la función asociada al evento del botón debe declararse como async.
Recuerda el doble paso del fetch: primero obtener la respuesta y luego transformarla a JSON con await respuesta.json().
Usa template strings (```) para inyectar las propiedades del objeto recibido dentro del innerHTML de la tarjeta */

const botonCargar = document.querySelector("#btnCargar");
const tarjeta = document.querySelector("#tarjeta");

const cargarUsuario = async () => {
  try {
    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    const usuario = await respuesta.json();

    tarjeta.innerHTML = `
      <p class="card-text">Nombre: ${usuario.name}</p>
      <p class="card-text">Email: ${usuario.email}</p>
    `;
  } catch (error) {
    tarjeta.innerHTML = `<p>No se encontró un usuario</p>`;
  }
};

botonCargar.addEventListener("click", cargarUsuario);

//Este me costó un montón, lo del try y catch lo saque de los rolling tips

//---------------

/*  Ejercicio 5: "Galería de Personajes con Indicador de Carga" (Asincronismo completo)
Consigna: Crea una aplicación que al presionar un botón "Buscar Personaje" muestre temporalmente el texto "Cargando..." en pantalla. Luego, mediante un fetch a la API de Rick and Morty ([https://rickandmortyapi.com/api/character/5](https://rickandmortyapi.com/api/character/5)), obtén un personaje, borra el texto de carga y muestra su nombre y su imagen en el DOM.


Tips para resolverlo:
Antes de hacer el await fetch(...), actualiza el contenedor #resultado con un texto o un Spinner de Bootstrap para simular la espera.
Cuando obtengas los datos de la API, reemplaza el contenido del contenedor utilizando las propiedades data.name y data.image del objeto que te devuelve la API. */
