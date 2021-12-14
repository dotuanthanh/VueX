import { createRouter, createWebHistory } from "vue-router";
import LogIn from "./components/Login.vue";
import Forbidden from "./components/Forbidden.vue";
import NotFound from "./components/NotFound.vue";
import SignIn from "./components/SignIn.vue";
import Game from "./components/Game/Game.vue";
const routers = [
  //can use this one  to be catch all
  // { path: '/:notFound(.*)', component: NotFound }
  {
    path: "/game",
    component: Game,
    meta:{
      isAuthen : true
    },
  },
  {
    path: "/login",
    component: LogIn,
    alias:"/"
  },
  {
    path: "/signin",
    component: SignIn,
  },
  {
    path: "/:pathMatch",
    component: NotFound,
  },
  {
    path: "/403",
    component: Forbidden,
  }
];

const router = createRouter({
  //define router
  routes: routers,
  //tell vue how to manage the routing history
  history: createWebHistory(),
  
  linkActiveClass: "active",
});
router.beforeEach((to, from, next) => {
 if(to.meta.isAuthen){
   console.log(to.path)
   if(localStorage.getItem('username')!='thanhdt'){
      next("/403");
   }
 }
 next()
 console.log(to,from)
}
)


export default router;
