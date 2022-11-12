<template>
  <form action="#">
    <div id="sup">
      <div>
        <div class="user-detail">
          <div class="input-box">
            <span class="details"> Full Name </span>
            <pv-input-text  v-model="teacher.name" style="width: 100%" type="text" placeholder="Enter your name" required></pv-input-text>
          </div>

          <div class="input-box">
            <span class="details"> Last Name </span>
            <pv-input-text v-model="teacher.lastname" style="width: 100%" type="text" placeholder="Enter your last name" required></pv-input-text>
          </div>

          <div class="input-box">
            <span class="details">  Image </span>
            <pv-input-text v-model="teacher.photo" style="width: 100%" type="text" placeholder="Enter your url business image"
                           required></pv-input-text>
          </div>
        </div>
      </div>
    </div>
  </form>
  <router-link :to="{name: 'profile-teacher'}">
    <pv-button id="button" label="Guardar cambios" style="background-color: blue; width:100%" @click="update"/>
  </router-link>

</template>

<script>
import {useRoute} from "vue-router";
import {StudentsApiService} from "@/student/services/students-api.service";
import {TeachersApiService} from "@/teacher/services/teachers-api.service";

export default {
  name: "edit-profile-teacher.component.vue",
  data() {
    return {
      id: "",
      teacher:{},
      teacherService: null,
    }
  },
  created()
  {
    const route= useRoute();
    this.id=route.params.id;

    console.log(this.id)
    this.teacherService = new TeachersApiService();
    this.teacherService.getById(this.id).then((response) => {
      this.teacher = response.data;
    });
  },
  methods: {
    update() {
      this.teacherService.update(this.id,this.teacher)
    }
  }
}
</script>

<style scoped>

</style>