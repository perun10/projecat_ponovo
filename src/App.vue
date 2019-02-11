<template>
  <div id="app">
    <header class="container constainer-fluid" style="margin-top:30px;padding-bottom:13px;">
      <div class="row no-gutters">
      <section class="col-md-12 col no-border">
      <div class="row no-gutters justify-content-between" >
        <div id="logo" class="col-md-6 col text-left">
        <img :src="logo.img" :alt="logo.alt">
        
      </div>
    
        <Social classForMobile="none" id="mobile-none"/>
        
      </div>
      </section>
      <section class="col-md-12 col" >
      <nav class="navbar navbar-expand-sm navbar-light pl-0 mt4">
  <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active" v-for="m in menu" :key="m.index" style="padding-left:40px">
        <router-link class="nav-link pl-0" :to="m.link">{{m.text}}<span class="sr-only">(current)</span></router-link>
      </li>      
      <li class="nav-item">
        <router-link class="nav-link" to="/contact"><Social classForMobile="mobile"/></router-link>               
      </li>

    </ul>
  </div>
</nav>
    </section></div>
    </header>
    
    <router-view />
   <Footer/>
  </div>
</template>

<style>
 @font-face {
    font-family: 'NoveCentoSansWide';
    src: url('../src/assets/fonts/NoveCentoSansWide.ttf'); /* IE9 Compat Modes */
    }
.red{
  background-color: red;
}

.no-border{
  border-bottom:1px solid #dadada;
}
#mobile-nav{
  display: none;
}

.mt4{
  margin-top:1.5rem;
}
@media screen and (max-width: 480px) {
 #mobile-none{
   display: none;
 }
 .no-border{
   border-bottom:0px;
 }
 .navbar{
   display:inline-block !important;
   margin-top:0;
   padding: 0;
 }
 .navbar .navbar-expand-sm{
  
  margin-top: -2.5rem;
 }
 
}
    /*APP DEFAULT SETTINGS*/
#app {
  font-family: 'Helvetica', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #8a8888;
   font-size: 0.875rem;
   line-height: 1.375rem;
}
h1,h2,h3,h4,h5{
 font-family: 'NoveCentoSansWide',"Arial",sans-serif;
}
p{
  font-family: 'Helvetica', Arial, sans-serif;
}
.container{
  max-width: 970px;
}
#navbarNavDropdown a {
  font-size: 1.125rem;
  line-height: 1.125rem;
  margin-right: 2.75rem;
  font-weight: bold;
  color: #8a8888;
  display:grid;
  grid-template-columns: auto auto auto auto;
}

#navbarNavDropdown a.router-link-exact-active {
  color: #42b983;
}

</style>
<script>
import image1 from "@/assets/images/logo.svg";
import Social from "@/components/Social.vue";
import Footer from "@/components/Footer.vue";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue);

export default {
data(){
  
  return{
   logo : null,
   menu : null,
  }
},
  components:{
    Social,
    Footer
  },
  created(){
    
    axios
    .get('https://project-ponovo.firebaseio.com/logo.json')
    .then(response =>(this.logo=response.data))
  

    axios
    .get('https://project-ponovo.firebaseio.com/pages.json')
    .then(response =>(this.menu=response.data))
  },
  
}
</script>
