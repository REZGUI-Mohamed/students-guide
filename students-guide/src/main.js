import Vue from 'vue'
import App from './App.vue'

import Router from "vue-router";
import courses from "./components/courses.vue";
import editP from "./components/editProfil.vue";
import profile from "./components/profile.vue";
import editPS from "./components/editProfil-stu.vue"
import techersFS from "./components/teachersforstudent.vue"
import feed from './components/studentFeed.vue'

// import 'bootstrap/dist/css/bootstrap.css'
import TeacherPost from "./components/Teacher-Post.vue";

import teacherChangePassword from "./components/changePass.vue";
import studentChangePassword from "./components/studentChangePassword.vue";
import signin from "./components/signin.vue";
import studentProfile from "./components/studentProfil.vue";
import about from "./components/about.vue";

Vue.use(Router);
var router = new Router({
  mode: "history",

  routes: [
    {
      path: "/edit",
      name: "edit",

      component: editP
    },
    {
      path: "/profil",
      name: "profil",
      component: profile
    },
    {
      path: "/",
      name: "courses",
      component: courses
    },
    {
      path: "/teacherChangePass",
      name: "teacherChangePassword",
      component: teacherChangePassword
    },
    {
      path: "/studentChangePass",
      name: "studentChangePassword",
      component: studentChangePassword
    },
    {
      path: "/signin",
      name: "signin",
      component: signin
    },

    {
      path: "/post",
      name: "post",

      component: TeacherPost
    },
    {
      path: "/studentChangePass",
      name: "studentChangePassword",
      component: studentChangePassword
    },
    {
      path: "/signin",
      name: "signin",
      component: signin
    },

    { path: "/teachersforstudent", name: "teachers", component: techersFS },

    { path: "/post", name: "post", component: TeacherPost },
    {
      path: "/teacherChangePass",
      name: "teacherChangePassword",
      component: teacherChangePassword
    },
    {
      path: "/studentProfile",
      name: "studentProfile",
      component: studentProfile
    },
    {
      path: "/about",
      name: "about",
      component: about
    },
    {
      path: "/studentFeed",
      name: "studentFeed",
      component: feed
    },
  ]
});

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
