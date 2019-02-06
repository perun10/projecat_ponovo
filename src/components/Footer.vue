<template>
  <footer class="navbar bottom footer mt-3">
      <div class="container">
          <div class="row no-gutters">
          <div class="col text-left">COPYRIGHT 2013 DISPLAY.ALL RIGHTS RESERVED</div>
          <div class="col">
              <div id="footer-menu" class="text-right">
                    <router-link to="/">Home</router-link> /
                    <router-link to="/about">About</router-link> /
                    <router-link to="/work">Work</router-link> /
                    <router-link to="/contact">Contact</router-link>
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
.footer{
    
    width: 100%;
    height: 63px;
    line-height: 18px;
    background-color: #efefef;
    font-size:12px;
    color:#a5a5a5;
}
#footer-menu a{
    margin-right:20px;
}
</style>
