<template>
  <pv-menubar   :model="getUser()" class="mymenu" > <!--style="background-color: #457b9d"-->
    <template #start >
      <h1 style="margin: 5px ;   padding: 1px;  ">Menthos</h1>
    </template>
  </pv-menubar>
</template>

<script>
import {useRoute} from "vue-router";

export default {
  name: "NavBar",
  data() {

    return {
      user: String,
      navigationStudent: [
        {label: "Home", icon: 'pi pi-fw pi-home', to: {name:'supplier-home'}},
      ],
      navigationTeacher: [
        {label: "Home", icon: 'pi pi-fw pi-home', to:{name:'store-home'}},

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