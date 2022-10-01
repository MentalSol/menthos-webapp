<template>
  <div class="top-container">
    <h1 > Únete a Menthos</h1>
    <h3> Crea una cuenta para poder aclarar las dudas que tienes en
      tus temas de interes</h3>
  </div>
  <div class="flex align-items-center justify-content-center ">
    <a href="/sign-up-form"> <pv-button class="p-button-raised  w-30rem align-items-center h-4rem">Regístrate</pv-button></a>

  </div>
  <div class="flex align-items-center justify-content-center mt-5" >
    <div class="w-30rem h-3rem relative">
      <Chexbox /><p class="top-0 absolute">Estudiante</p>
      <Chexbox class="absolute right-0"/> <p class="absolute top-0 right-0">Tutor</p>
    </div>
  </div>
  <Divider></Divider>
  <div class="flex align-items-center justify-content-center ">
    <div >
      <pv-button class="p-button-raised p-button-rounded bg-bluegray-100 w-30rem ">Registra tu correo electrónico</pv-button>
      <p class="text-center">No te enviaremos spam. Valoramos tu privacidad</p>
    </div>
  </div>
  <div class="flex align-items-center justify-content-center">
    <h2>¿Ya tienes una cuenta? <a href="/sign-in">Inicia Sesion</a></h2>
  </div>
</template>

<script>
export default {
  name: "sign-up.component"
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