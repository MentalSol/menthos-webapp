<template>
  <pv-card>
    <template #header>
      <h1>Add new question</h1>
    </template>
    <template #title>
      <pv-input-text placeholder="Question" type="text"   v-model="question.content"/>
    </template>
    <template #content>
      <router-link :to="{ name: 'student-home'}">
        <pv-button  icon="pi pi-times" class="p-button-secondary" label="Cancel"  />
      </router-link >
      <pv-button v-on:click="saveQuestion()" icon="pi pi-check" label="Save"  />
    </template>
  </pv-card>
</template>

<script>
import {useRoute} from "vue-router";
import {QuestionsApiServices} from "@/menthos/services/question/questions-api.services";

export default {
  name: "student-add-question.component.vue",
  data(){
    return{
      question:
          {
            content:"",
            studentId:null,
            subjectId:null,
          }
    };
  },
  created() {
    const route = useRoute();
    this.question.studentId = parseInt(route.params.id);
    console.log(this.question.studentId)
  },
  methods:{
    saveQuestion(){
      this.questionService= new QuestionsApiServices();
      this.questionService.createQuestions(this.question).then((response)=>{

      });
      this.$router.push({name:'student-home'});
    }
  }
}
</script>

<style scoped>

</style>