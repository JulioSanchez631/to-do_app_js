// Importaciones del CRUD de la app
import { agregarTarea } from "../../services/TodoServices.js";

// Importacion del archivo DOM que realizara el plasmado
import { renderizarTablaTareas } from "../components/TaskList.js";

// Importaciones de utilidades de Storage.js
import { obtenerLocal } from "../../utils/storage.js";

const inputTareaForm = document.getElementById("input-tarea");
const btnAgregarTarea = document.getElementById("btn-agregar-tarea");
const contenedorAviso = document.querySelector(".contenedor-aviso-error");


const generadorID = () => {
  const tareasTotales = JSON.parse(obtenerLocal());
  
  if(tareasTotales && tareasTotales.length > 0){
    const idsExistentes = tareasTotales.map(tarea => tarea.id);
    console.log(idsExistentes);
    const idsOrdenador = idsExistentes.sort((a,b) => a - b);
    return idsOrdenador[idsOrdenador.length-1] + 1;
  } else{
    return 1;
  }
}

btnAgregarTarea.addEventListener('click',() => {
  if(inputTareaForm.value){
    let idActual = generadorID();
    console.log(idActual);
    agregarTarea(idActual,inputTareaForm.value);
    contenedorAviso.classList.add('ocultar');
    renderizarTablaTareas();
    inputTareaForm.value = '';

  } else if(!inputTareaForm.value && contenedorAviso){
    console.log(2);
    console.log(contenedorAviso);
    contenedorAviso.classList.remove('ocultar');
  }
})