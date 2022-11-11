<template>
  <pv-card>
    <template #header>
    </template>
    <template #title>
      <div class="flex flex-direction-row align-items-center justify-content-center">
        <div>
          <img class="image-profile"
           :src="this.student.photo"
          />
        </div>
        <div>
          <h1 class= "mb-1 md:m-2" style="margin: 0;color: darkblue">
            hola "{{student.name}}"
          </h1>
        </div>

      </div>
    </template>
    <template #content>
      <div class="flex flex-direction-row align-items-center justify-content-center">
        <div>
          <h3 style="margin: 0;color: forestgreen">Carrera: {{student.career}}</h3>
          <h3 style="margin: 0;color: forestgreen">Ranking: {{student.Ranking}}</h3>
        </div>
      </div>
    </template>
  </pv-card>

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