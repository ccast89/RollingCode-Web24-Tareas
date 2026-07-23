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
    nuevaTarea.textContent = inputTarea.value.trim();
    nuevaTarea.classList = "list-group-item d-flex justify-content-between";

    const botonPrioridad = document.createElement("button");
    botonPrioridad.classList = "btn btn-info btn-sm";
    botonPrioridad.textContent = "Prioridad";
    const priorizarTarea = () => nuevaTarea.classList.toggle("bg-warning");
    botonPrioridad.addEventListener("click", priorizarTarea);

    const botonBorrar = document.createElement("button");
    botonBorrar.classList = "btn btn-danger btn-sm ms-2";
    botonBorrar.textContent = "X";
    const borrarTarea = () => nuevaTarea.remove(); //TAREA 4
    botonBorrar.addEventListener("click", borrarTarea); //TAREA 4

    nuevaTarea.append(botonPrioridad);
    nuevaTarea.append(botonBorrar);

    listaTareas.append(nuevaTarea);
    inputTarea.value = ""; // TAREA 3
    inputTarea.focus();
  } else {
    alert("Por favor, ingrese una tarea");
  }
};

btnAgregar.addEventListener("click", agregarTarea);
