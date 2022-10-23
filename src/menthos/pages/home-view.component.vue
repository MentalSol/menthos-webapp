<template>
  <div class="grid ">
    <div class="col-fixed border-3" style="width:300px">
      <div class="block">
        <h1>Asignaturas</h1>
      </div>
       <div >
          <div v-for="subject in subjects" class="block">
           {{subject.image}} <h4>{{subject.title}}</h4>
          </div>
       </div>

    </div>
    <div class="col border-3">
      <div class="flex align-items-center justify-content-center ">
        <h1>Ey! Soy BotBrain</h1>
        <h1>¿Qué es lo que quieres hacer?</h1>
      </div>
         <div v-for="question in questions" class="block">
           <pv-card >
             <template #header>
               <h1>Question #{{question.id}}</h1>
             </template>
             <template #title>
               {{question.content}}
             </template>
           </pv-card>
         </div>
    </div>
    <div class="col-fixed border-3" style="width:400px">
      <div v-for="user in users" class="block">
        <pv-card>
          <template #header >
            <img
                class="user-img-0"
                alt="user header"
                style="border-radius: 3%"
                :src="user.photo"
            />
          </template>
          <template #title>
            {{user.name}}
          </template>
          <template #content>
           Respuestas:{{user.answers}}<br>
            Puntos:{{user.points}}<br>
            Carrera:{{user.career}}<br>
            Puesto Ranking:{{user.Ranking}}
          </template>
        </pv-card>
      </div>

    </div>
  </div>

</template>

<script>
import {SubjectsApiServices} from "@/menthos/services/subject/subjects-api.services";
import {UsersApiServices} from "@/menthos/services/user/users-api.services";
import {QuestionsApiServices} from "@/menthos/services/question/questions-api.services";

export default {
  name: "home-view.component",
  components: {
  },

  data(){
    return{
      subjects: [],
      subjectsService: null,
      users:[],
      usersService: null,
      questions:[],
      questionsService:null,

    }
  },
  created() {
    this.subjectsService= new SubjectsApiServices();
    this.usersService = new UsersApiServices();
    this.questionsService = new QuestionsApiServices();
    this.getSubject();
    this.getUser();
    this.getQuestion();
  },
  methods:{
    getSubject(){
      this.subjectsService.getSubjects().then((response)=>{
        this.subjects=response.data;
        console.log(this.subjects);
      });
    },
    getUser(){
      this.usersService.getUsers().then((response)=>{
        this.users=response.data;
        console.log(this.users);
      });
    },
    getQuestion(){
      this.questionsService.getQuestions().then((response)=>{
        this.questions=response.data;
        console.log(this.questions);
      });
    },
  },
}
</script>

<style >

</style>