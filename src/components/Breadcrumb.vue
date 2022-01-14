<template>
  <div class="breadcrumb d-flex flex-column">
    <p>Inicio <span>> Tareas</span></p>
    <h1 class="m-0 mt-2">{{title}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    props: {
      title: {
        required: true,
        type: String
      }
    }
  }
</script>

<style scoped>
.breadcrumb {
  background-color: #FFFFFF !important;
  margin-bottom: 24px;
  padding: 0 !important;
}
.breadcrumb p {
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
}
.breadcrumb span {
  color: #4FB9BB;
}
.breadcrumb h1 {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>