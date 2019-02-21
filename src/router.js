import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import NotFound from "@/components/NotFound.vue";
import store from "./store"
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
    ,
    {
      path: "/work",
      name: "work",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Work.vue")
    }
    ,
    {
      path: "/admin",
      name: "admin",     
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
       component:Admin,
       beforeEnter(to,from,next){      

        if(store.getters.user){           
          console.log(store.state.user);
          console.log(store.getters.user);
         
          next();
        }else{
          next('/signup');
        }
}
      
    }
    ,
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Contact.vue")
    },
    
    {
      path: "/signup",
      name: "signup",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/SignUp.vue")
    }
    ,
    { path: '/404', component: NotFound },  
    { path: '*', redirect: '/404' },
  ]
});
