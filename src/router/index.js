import { createRouter, createWebHistory } from 'vue-router'
import HomeViewComponent from "@/menthos/pages/home-view.component.vue";
import signInComponent from "@/menthos/pages/sign-in.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/home',
      name:'HomeView',
      component: HomeViewComponent
    },
    {
      path:'/sign-in',
      name:'SignIn',
      component: signInComponent
    }
  ]
})

export default router
