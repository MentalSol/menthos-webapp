<template>
  <form action="#">
    <div id="sup">
      <div>
        <div class="user-detail">
          <div class="input-box">
            <span class="details"> Full Name </span>
            <pv-input-text  v-model="student.name" style="width: 100%" type="text" placeholder="Enter your name" required></pv-input-text>
          </div>

          <div class="input-box">
            <span class="details"> Last Name </span>
            <pv-input-text v-model="student.lastname" style="width: 100%" type="text" placeholder="Enter your last name" required></pv-input-text>
          </div>

          <div class="input-box">
            <span class="details"> Email </span>
            <pv-input-text v-model="student.email" style="width: 100%" type="text" placeholder="Enter your email" required></pv-input-text>
          </div>
          <div class="input-box">
            <span class="details">  Image </span>
            <pv-input-text v-model="student.photo" style="width: 100%" type="text" placeholder="Enter your url business image"
                           required></pv-input-text>
          </div>
        </div>
      </div>
    </div>
  </form>
    <router-link :to="{name: 'profile-student'}">
      <pv-button id="button" label="Guardar cambios" style="background-color: blue; width:100%" @click="update"/>
    </router-link>

</template>

<script>
import {StudentsApiService} from "@/student/services/students-api.service";
import {useRoute} from "vue-router";

export default {
  name: "edit-profile-student.component.vue",
  data() {
    return {
      id: "",
      student:{},
      studentService: null,
    }
  },
  created()
  {
    const route= useRoute();
    this.id=route.params.id;

    console.log(this.id)
    this.studentService = new StudentsApiService();
    this.studentService.getById(this.id).then((response) => {    //getById configurar para inicio de sesion copio el id del que inicio sesión
      this.student = response.data;
    });
  },
  methods: {
    update() {
      this.studentService.update(this.id,this.student)   //getById configurar para inicio de sesion copio el id del que inicio sesión
    }
  }
}
</script>

<style scoped>

</style>