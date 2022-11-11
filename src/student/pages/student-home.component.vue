<template>
<h1>Bienvenido a Menthos {{studentData.name}}</h1>
  <div class="grid">
    <div class="col-2 surface-500	border-3">
      <div class="block">
        <h1>Asignaturas</h1>
      </div>
      <div >
        <div v-for="subject in subjects" class="block">
          {{subject.image}} <h4>{{subject.title}}</h4>
        </div>
      </div>
    </div>
    <div class="col-7 surface-500 border-3	">
      <div class="flex align-items-center justify-content-center ">
        <h1>Ey! Soy BotBrain</h1>
        <h1>¿Qué es lo que quieres hacer?</h1>

      </div>
      <div >
        <router-link :to="{ name: 'addQuestion' }">
          <pv-button  icon="pi pi-plus" label="Preguntar"  />
        </router-link >
      </div>
      <div v-for="question in questions" class="block">
        <pv-card >
          <template #header>
            <h1>Question #{{question.id}}</h1>
          </template>
          <template #title>
            {{question.content}}
          </template>
          <template #item="slotProps">
            <h1>{{slotProps.data.answers}}</h1>
          </template>
        </pv-card>
      </div>
    </div>
    <div class="col-3 surface-500	border-3">
      <pv-card>
        <template #header >
          <img
              class="user-img-0"
              alt="user header"
              style="border-radius: 3%"
              :src="studentData.photo"
          />
        </template>
        <template #title>
          {{studentData.name}}
        </template>
        <template #content>
          Respuestas:{{studentData.answers}}<br>
          Puntos:{{studentData.points}}<br>
          Carrera:{{studentData.career}}<br>
          Puesto Ranking:{{studentData.Ranking}}<br>
          <pv-button label="Info" class="p-button-info" @click="goProfile()"></pv-button>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {StudentsApiService} from "@/student/services/students-api.service";
import {SubjectsApiServices} from "@/menthos/services/subject/subjects-api.services";
import {QuestionsApiServices} from "@/menthos/services/question/questions-api.services";
import {AnswersApiServices} from "@/menthos/services/answer/answers-api.services";

export default {
  name: "student-home.component.vue",
  data(){
    return{
      id:Number,
      studentData:{},
      studentsService:null,
      subjects: [],
      subjectsService: null,
      questions:[],
      questionsService:null,
      answers:null,
      answersService:null,
    }
  },
  created() {
    this.subjectsService= new SubjectsApiServices();
    this.questionsService = new QuestionsApiServices();
    const route = useRoute();
    this.id = route.params.id;
    this.getStudentById(this.id);
    this.getSubject();
    this.getQuestion();
    this.answersService= new AnswersApiServices();
    this.answersService.findByQuestionID(this.id).then((response) => {
      this.answers = response.data;
    })

  },
  methods:{
    getStudentById(id){
      this.studentsService = new StudentsApiService();
      this.studentsService .getById(id).then((response)=>{
        this.studentData=response.data;
      });
      console.log("created")
    },
    getSubject(){
      this.subjectsService.getSubjects().then((response)=>{
        this.subjects=response.data;
        console.log(this.subjects);
      });
    },
    getQuestion(){
      this.questionsService.getQuestions().then((response)=>{
        this.questions=response.data;
        console.log(this.questions);
      });
    },
  }
}
</script>

<style scoped>

</style>