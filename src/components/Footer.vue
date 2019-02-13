<template>
  <footer class="footer mt-3">
      <div class="container">
          <div class="row no-gutters justify-content-between pt-3">
          <div class="col-md-6 col-sm-12 text-left pl-0">COPYRIGHT 2013 DISPLAY.ALL RIGHTS RESERVED</div>
          <div class="col-md-6 col-sm-12 text-right">
              <div id="footer-menu" >
                    <router-link to="/">Home</router-link> / &nbsp;
                    <router-link to="/about">About</router-link> /&nbsp;
                    <router-link to="/work"> Work</router-link> / &nbsp;
                    <router-link to="/contact"> Contact</router-link> 
              </div>
              </div>
              </div>
      </div>
  </footer>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style>
html{
    min-height: 100%;
    position: relative;
}
body{
   
}
.footer{
    bottom: 0;
    width: 100%;
    position: absolute;
    height: 60px;
    background-color: #f5f5f5;
}
#footer-menu a{
   color: #8a8888;
    margin-right:10px;
}
</style>
