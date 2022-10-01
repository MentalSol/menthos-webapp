<template>
  <div class="top-container">
    <h1 >  Bienvenido de nuevo</h1>
    <h3>Llene el siguiente formulario</h3>
  </div>
  <div class="flex justify-content-center">
    <div class="card">
      <div class="field">
        <h3>Nombre:</h3><pv-input-text class="w-30rem h-2rem"></pv-input-text>
      </div>
      <div class="field">
        <h3>Apellido:</h3><pv-input-text class="w-30rem h-2rem"></pv-input-text>
      </div>
      <div class="field">
        <h3>Nombre de usuario:</h3><pv-input-text class="w-30rem h-2rem"></pv-input-text>
      </div>
      <div class="field">
        <h3>Código UPC:</h3><pv-input-text class="w-30rem h-2rem"></pv-input-text>
      </div>
      <div class="field">
        <h3>Escriba su contraseña:</h3><pv-input-text class="w-30rem h-2rem"></pv-input-text>
      </div>
      <div class="field">
        <h3>Confirme la contraseña:</h3><pv-input-text class="w-30rem h-2rem"></pv-input-text>
      </div>
    </div>

  </div>
  <div class="flex align-items-center justify-content-center">
    <a href="/sign-in"> <pv-button class="p-button-raised  w-30rem align-items-center h-4rem">Regístrarme</pv-button></a>

  </div>

</template>

<script>
export default {
  name: "sign-up-form.component",
}
</script>

<style scoped>
.top-container{
  width: 100%;
  margin-top: 50px;
}
.top-container h1{
  text-align: center;

}
.top-container h2{
  text-align: center;

}
.card {
  min-width: 450px;
}

.card form {
  margin-top: 2rem;
}

.card .field {
  margin-bottom: 1rem;
}

</style>