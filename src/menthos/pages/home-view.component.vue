<template>
  <div class="grid ">
    <div class="col-fixed border-3" style="width:300px">
      <div class="block">
        <h1>Asignaturas</h1>
      </div>
       <div >
          <div v-for="subject in subjects" class="block">
            <h4>{{subject.title}}</h4>
          </div>
       </div>

    </div>
    <div class="col border-3">
      <div class=" justify-content-center align-items-center">
        <h1>Ey! Soy BotBrain</h1>
        <h1>¿Qué es lo que quieres hacer?</h1>
      </div>

    </div>
    <div class="col-fixed border-3" style="width:400px">

    </div>
  </div>

</template>

<script>
import {SubjectsApiServices} from "@/menthos/services/subject/subjects-api.services";
import {UsersApiServices} from "@/menthos/services/user/users-api.services";

export default {
  name: "home-view.component",
  components: {
  },

  data(){
    return{
      subjects: [],
      subjectsService: null,
      subject:{},
      submitted: false,
      tutorialDialog: false
    }
  },
  created() {
    this.subjectsService= new SubjectsApiServices();
    this.getSubject();
  },
  methods:{
    getSubject(){
      this.subjectsService.getSubjects().then((response)=>{
        this.subjects=response.data;
        console.log(this.subjects);
      });
    },
    openNew() {
      this.tutorial = {};
      this.submitted = false;
      this.tutorialDialog = true;
    },
  },
}
</script>

<style >

</style>