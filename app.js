//EN APP.JS SE RESUELTE TODA LA TAREA EN CONJUNTO. EL PASO A PASO ESTÁ EN TAREA6.JS

const btnAgregar = document.querySelector("#btnAgregar");
const inputTarea = document.querySelector("#inputTarea");

function nuevaTarea() {
  console.log(inputTarea.value);
}

btnAgregar.addEventListener("click", nuevaTarea);
