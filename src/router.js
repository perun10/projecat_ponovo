import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import NotFound from "@/components/Common/NotFound.vue";
import Edit from './components/Work/Edit.vue'
// import NotFound from "@/components/NotFound.vue";
// import store from "./store"
import {store} from "./store/index";

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
      path: "/work/edit",
      name: "edit",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Edit,
      // beforeEnter(to, from, next) {

      //   if (store.getters.user) {
      //     // console.log(store.state.user);
      //     // console.log(store.getters.user);

      //     next();
      //   } else {
      //     next('/login');
      //   }
      // }
    },
    {
      path: "/blogs",
      name: "blogs",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Blogs.vue")
    }
    ,
    {
      path: "/blogs/new",
      name: "new-blog",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/Blog/AddBlog.vue")
    }
    ,
    {
      path: "/blogs/:id",
      name: "blogs-post",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/Blog/BlogPost.vue")
      
    }
    ,
    {
      path: "/blogs/:id/edit",
      name: "blogs-post-edit",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/Blog/BlogPostEdit.vue")
      
    },
    {
      path: "/user",
      name: "user",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/User.vue")
      
    }
    
    ,
    {
      path: "/admin",
      name: "admin",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Admin,
      beforeEnter(to, from, next) {

        if (store.getters.user) {
          // console.log(store.state.user);
          // console.log(store.getters.user);

          next();
        } else {
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
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login.vue")
    }
    ,
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' },
  ]
});
