<template>
  <pv-menubar   :model="getUser()">

    <template #start >
      <h1 style="margin: 5px ;   padding: 1px;  ">Menthos</h1>
    </template>
    <template #end>
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <pv-input-text placeholder="Search" type="text" />
      </span>
    </template>
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
        {label: "HomeStudent", icon: 'pi pi-fw pi-home', to: {name:'student-home'}},
        {label: "BrainTube", icon: 'pi pi-fw pi-book', to: {name:'student-home'}},
        {label: "Profile", icon: 'pi pi-fw pi-user', to:{name:'profile-student'}},
        {label: "Sign out", icon: 'pi pi-fw pi-sign-out', to: "/"},
      ],
      navigationTeacher: [
        {label: "HomeTeacher", icon: 'pi pi-fw pi-home', to:{name:'teacher-home'}},
        {label: "BrainTube", icon: 'pi pi-fw pi-book', to: {name:'teacher-home'}},
        {label: "Profile", icon: 'pi pi-fw pi-user',to: {name: 'profile-teacher'}},
        {label: "Sign out", icon: 'pi pi-fw pi-sign-out', to: "/"},
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