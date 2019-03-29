<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <Header/>
    
    <header class="container constainer-fluid" style="margin-top:30px;padding-bottom:13px;">
      <div class="row no-gutters">
        <section class="col-md-12 col-2 no-border">
          <div class="row no-gutters justify-content-between">
            <div id="logo" class="col-md-6 col text-left">
              <img :src="this.$store.getters.logo" alt="alt">
            </div>
            <Social classForMobile="none" id="mobile-none"/>
          </div>
        </section>
        <section class="col-md-12 col-8 text-right">
          <nav class="navbar navbar-expand-sm navbar-light pl-0 mt4">
            <button
              class="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul id="nivmobi" class="navbar-nav">
                <li class="nav-item active" v-for="m in menu" :key="m.index" >
                  <router-link class="nav-link pl-0" :to="m.link">
                    <!-- :style="'.router-link-active' ? {'color':'red'}: {'color':'blue'}" -->
                    {{m.text}}
                    <span class="sr-only">(current)</span>
                  </router-link>
                </li>
                <router-link class="nav-link pl-0" to="/blogs">Blog
                  <span class="sr-only">(current)</span>
                </router-link>
                <router-link class="nav-link pl-0" to="/admin" v-if="user">Admin
                  <span class="sr-only">(current)</span>
                </router-link>
                <li class="nav-item">
                  <Social classForMobile="mobile"/>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </div>
    </header>
    <router-view/>
    <Footer/>
  </div>
</template>
<style>
@font-face {
  font-family: "NoveCentoSansWide";
  src: url("../src/assets/fonts/NoveCentoSansWide.ttf"); /* IE9 Compat Modes */
}

.no-border {
  border-bottom: 1px solid #dadada;
}
#mobile-nav {
  display: none;
}

.mt4 {
  margin-top: 1.5rem;
}
@media screen and (max-width: 480px) {
  #mobile-none {
    display: none;
  }
  .no-border {
    border-bottom: 0px;
  }
  .navbar {
    display: inline-block !important;
    margin-top: 0;
    padding: 0;
  }
  .navbar .navbar-expand-sm {
    margin-top: -2.5rem;
  }
}
/*APP DEFAULT SETTINGS*/
#app {
  font-family: "Helvetica", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #8a8888;
  font-size: 0.875rem;
  line-height: 1.375rem;
}
h1,
h2,
h3,
h4,
h5 {
  font-family: "NoveCentoSansWide", "Arial", sans-serif;
}
p {
  font-family: "Helvetica", Arial, sans-serif;
}
.container {
  max-width: 970px;
}
#navbarNavDropdown a {
  font-size: 1.125rem;
  line-height: 1.125rem;
  margin-right: 1.25rem;
  font-weight: bold;
  color: #8a8888;
  display: grid;
  grid-template-columns: auto auto auto auto;
  text-transform: uppercase;
}
#navbarNavDropdown .router-link-exact-active {
  
} 
@import'~bootstrap/dist/css/bootstrap.css';
</style>
<script>
import Header from "@/components/Common/Header.vue";
import Social from "@/components/Common/Social.vue";
import Footer from "@/components/Common/Footer.vue";
import Vue from "vue";
import 'slick-carousel/slick/slick.css';
// import "bootstrap/dist/css/bootstrap.css";
// import'~bootstrap/dist/css/bootstrap.css'

import axios from "axios";
import VueAxios from "vue-axios";
import firebase from "firebase";
Vue.use(VueAxios, axios);
// import Icon from 'vue-awesome/components/Icon'

//var $ = require("jquery");
/**JQUERY IMPORT VERY IMPORTANT !!!!!!! */
//window.JQuery = $;
//require("jquery.backstretch");
/** JQUERY IMPORT VERY IMPORTANT !!!!!!!*/
/**$('.navbar-nav>li>a').on('click', function(){
    alert('HI');
}); */

export default {
  data() {
    return {
     override:{
       color:'red !important'
     },
     
      menu: null,
      alt: null,
      bgcolor: null,
      tcolor: null,
      thisUser : null
    };
  },
  components: {
    Social,
    Footer,
    Header,
    
  },
  created() {
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
      
    })
    this.onLoad();
    axios
      .get("https://project-ponovo.firebaseio.com/pages.json")
      .then(response => (this.menu = response.data));
  },  
  mounted(){
    this.$Progress.finish()
   
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    logo(){
      return this.$store.getters.logo
    },
    getEmail(){
      return this.$store.getters.getEmail
    },
    authors(){
      return this.$store.getters.getAuthor
    }
  },
  watch: {
    user(value) {
      if (value.id !== null && value.id !== undefined) {        
        this.thisUser = true
        return this.thisUser
      }      
    }    
  },
  methods: {
    onLoad() {
      this.$store.dispatch("getLogo", this.logo);      
    },
  }
};
</script>
