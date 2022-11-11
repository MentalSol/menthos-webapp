<template>
  <h1>Hello {{teacherData.name}} {{teacherData.id}}</h1>

</template>

<script>
import {useRoute} from "vue-router";
import {StudentsApiService} from "@/student/services/students-api.service";
import {TeachersApiService} from "@/teacher/services/teachers-api.service";

export default {
  name: "teacher-home.component.vue",
  data(){
    return{
      id:Number,
      teacherData:{},
      teachersService:null
    }
  },
  created() {
    const route = useRoute();
    this.id = route.params.id;
    this.getTeacherById(this.id);
  },
  methods:{
    getTeacherById(id){
      this.teachersService = new TeachersApiService();
      this.teachersService .getById(id).then((response)=>{
        this.teacherData=response.data;
      });
      console.log("created")
    }
  }
}
</script>

<style scoped>

</style>