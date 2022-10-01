<template>
<div class="top-container">
  <h1 >  Bienvenido de nuevo</h1>
  <h3>Aclara tus dudas y mejora tus conocimientos en tus cursos</h3>
   <h3> con ayuda de nuestros tutores</h3>
  <h2>INICIAR SESIÓN</h2>
</div>
    <Divider />
  <div class="flex align-items-center justify-content-center ">
    <div >
      <pv-input-text class="block bg-bluegray-100 font-bold text-center p-4 border-round mb-3 w-30rem h-1rem"/>

      <pv-input-text class="block bg-bluegray-100 font-bold text-center p-4 border-round mb-3 w-30rem h-1rem"/>

      <pv-button class="p-button-raised p-button-rounded w-30rem ">Iniciar Sesión</pv-button>
    </div>

  </div>
  <div class="flex align-items-center justify-content-center">
    <div class="w-30rem h-3rem relative">
      <Chexbox class="top-0 "/><p class="top-0 absolute">No cerrar sesión</p>
      <p class="absolute top-0 right-0">¿Olvidaste tu contraseña?</p>
    </div>

  </div>
  <div class="flex align-items-center justify-content-center">
    <h2>¿No tienes una cuenta? <a href="">Registrate</a></h2>
  </div>

</template>

<script>
export default {
  name: "sign-in.component",
  components: {},


}
</script>

<style >
.top-container{
  width: 100%;
  margin-top: 100px;
}
.top-container h1{
  text-align: center;

}
.top-container h2{
  text-align: center;

}
.top-container h3{
  text-align: center;
}
pv-input-text .input-container{
  color: red;
}
.divider-from-top{
  width: 100%;
  height:auto;
  align-content: center;
}
</style>