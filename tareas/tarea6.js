console.log("1. Captura y Eventos");
/* Tarea 1: Captura y Eventos
Enunciado: Selecciona el botón #btnAgregar y el input #inputTarea. 
Agrega un addEventListener de tipo 'click' al botón.

Tip: Cuando el usuario haga clic, haz un console.log del inputTarea.value  para verificar que estás capturando lo que el usuario escribe.*/

const btnAgregar = document.querySelector("#btnAgregar");
const inputTarea = document.querySelector("#inputTarea");
const listaTareas = document.querySelector("#listaTareas"); // Se agrega esta variable para poder agregarle la li despues

function nuevaTarea() {
  console.log(inputTarea.value);
}

btnAgregar.addEventListener("click", nuevaTarea);

console.log("2.  Creación Dinámica con Template String");
/* Tarea 2: Creación Dinámica con Template String
Enunciado: Dentro del evento click, crea un nuevo elemento <li> usando document.createElement('li'). 
Usa innerHTML y un template string para insertar el texto del input dentro de una estructura de Bootstrap: <li class="list-group-item d-flex justify-content-between">${texto} <button class="btn btn-danger btn-sm">X</button></li>.

Tip: No olvides usar .append() para insertar el nuevo li dentro del ul #listaTareas. */

const agregarTarea = () => {
  console.log(inputTarea.value);

  const nuevaTarea = document.createElement("li");
  nuevaTarea.innerHTML = `${inputTarea.value} <button class="btn btn-danger btn-sm">X</button></`;
  nuevaTarea.classList = "list-group-item d-flex justify-content-between";

  listaTareas.append(nuevaTarea);
};

btnAgregar.addEventListener("click", agregarTarea);

console.log("3.  Limpieza de Interfaz");
/* Tarea 3: Limpieza de Interfaz
Enunciado: Después de agregar la tarea, el input debe quedar vacío y el cursor debe volver a parpadear en él.

Tip: Asigna un string vacío "" al value del input y usa el método .focus() sobre el mismo elemento */

inputTarea.value = "";
inputTarea.focus();
// TAREA 3 Solo se agregan estas dos lineas antes que termine la funcion. Para que despues que se agregue la tarea a la lista, el input vuelva a quedar vacio y el focus es para que el input quede parpadeando

console.log("4. El Botón de Borrar (Delegación de eventos o lógica simple)");
/* Tarea 4: El Botón de Borrar (Delegación de eventos o lógica simple)
Enunciado: Haz que el botón de "X" que creaste dinámicamente realmente elimine la tarea de la lista.

Tip: En el mismo evento donde creas el li, agrega un addEventListener al botón de borrar que acabas de crear para ejecutar nodo.remove(). */
const agregarTarea = () => {
  const nuevaTarea = document.createElement("li");
  nuevaTarea.innerHTML = `${inputTarea.value} <button class="btn btn-danger btn-sm">X</button></li>`;
  nuevaTarea.classList = "list-group-item d-flex justify-content-between";

  //Se agrega una variable con el boton, buscandolo dentro de la misma funcion con el queryselector. Despues se le asigna una funcion usando el remove y al final se acrega el listener para que cuando haga click se ejecute. Primero puse el eventListener afuera de la funcion y no andaba.
  const botonBorrar = nuevaTarea.querySelector(".btn-danger");
  const borrarTarea = () => nuevaTarea.remove();
  botonBorrar.addEventListener("click", borrarTarea);

  listaTareas.append(nuevaTarea);

  inputTarea.value = ""; // TAREA 3
  inputTarea.focus();
};

console.log("5.  Validación de datos");
/* Tarea 5: Validación de datos
Enunciado: Evita que el usuario agregue tareas vacías.

Tip: Usa un if para comprobar si inputTarea.value.trim() !== "" antes de ejecutar la lógica de creación. Si está vacío, podrías usar alert() para avisar al usuario. */

const agregarTarea = () => {
  /*  Se agrega un if para validar que efectivamente se ingrese una tarea */
  if (inputTarea.value.trim() !== "") {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.innerHTML = `${inputTarea.value} <button class="btn btn-danger btn-sm">X</button></li>`;
    nuevaTarea.classList = "list-group-item d-flex justify-content-between";

    const botonBorrar = nuevaTarea.querySelector(".btn-danger"); //TAREA 4
    const borrarTarea = () => nuevaTarea.remove(); //TAREA 4
    botonBorrar.addEventListener("click", borrarTarea); //TAREA 4

    listaTareas.append(nuevaTarea);

    inputTarea.value = ""; // TAREA 3
    inputTarea.focus();
  } else {
    alert("Por favor, ingrese una tarea");
  }
};

btnAgregar.addEventListener("click", agregarTarea);

console.log("Tarea 6: Estilos Dinámicos (Modo 'Prioridad')");

/* Tarea 6: Estilos Dinámicos (Modo "Prioridad")
Enunciado: Agrega un segundo botón llamado "Prioridad". Al hacer clic en una tarea, esta debe cambiar su color de fondo (usando .classList.add('bg-warning')).

Tip: Puedes alternar clases usando classList.toggle('bg-warning') dentro de un evento click sobre cada li generado.

 */

//Se agrega el nuevo botón, yo elegi poner primero el de prioridad xq me parecia que quedaba mejor, y al igual que con el boton de borrar, le hice otra funcion con un listener. Tb le cambie la clase al boton de prioridad para que sea de otro color.

const btnAgregar = document.querySelector("#btnAgregar");
const inputTarea = document.querySelector("#inputTarea");
const listaTareas = document.querySelector("#listaTareas"); // Se agrega esta variable para poder agregarle la li despues - TAREA 2

const agregarTarea = () => {
  /*   console.log(inputTarea.value); */
  //Saqué esta linea de la TAREA 1 porque ya no era necesaria
  //IF - TAREA 5
  if (inputTarea.value.trim() !== "") {
    const nuevaTarea = document.createElement("li");

    nuevaTarea.innerHTML = `${inputTarea.value} <button class="btn btn-info btn-sm">Prioridad</button> <button class="btn btn-danger btn-sm">X</button> `;
    nuevaTarea.classList = "list-group-item d-flex justify-content-between";

    const botonBorrar = nuevaTarea.querySelector(".btn-danger"); //TAREA 4
    const borrarTarea = () => nuevaTarea.remove(); //TAREA 4
    botonBorrar.addEventListener("click", borrarTarea); //TAREA 4

    const botonPrioridad = nuevaTarea.querySelector(".btn-info");
    const priorizarTarea = () => nuevaTarea.classList.toggle("bg-warning");
    botonPrioridad.addEventListener("click", priorizarTarea);

    listaTareas.append(nuevaTarea);

    inputTarea.value = ""; // TAREA 3
    inputTarea.focus();
  } else {
    alert("Por favor, ingrese una tarea");
  }
};

btnAgregar.addEventListener("click", agregarTarea);
