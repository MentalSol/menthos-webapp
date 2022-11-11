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
import {AuthenticationApiService} from "@/security/services/authentication-api.service";
import {email,required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

export default {
  name: "sign-up.vue",
  setup: () => ({v$: useVuelidate()}),
  data(){
    return{
      typeUser: 'Teacher',
      optionsUser:['Student', 'Teacher'],
      name:'',
      lastName:'',
      email:'',
      userName:'',
      UpcCode:'',
      password:'',
      date:null,
      user:null,
      accept:null,
      submitted:false,
      showMessage:false,
      teacher:{},
      student:{},
      authenticationApiService:null,
    }
  },
  validations() {
    return {
      name: {
        required,
      },
      lastName:{
        required,
      },
      email:{
        required,
      },
      userName: {
        required,
        email
      },
      UpcCode: {
        required
      },
      password: {
        required
      },
      accept:{
        required
      }
    }
  },
  created() {
    this.authenticationApiService = new AuthenticationApiService();
  },
  methods:{
    handleSubmit(isFormValid){
      this.submitted = true;

      if (!isFormValid) {
        return;
      }

      this.toggleDialog();
    },
    toggleDialog() {
      this.showMessage = !this.showMessage;

      if (!this.showMessage) {
        this.resetForm();
      }
    },
    resetForm() {
      this.name = '';
      this.lastName='';
      this.userName='';
      this.email = '';
      this.UpcCode='';
      this.password = '';
      this.date = null;
      this.user = null;
      this.accept = null;
      this.submitted = false;
    },
    addNewUser() {
      if ( this.typeUser === 'Teacher'){
        this.teacher={
          name:this.name,
          lastName:this.lastName,
          userName:this.userName,
          email:this.email,
          password:this.password,
        }
        this.authenticationApiService
            .signUpTeacher( this.teacher)
      }else
      if ( this.typeUser === 'Student'){
        this.student={
          name:this.name,
          lastName:this.lastName,
          userName:this.userName,
          email:this.email,
          UpcCode:this.UpcCode,
          password:this.password,
        }
        this.authenticationApiService
            .signUpStudent( this.student)
      }

    },
  }

}
</script>

<style scoped>

</style>