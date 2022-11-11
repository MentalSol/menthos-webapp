<template>
<h1>Hello {{studentData.name}} {{studentData.id}}</h1>
</template>

<script>
import {useRoute} from "vue-router";
import {StudentsApiService} from "@/student/services/students-api.service";

export default {
  name: "student-home.component.vue",
  data(){
    return{
      id:Number,
      studentData:{},
      studentsService:null
    }
  },
  created() {
    const route = useRoute();
    this.id = route.params.id;
    this.getStudentById(this.id);
  },
  methods:{
    getStudentById(id){
      this.studentsService = new StudentsApiService();
      this.studentsService .getById(id).then((response)=>{
        this.studentData=response.data;
      });
      console.log("created")
    }
  }
}
</script>

<style scoped>

</style>