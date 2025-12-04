export const agregarTareaLocal = (tarea) => {
  let tareasTotal = obtenerLocal();

  if(!tareasTotal){
    tareasTotal = [];
    tareasTotal.push(tarea);
    localStorage.setItem('Tareas',JSON.stringify(tareasTotal));
  } else{
    let tareas = JSON.parse(tareasTotal);
    tareas.push(tarea);
    localStorage.setItem('Tareas',JSON.stringify(tareas));
  }
}

export const guardarListaTotalLocal = (listaCompletaTareas) => {
  localStorage.setItem('Tareas',JSON.stringify(listaCompletaTareas));
}

export const obtenerLocal = () => {
  const tareasTotal = localStorage.getItem('Tareas');
  return tareasTotal;
}

export const obtenerTareasPorID = (id) => {
  const tareasTotales = JSON.parse(obtenerLocal());
  console.log(tareasTotales);

  const indice = tareasTotales.findIndex(item => item.id == id);

  if(indice != -1){
    return tareasTotales[indice];
  }
  return;
}

const guardarActualID = (id) => {
  localStorage.setItem('UltimoIDTarea',JSON.stringify(id));
}

// localStorage.removeItem('Tareas');