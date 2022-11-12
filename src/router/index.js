import { createRouter, createWebHistory } from 'vue-router'
import HomeViewComponent from "@/menthos/pages/home-view.component.vue";
import signInComponent from "@/menthos/pages/sign-in.component.vue";
import signUpComponent from "@/menthos/pages/sign-up.component.vue";
import signUpFormComponent from "@/menthos/pages/sign-up-form.component.vue";
import recoverAccountComponent from "@/menthos/pages/recover-account.component.vue";
import userProfileComponent from "@/menthos/pages/user-profile.component.vue";
import userProfileEditComponent from "@/menthos/pages/user-profile-edit.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path:'/',
      name:'sign-in',
      component: ()=>import('../security/pages/sign-in.vue')
    },
    {
      path:'/sign-up',
      name:'sign-up',
      component: ()=>import('../security/pages/sign-up.vue')

    },
    {
      path: "/student/:id",
      name: "student",
      component: ()=>import('../student/pages/student.component.vue'),
      children:[
        {
          path: "student-home",
          name: "student-home",
          component: ()=>import('../student/pages/student-home.component.vue'),
        },
        {
          path: 'add',
          name: 'addQuestion',
          component: ()=>import('../student/pages/student-add-question.component.vue'),
        },
        {
          path: "/profile-student/:id",
          name: "profile-student",
          component: ()=>import('../student/pages/profile-student.component.vue'),
        },
        {
          path: "/student-profile-edit/:id",
          name: "student-profile-edit",
          component: ()=>import('../student/pages/edit-profile-student.component.vue'),
        },
      ]
    },
    {
      path: "/teacher/:id",
      name: "teacher",
      component: ()=>import('../teacher/pages/teacher.component.vue'),
      children:[
        {
          path: "teacher-home",
          name: "teacher-home",
          component: ()=>import('../teacher/pages/teacher-home.component.vue'),
        },
        {
          path: "/profile-teacher/:id",
          name: "profile-teacher",
          component: ()=>import('../teacher/pages/profile-teacher.component.vue'),
        },
      ]
    },
  ]
})

export default router
