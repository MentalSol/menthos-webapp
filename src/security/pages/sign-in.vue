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
      <pv-input-text id="username" placeholder="Username" type="text" v-model="this.userName" class="block bg-bluegray-100 font-bold p-4 border-round mb-3 w-30rem h-1rem"/>

      <pv-input-text id="password" placeholder="Password" type="password" v-model="this.password" class="block bg-bluegray-100 font-bold p-4 border-round mb-3 w-30rem h-1rem" />
      <div class="field">
        <span class="details"> Type User :  </span>
        <pv-select-button v-model="typeUser" :options="optionsUser"/>
      </div>
      <pv-button class="p-button-raised p-button-rounded w-30rem justify-content-center" label="Login" v-on:click="validate()"></pv-button>

    </div>

  </div>
  <div class="flex align-items-center justify-content-center">
    <div class="w-30rem h-3rem relative flex flex-direction-column field-checkbox">
      <Chexbox inputId="binary" v-model="checked" :binary="true" /><label for="binary">No cerrar sesión</label>
      <a href="/recover-account"><p class="absolute top-0 right-0">¿Olvidaste tu contraseña?</p></a>
    </div>

  </div>
  <div class="flex align-items-center justify-content-center">
    <h2>¿No tienes una cuenta? </h2>   <RouterLink to="/sign-up">
    <pv-button label="Regístrate" icon="pi pi-user-plus" class="p-button-success md:m-2" v-on:keydown="validate()"   > </pv-button>
  </RouterLink>
  </div>

</template>

<script>
import {StudentsApiService} from "@/student/services/students-api.service";
import {TeachersApiService} from "@/teacher/services/teachers-api.service";

export default {
  name: "sign-in.vue",
  data(){
    return {
      checked: false,
      id:Number,
      user:{},
      userName:'',
      password:'',
      typeUser: null,
      optionsUser:['Student','Teacher'],
      students:null,
      studentService: null,
      teachers:null,
      teacherService: null,
    }
  },
  created() {
    this.studentService = new StudentsApiService();
    this.studentService.getAll().then((response) => {
      this.students = response.data;
    });
    this.teacherService = new TeachersApiService();
    this.teacherService.getAll().then((response) => {
      this.teachers = response.data;
    });
  },
  methods: {
    validate(){
      if (this.typeUser==="Teacher") {
        this.user = this.teachers.find(teacher =>
            teacher.name === this.userName && teacher.password === this.password);
        this.id = Number(this.user.id);
        this.$router.push({name:'teacher-home', params:{id:this.id} /*path: `/teacher/${this.id}/teacher-home`*/});
      } else if (this.typeUser==="Student"){
        this.user= this.students.find(student=>
            student.name === this.userName && student.password===this.password);
        this.id=Number(this.user.id);
        this.$router.push({name:'student-home', params:{id:this.id}});
      }
    },
  }
}
</script>

<style scoped>

</style>