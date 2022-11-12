<template>
  <pv-toolbar class="bg-black-alpha-10 h-5rem"></pv-toolbar>

  <div class="flex flex-direction-row align-items-center" style="justify-content: space-evenly">

    <div class="col-fixed border-3" >
      <div class="flex flex-direction-row align-content-center justify-content-center">
        <img
            class="user-img-0"
            alt="user header"
            style="border-radius: 3%"
            :src="teacher.photo"
        />
        <h3>{{teacher.name}}</h3>
      </div>
      <div class="col-fixed border-2 w-7rem m-2">
        Profesor
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
          Editar perfil
        </pv-button></a>
      </div>
      <div>
        <h3>Acerca de</h3>
      </div>
      <hr>
      <div>
        <div><h5>Registrado: 4 de Septiembre del 2022</h5></div>
        <div><h5>Mejor materia: Aplicaciones Web</h5></div>
      </div>
    </div>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {StudentsApiService} from "@/student/services/students-api.service";
import {QuestionsApiServices} from "@/menthos/services/question/questions-api.services";
import {TeachersApiService} from "@/teacher/services/teachers-api.service";

export default {
  name: "profile-teacher.component.vue",
  data() {
    return {
      id:null,
      teacher: {},
      teacherService: null,
    }
  },
  created() {
    const route= useRoute();
    this.id = route.params.id;

    console.log(this.id)
    this.teacherService = new TeachersApiService();
    this.teacherService.getById(this.id).then((response) => {    //getById configurar para inicio de sesion copio el id del que inicio sesión
      this.teacher = response.data;
    });
  },
}
</script>

<style scoped>
img{
  width: 100px;
  height: 100px;
}
</style>