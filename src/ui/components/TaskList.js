// Importaciones de utilizadades
import { obtenerLocal } from "../../utils/storage.js";

// Declaracion de elementos HTML para ser manipuladas (DOM);

// Importaciones de funciones CRUD (TodoServices.js):
import { tareaCompletada } from "../../services/TodoServices.js";
import { eliminarTarea } from "../../services/TodoServices.js";

const contenedorListaTareas = document.querySelector(".lista-tareas");

export const renderizarTablaTareas = () => {
  const tareas = obtenerLocal();
  const tareasItems = JSON.parse(tareas);

  let plantillaHTML = ``;

  if(tareas){
    tareasItems.forEach(item => {
      plantillaHTML += `
        <li class="tarea-item ${item.completada ? 'completada' : 'pendiente'}">
            <p>${item.tarea}</p>
            
            <div class="contenedor-acciones-item">
              
              <button class="btn-cumplida" data-id='${item.id}'>
                <i class="fa-solid fa-check"></i>
              </button>
              <button class="btn-eliminar" data-id='${item.id}'>
                <i class="fa-solid fa-delete-left"></i>
              </button>
            </div>
          </li>
      `;
    });
    contenedorListaTareas.innerHTML = '';
    contenedorListaTareas.insertAdjacentHTML("beforeend",plantillaHTML);
  }
}

document.addEventListener('DOMContentLoaded',() => {
  renderizarTablaTareas();
})

// Eventos de la lista de tareas
contenedorListaTareas.addEventListener('click',(e) => {
  // Para marcar completada la tarea:
  if(e.target.closest('.btn-cumplida')){
    const btnCompletado = e.target.closest('.btn-cumplida');
    tareaCompletada(btnCompletado.dataset.id);
    renderizarTablaTareas();
  }

  // Para realizar la eliminacion de la tarea:
  if(e.target.closest('.btn-eliminar')){
    const btnEliminar = e.target.closest('.btn-eliminar');
    eliminarTarea(btnEliminar.dataset.id);
    renderizarTablaTareas();
  }
});