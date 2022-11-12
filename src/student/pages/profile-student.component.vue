<template>
  <pv-toolbar class="bg-black-alpha-10 h-5rem"></pv-toolbar>

  <div class="flex flex-direction-row align-items-center" style="justify-content: space-evenly">

    <div class="col-fixed border-3" >
      <div class="flex flex-direction-row align-content-center justify-content-center">
        <img
            class="user-img-0"
            alt="user header"
            style="border-radius: 3%"
            :src="student.photo"
        />
        <h3>{{student.name}}</h3>
      </div>
      <div class="col-fixed border-2 w-7rem m-2">
        Estudiante
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
        <router-link :to="{ name: 'student-profile-edit', id}">
          <pv-button id="button" label="Edit" />
        </router-link>
      </div>
      <div>
        <h3>Acerca de</h3>
      </div>
      <hr>
      <div>
        <div><h5>Ciclo: 4</h5></div>
        <div><h5>Registrado: 1 de Septiembre del 2022</h5></div>
        <div><h5>Mejor materia: Aplicaciones Web</h5></div>
        <div><h5>Carrera: Ingenieria de Software</h5></div>
      </div>
    </div>

    <div>
      <div>
        <p>Questions</p>
      </div>
      <div class="col-fixed border-3 h-25rem">
        <pv-carousel :value="questions" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">

          <template #header>
            <h1 class="text-center" style="margin: 0;color: darkblue">Questions:</h1>
          </template>


          <template #item="slotProps">

            <div class="questioons-content">
              <div>
                <h2 class="mb-1">{{slotProps.data.content}}</h2>
              </div>
            </div>

          </template>

        </pv-carousel>
      </div>
    </div>
  </div>

</template>

<script>
import {StudentsApiService} from "@/student/services/students-api.service";
import {QuestionsApiServices} from "@/menthos/services/question/questions-api.services";
import {useRoute} from "vue-router";

export default {
  name: "profile-student.component.vue",
  data() {
    return {
      id:null,
      student: {},
      studentService: null,
      questions: null,
      questionsService:null,
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
        },
        {
          breakpoint: '600px',
          numVisible: 2,
          numScroll: 2
        },
        {
          breakpoint: '480px',
          numVisible: 1,
          numScroll: 1
        }
      ]
    }
},
  created() {
    const route= useRoute();
    this.id = route.params.id;

    console.log(this.id)
    this.studentService = new StudentsApiService();
    this.studentService.getById(this.id).then((response) => {    //getById configurar para inicio de sesion copio el id del que inicio sesión
      this.student = response.data;
    });
    this.questionsService= new QuestionsApiServices();
    this.questionsService.findByStudentId(this.id).then((response) => {
        this.questions = response.data;
    })
  },
}
</script>

<style scoped>
img{
  width: 100px;
  height: 100px;
}

.questioons-content {
  border: 1px solid var(--surface-border);
  border-radius: 3px;
  margin: .3rem;
  text-align: center;
  padding: 2rem 0;
}
</style>