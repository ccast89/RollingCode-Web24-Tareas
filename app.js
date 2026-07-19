//EN APP.JS SE RESUELVE TODA LA TAREA EN CONJUNTO. EL PASO A PASO ESTÁ EN TAREA6.JS

const btnAgregar = document.querySelector("#btnAgregar");
const inputTarea = document.querySelector("#inputTarea");
const listaTareas = document.querySelector("#listaTareas"); // Se agrega esta variable para poder agregarle la li despues - TAREA 2

const agregarTarea = () => {
  /*   console.log(inputTarea.value); */
  //Saqué esta linea de la TAREA 1 porque ya no era necesaria
  const nuevaTarea = document.createElement("li");
  nuevaTarea.innerHTML = `${inputTarea.value} <button class="btn btn-danger btn-sm">X</button></li>`;
  nuevaTarea.classList = "list-group-item d-flex justify-content-between";

  listaTareas.append(nuevaTarea);

  inputTarea.value = ""; // TAREA 3
  inputTarea.focus();
};

btnAgregar.addEventListener("click", agregarTarea);
