<template>
  <pv-toolbar class="bg-black-alpha-10 h-5rem"></pv-toolbar>

  <div class="flex flex-direction-row align-items-center" style="justify-content: space-evenly">

    <div class="col-fixed border-3" >
      <div class="flex flex-direction-row align-content-center justify-content-center">
        <img class="h-4rem" style="margin-right: 1rem" src="src/assets/images/perfil.png"/>
        <h3>Brother1234</h3>
        <img class="h-1rem" style="margin-left: 8rem" src="src/assets/images/campana.png"/>
      </div>
      <div class="col-fixed border-2 w-7rem m-2">
        Estudiante
      </div>
      <div class="flex flex-direction-row justify-content-between">
        <div>
          <p>Respuestas </p><p>0</p>
        </div>
        <div>
          <p>Me gusta </p><p>0</p>
        </div>
        <div>
          <p>Seguidores </p><p>0</p>
        </div>
      </div>
      <div class="flex justify-content-center">
        <a href="/user-profile-edit"><pv-button class="p-button-raised p-button-rounded w-auto justify-content-center">
          <img src="src/assets/images/pluma.png" style="margin-right: 1rem"/>Editar perfil
        </pv-button></a>
      </div>
      <div>
        <h3>Acerca de</h3>
      </div>
      <hr>
      <div>
        <div><h5>Ciclo: 4</h5></div>
        <div><h5>Registrado: 1 de Septiembre del 2022</h5></div>
        <div><h5>Mejor materia: Aplicaciones Web</h5></div>
        <div><h5>Carrera: Ingenieria de Software</h5></div>
      </div>
    </div>

    <div>
      <div>
        <p>Respuestas 0 Preguntas 0</p>
      </div>
      <div class="col-fixed border-3 h-25rem">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile-teacher.component.vue"
}
</script>

<style scoped>

</style>