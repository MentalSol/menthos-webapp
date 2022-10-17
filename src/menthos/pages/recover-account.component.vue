<template>
  <div class="top-container">
    <h1 >¿Olvidaste tu contraseña?</h1>
    <h3>No te preocupes, pon tu correo y te enviaremos el link para</h3>
    <h3>cambiar tu contraseña</h3>
  </div>
  <div class="flex align-items-center justify-content-center ">
    <div>
      <pv-input-text placeholder="Correo electrónico" class="block bg-bluegray-100 font-bold p-4 border-round mb-3 w-30rem h-1rem"/>
      <pv-button class="p-button-raised p-button-rounded w-30rem justify-content-center">RECUERDA CONTRASEÑA</pv-button>
    </div>
  </div>
  <div class="flex align-items-center justify-content-center">
    <p class="w-10px">o vuelve hacia la página de <a href="/sign-in">Inicia Sesion</a></p>
  </div>
</template>

<script>
  export default {
    name: "recover-account.component"
  }
</script>