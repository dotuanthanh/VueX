import { createRouter, createWebHistory } from "vue-router";
import LogIn from "./components/Login.vue";
import Forbidden from "./components/Forbidden.vue";
import NotFound from "./components/NotFound.vue";
import SignIn from "./components/SignIn.vue";
import Game from "./components/Game/Game.vue";
import Home from "./components/Home.vue"
import Product from "./components/Page/ProductsList.vue"
import UserCart from "./components/Page/UserCart.vue"
const routers = [
  //can use this one  to be catch all
  // { path: '/:notFound(.*)', component: NotFound }
  {
    path: "/game",
    component: Game,
    meta:{
      isRequiredAuthen : true
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
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/products",
    component: Product,
  },
  {
    path: "/cart",
    component: UserCart,
    //    meta:{
    //   isRequiredAuthen : true
    // }
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
 if(to.meta.isRequiredAuthen){
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
