// Importaciones de utilidades
import { agregarTareaLocal } from "../utils/storage.js";
import { obtenerLocal } from "../utils/storage.js";
import { guardarListaTotalLocal } from '../utils/storage.js';

export const agregarTarea = (id,tarea) => {
  const tareaItem = {
    id: id,
    tarea: tarea,
    completada: false
  }
  agregarTareaLocal(tareaItem);
}

export const tareaCompletada = (id) => {
  const tareasTotales = JSON.parse(obtenerLocal());

  const indice = tareasTotales.findIndex(item => item.id == id);

  if(indice != -1){
    tareasTotales[indice].completada = !tareasTotales[indice].completada;
    guardarListaTotalLocal(tareasTotales);
  }
}

export const eliminarTarea = (id) => {
  console.log(id);
  const tareasTotales = JSON.parse(obtenerLocal());

  const indice = tareasTotales.findIndex(item => item.id == id);

  if(indice != -1){
    tareasTotales.splice(indice,1);
    guardarListaTotalLocal(tareasTotales);
    console.log(obtenerLocal());
  }
}


