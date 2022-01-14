<template>
  <div>
    <h1>
      Sistema de gestión de tareas
    </h1>

    <p class="mt-5">
      Sistema para el manejo de tareas, en el cual podrás: 
    </p>
    <ul>
      <li>Ver tu lista de tareas</li>
      <li>Agregar nuevas tareas</li>
      <li>Editar las tareas existentes</li>
      <li>Eliminar tareas de tu lista de tareas</li>
    </ul>

    <p class="mt-4">Pendientes: </p>
    <ul>
      <li>Conexión con API proporcionada</li>
      <li>Buscar tarea en la lista de tareas</li>
      <li>Filtrar tareas en la lista de tareas</li>
      <li>Agregar paginación en la lista de tareas</li>
      <li>Cambiar estatus de tarea desde la lista de tareas</li>
      <li>Mejoras en pantallas menores a 768px</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
h1 {
  font-size: 2.6rem;
  font-weight: 700;
}
</style>