<template>
  <div class="top-container">
    <h1 > Únete a Menthos</h1>
    <h3> Crea una cuenta para poder aclarar las dudas que tienes en
      tus temas de interes</h3>
  </div>
  <div class="flex align-items-center justify-content-center ">
    <a href="/sign-up-form"> <pv-button class="p-button-raised  w-30rem align-items-center h-3rem justify-content-center">Regístrate</pv-button></a>

  </div>
  <div class="flex align-items-center justify-content-center mt-5" >
    <div class="w-30rem h-3rem relative flex flex-direction-column justify-content-between">
      <div class="flex flex-direction-row">
      <input type="radio" id="estudiante" class="text-align-left"><p class="text-align-left">Estudiante</p>
      </div>
      <div class="flex flex-direction-row">
      <input type="radio" id="tutor" class="text-align-right"> <p class="text-align-right">Tutor</p>
      </div>
    </div>
  </div>
  <Divider class="flex align-content-center justify-content-center">O</Divider>
  <div class="flex align-items-center justify-content-center ">
    <div >
      <div class="flex flex-direction-column relative justify-content-between">
        <pv-input-text placeholder="Email"></pv-input-text>
        <pv-button class="p-button-raised bg-bluegray-100 w-10rem ">Registrarme</pv-button>
      </div>
      <p class="text-center">No te enviaremos spam. Valoramos tu privacidad</p>
    </div>
  </div>
  <div class="flex align-items-center justify-content-center">
    <h2>¿Ya tienes una cuenta? <a href="/sign-in">Inicia Sesion</a></h2>
  </div>
</template>

<script>
export default {
  name: "sign-up.component",
}
</script>

<style scoped>
.top-container{
  width: 100%;
  margin-top: 100px;
}
.top-container h1{
  text-align: center;

}
</style>