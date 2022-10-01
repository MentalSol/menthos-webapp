<template>
  <div class="grid ">
    <div class="col-fixed border-3" style="width:300px">
      <div class="block">
        <h1>Asignaturas</h1>
      </div>

    </div>
    <div class="col border-3">2</div>
    <div class="col-fixed border-3" style="width:400px">3</div>
  </div>
</template>

<script>
import {SubjectsApiServices} from "@/menthos/services/subject/subjects-api.services";

export default {
  name: "home-view.component",
  data(){
    return{
      subjects: [],
      selectedSubjects:null,
      subjectsService: null
    }
  },
  created() {

  },
  methods:{

  }
}
</script>

<style >

</style>