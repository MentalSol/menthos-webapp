<template>
  <h1>Bienvenido a Menthos {{teacherData.name}}</h1>
  <div class="grid">
    <div class="col-2	border-0">
      <div class="block">
        <h1>Asignaturas</h1>
      </div>
      <div>
        <div v-for="subject in subjects" class="block flex flex-direction-row align-items-center">
          <div>
            <img v-bind:src="'../../../public/images/' + subject.img" class="img-fluid" v-bind:alt="subject.title">
          </div>
          <div>
            <h4>{{subject.title}}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="col-7 border-0	">
      <div class="flex align-items-center justify-content-center ">
        <h1>Ey! Soy BotBrain</h1>
        <h1>¿Qué es lo que quieres hacer?</h1>

      </div>
      <div class="flex align-content-center justify-content-center">
      </div>
      <div v-for="question in questions" class="block">
        <pv-card>
          <template #header>
            <h1>Question #{{question.id}}</h1>
          </template>
          <template #title>
            {{question.content}}
          </template>
          <template #item="slotProps">
            <h1>{{slotProps.data.answers}}</h1>
          </template>
          <template #footer>
            <pv-button label="Responder"></pv-button>
          </template>
        </pv-card>
      </div>
    </div>
    <div class="col-3	border-0">
      <pv-card>
        <template #header >
          <img
              class="user-img-0"
              alt="user header"
              style="border-radius: 3%"
              :src="teacherData.photo"
          />
        </template>
        <template #title>
          {{teacherData.name}}
        </template>
      </pv-card>
    </div>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {StudentsApiService} from "@/student/services/students-api.service";
import {TeachersApiService} from "@/teacher/services/teachers-api.service";
import {SubjectsApiServices} from "@/menthos/services/subject/subjects-api.services";
import {QuestionsApiServices} from "@/menthos/services/question/questions-api.services";
import {AnswersApiServices} from "@/menthos/services/answer/answers-api.services";

export default {
  name: "teacher-home.component.vue",
  data(){
    return{
      id:Number,
      teacherData:{},
      teachersService:null,
      subjects: [],
      subjectsService: null,
      questions:[],
      questionsService:null,
    }
  },
  created() {
    const route = useRoute();
    this.id = route.params.id;
    this.getTeacherById(this.id);
    this.subjectsService= new SubjectsApiServices();
    this.questionsService = new QuestionsApiServices();
    this.id = route.params.id;
    this.getSubject();
    this.getQuestion();
  },
  methods:{
    getTeacherById(id){
      this.teachersService = new TeachersApiService();
      this.teachersService .getById(id).then((response)=>{
        this.teacherData=response.data;
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