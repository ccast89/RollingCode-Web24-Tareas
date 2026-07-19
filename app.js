//EN APP.JS SE RESUELVE TODA LA TAREA EN CONJUNTO. EL PASO A PASO ESTÁ EN TAREA6.JS

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

    const botonPrioridad = nuevaTarea.querySelector(".btn-info"); //TAREA 6
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
