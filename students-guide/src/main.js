import Vue from "vue";
import App from "./App.vue";
// import "bootstrap/dist/css/bootstrap.min.css";
import Router from "vue-router";
import editP from "./components/editProfil.vue";
import profile from "./components/profile.vue";
import editPS from "./components/editProfil-stu.vue"
import techersFS from "./components/teachersforstudent.vue"

// import 'bootstrap/dist/css/bootstrap.css'
import TeacherPost from "./components/Teacher-Post.vue";
import teacherChangePassword from "./components/changePass.vue";
import studentChangePassword from "./components/studentChangePassword.vue";
import signin from "./components/signin.vue";

Vue.use(Router);
var router = new Router({
  mode: "history",

  routes: [
    {
      path: "/edit",
      name: "edit",

      component: editPS
    },
    {
      path: "/",
      name: "profil",
      component: profile
    },
    {
    path: '/teacherChangePass', 
    name:'teacherChangePassword',
    component: teacherChangePassword
  },
  {
    path: '/studentChangePass', 
    name:'studentChangePassword',
    component: studentChangePassword
  },
  { 
    path: '/signin',
    name :'signin' ,
    component:signin
  },

      {path: '/post', 
      name:'post',
      
      component: TeacherPost
    },
    {
      path: "/teacherChangePass",
      // path: "/",

      name: "teacherChangePassword",
      component: teacherChangePassword
    }
  ]
});

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
