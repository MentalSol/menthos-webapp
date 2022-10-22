<template>
  <pv-toolbar class="bg-black-alpha-10 h-5rem"></pv-toolbar>
  <div class="col-3 border-3">
    <div>
      <h2>Edita tu perfil</h2>
    </div>
    <div class="flex flex-direction-row align-content-center justify-content-start">
      <img class="h-5rem" style="margin-right: 1rem" src="src/assets/images/perfil.png"/>
      <pv-button class="p-button-raised p-button-rounded w-7rem justify-content-center" style="margin-left: 1rem">Subir foto</pv-button>
    </div>
    <div class="flex flex-direction-row align-content-center justify-content-start">
      <h4>Nombre: Brother 1234</h4>
      <pv-button class="p-button-raised p-button-rounded w-5rem justify-content-center" style="margin-left: 2rem">Editar</pv-button>
    </div>
    <br>
    <div class="flex flex-direction-row align-content-center justify-content-start">
      <h4>Ciclo: 4</h4>
      <pv-button class="p-button-raised p-button-rounded w-5rem justify-content-center" style="margin-left: 2rem">Editar</pv-button>
    </div>
    <br>
    <div class="flex flex-direction-row align-content-center justify-content-start">
      <h4>Mejor materia: Aplicaciones Web</h4>
      <pv-button class="p-button-raised p-button-rounded w-5rem justify-content-center" style="margin-left: 2rem">Editar</pv-button>
    </div>
    <br>
    <div class="flex flex-direction-row align-content-center justify-content-start">
      <h4>Carrera: Ingeniería de software</h4>
      <pv-button class="p-button-raised p-button-rounded w-5rem justify-content-center" style="margin-left: 2rem">Editar</pv-button>
    </div>
    <br>
    <br>
    <br>
    <div class="flex justify-content-center">
      <pv-button class="p-button-raised p-button-rounded w-auto justify-content-center">Guardar cambios</pv-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-profile-edit.component"
}
</script>
