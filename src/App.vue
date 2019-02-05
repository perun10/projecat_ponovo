<template>
  <div id="app">
    <header class="container" style="margin-top:30px;">
      <div class="row justify-content-between" >
        <div id="logo" class="col text-left">
        <img src="@/assets/images/logo.svg" alt="Logo">
      </div>
        <Social id="mobile-none"/>
        <div id="mobile-nav"  class="col text-right">
         
<nav role="navigation">
  <div id="menuToggle">
    
    <input type="checkbox" />  
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
     <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
       <router-link to="/work">Work</router-link> 
      <router-link to="/contact">Contact</router-link>
    </ul>
  </div>
</nav>
        </div>
      </div>
      <div id="hr" class="row no-gutters">
        
      </div>
      
      <div  class="row no-gutters">
        <div id="nav-desktop" class="text-left">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
       <router-link to="/work">Work</router-link> 
      <router-link to="/contact">Contact</router-link></div>
    </div></header>
    
    <router-view />
    <Footer/>
  </div>
</template>

<style>

#hr{
  margin-top:1.875rem;
  border-bottom: 1px solid #8a8888;
  margin-bottom: 1.875rem;
}

#mobile-nav{
  display: none;
}

@media screen and (max-width: 480px) {
 #mobile-none{
   display: none;
 }
 #mobile-nav{
   display: block;
   margin-top:-30px;
   margin-left: 40px;
 }
 #nav-desktop{
   display: none;
 }
}
/*FONTS*/


@font-face {
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
    }
    /*APP DEFAULT SETTINGS*/
#app {
  font-family: 'Helvetica', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #8a8888;
}
.container{
  max-width: 970px;
}

#nav-desktop {
}

#nav-desktop a {
  display: inline !important;
  font-size: 1.125rem;
  line-height: 1.125rem;
  margin-right: 2.75rem;
  font-weight: bold;
  color: #8a8888;
  display:grid;
  grid-template-columns: auto auto auto auto;
}

#nav-desktop a.router-link-exact-active {
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
  top: 50px;
  left: 50px;
  
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
  width: 300px;
  margin: -100px 0 0 -180px;
  padding: 50px;
  padding-top: 125px;
  
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
}
#menu li
{
  padding: 10px 0;
  font-size: 22px;
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
