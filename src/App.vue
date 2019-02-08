<template>
  <div id="app">
    <header class="container constainer-fluid" style="margin-top:30px;padding-bottom:13px;">
      <div class="row no-gutters">
      <section class="col-md-12 col no-border">
      <div class="row no-gutters justify-content-between" >
        <div id="logo" class="col-md-6 col text-left">
        <img src="@/assets/images/logo.svg" alt="Logo">
      </div>
      
        <Social classForMobile="none" id="mobile-none"/>
        
      </div>
      </section>
      <section class="col-md-12 col">
      <nav class="navbar navbar-expand-sm navbar-light pl-0 mt-4">
  <button class="navbar-toggler collapsed ml-5" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link class="nav-link pl-0 mr-3" to="/">Home<span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
                  <router-link class="nav-link pl-0" to="/about">About</router-link> 
               
      </li>
      <li class="nav-item">
                  <router-link class="nav-link pl-0" to="/work">Work</router-link> 
               
      </li>
      <li class="nav-item">
                  <router-link class="nav-link pl-0" to="/contact">Contact</router-link> 
               
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

@media screen and (max-width: 480px) {
 #mobile-none{
   display: none;
 }
 .no-border{
   border-bottom:0px;
 }
}
/*FONTS*/


/* @font-face {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: normal;
    src: local('Helvetica'), url('../src/assets/fonts/Helvetica.woff') format('woff');
    }


    @font-face {
    font-family: 'Helvetica Oblique';
    font-style: normal;
    font-weight: normal;
    src: local('Helvetica Oblique'), url('../src/assets/fonts/Helvetica-Oblique.woff') format('woff');
    }


    @font-face {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: normal;
    src: local('Helvetica'), url('../src/assets/fonts/Helvetica-Bold.woff') format('woff');
    }


    @font-face {
    font-family: 'Helvetica Bold Oblique';
    font-style: normal;
    font-weight: normal;
    src: local('Helvetica Bold Oblique'), url('../src/assets/fonts/Helvetica-BoldOblique.woff') format('woff');
    } */
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


/*CSS HAMBURGER*****************************************************/
a
{
  color: #8a8888;
  text-decoration: none; 
  transition: color 0.3s ease;
  
}

a:hover
{
  color: #42b983;
}

#menuToggle
{
  display: block;
  position: relative;
 
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: #cdcdcd;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu
{
  position: absolute;
  width: 100vh;
  margin: -100px 0 0 -200px;
  padding: 50px;
  height: 100vh;
  
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */  
  transform-origin: 0% 0%;
  transform: translate(-200%, 0);  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}
#menu a {
  display: block;
  margin-left: -300px;
}
#menu li
{
  padding: 10px 0;
  font-size: 22px;
  text-align: left;
}

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ ul
{
  transform: none;
}
/*CSSS HAMBURGER ENDDD***************************************************/
</style>
<script>
import Social from "@/components/Social.vue";
import Footer from "@/components/Footer.vue";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

export default {

  components:{
    Social,
    Footer
  }
  
}
</script>
