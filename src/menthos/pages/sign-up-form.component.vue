<template>
  <div class="top-container">
    <h1 >Únete a Menthos</h1>
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
    <a href="/sign-in"> <pv-button class="p-button-raised  w-10rem align-items-center h-3rem justify-content-center">Regístrarme</pv-button></a>

  </div>
  <div class="flex align-items-center justify-content-center">
    <h2>¿Ya tienes una cuenta? <a href="/sign-in">Inicia Sesion</a></h2>
  </div>
  <footer class="flex align-items-center justify-content-center">
    <p>Al registrarse, aceptas las <u>Condiciones del Servicio</u> y la <u>Politica de Privacidad</u> de Menthos</p>
  </footer>
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