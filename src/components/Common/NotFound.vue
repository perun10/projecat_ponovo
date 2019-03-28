<template>
  <div>
    <Top title="Page not found"/>
    <div
    style="background:url('https://media.disquscdn.com/errors/img/1.gif')no-repeat center;background-size:cover;height:100vh;position:relative;"
  >
    <!-- <H1 style="color:gold">PAGE NOT FOUND</H1> -->
    <div class="error-content">
      <h1>Uh oh... Something didn't work.</h1>
      <p>
        This page doesn't seem to exist. You might have followed a bad link or mistyped the address, feel free to try again. Alternatively, you can
        return to the <router-link to="/">home page</router-link>.
      </p>
    </div>
  </div>
  <Bottom/>
  </div>
</template>

<script>
import Top from "@/components/Common/Top.vue"
import Bottom from "@/components/Common/Bottom.vue"
export default {
  components: {
    Top,
    Bottom
  }
};
</script>

<style scoped>
body{
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
}

.error-content {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 24px;
  color: #55595d;
  width: 500px;
  position:absolute;
  top:15%;
  left:35%;
  background: rgba(255, 255, 255, 0.8);
  padding: 30px 40px;
}
</style>
