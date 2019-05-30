import Vue from "vue";
import Router from "vue-router";
import {store} from "@/store/index";
import firebase from "firebase"
Vue.use(Router);

import routes from './routes'
import AuthService from '@/services/AuthService'

let mgr = new AuthService();

const router = new Router({
  routes,
  mode: "history",
  base: process.env.BASE_URL
});

export default router


router.beforeEach((to,from,next)=>{
 const lang = to.params.lang
 console.log(lang)
  
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if(requiresAuth){
    console.log(to.fullPath)
    localStorage.setItem('redirect',to.fullPath)
    store.commit('SET_REDIRECT',to.fullPath)
    //return
    mgr.getUser().then((user)=>{
      if(user){
        store.commit('setUser',user.profile)
        next();
     localStorage.removeItem('redirect')

      }else{
        next()
      }
    })
  }else{
    next();
  }
})
