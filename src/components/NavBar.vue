<template>
  <pv-menubar   :model="getUser()">
      <h1 style="margin: 5px ;   padding: 1px; border: #9acb3c ">Menthos</h1>

  </pv-menubar>
</template>

<script>
import {useRoute} from "vue-router/dist/vue-router";

export default {
  name: "NavBar",
  data() {

    return {
      user: String,
      navigationStudent: [
        {label: "HomeTeacher", icon: 'pi pi-fw pi-home', to: {name:'teacher-home'}},
        {label: "Plans", icon: 'pi pi-fw pi-book', to: {name:'teacher-home'}},
      ],
      navigationTeacher: [
        {label: "HomeStudent", icon: 'pi pi-fw pi-home', to:{name:'student-home'}},
        {label: "Plans", icon: 'pi pi-fw pi-book', to: {name:'student-home'}},
      ],

    }
  },
  created() {
    const route = useRoute();
    this.user= route.matched[0].path;
    this.user= this.user.substring(1, this.user.length-4)
  },
  methods:{
    getUser(){
      if(this.user==='teacher')
        return this.navigationTeacher
      else if (this.user==='student')
        return this.navigationStudent
    },

  }
}
</script>

<style scoped>

</style>