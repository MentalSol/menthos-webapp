<template>
<NavBar></NavBar>

  <RouterView :key="$route.path"></RouterView>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "student.component.vue",
  components:{
    NavBar
  },
}
</script>

<style scoped>

</style>