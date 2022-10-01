import { createRouter, createWebHistory } from 'vue-router'
import HomeViewComponent from "@/menthos/pages/home-view.component.vue";
import signInComponent from "@/menthos/pages/sign-in.component.vue";
import signUpComponent from "@/menthos/pages/sign-up.component.vue";
import signUpFormComponent from "@/menthos/pages/sign-up-form.component.vue";

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
    },
    {
      path:'/sign-up',
      name:'SignUp',
      component: signUpComponent
    },
    {
      path:'/sign-up-form',
      name:'SignUpForm',
      component: signUpFormComponent
    }
  ]
})

export default router
