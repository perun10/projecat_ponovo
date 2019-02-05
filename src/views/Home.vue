<template>
  <div class="container-fluid" >
    <div id="banner" class="row no-gutters justify-content-center"><div class="col"> 
    <img class="img" alt="Vue overlayImg" src="../assets/images/slider-overimage.svg"> </div>  
    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {
   
  }
};
</script>
<style>
#banner{
    background:#2ecc71 url("../assets/images/sunburst.png") no-repeat;
    background-size:cover;   
    width:100%;
    min-height:32.8125rem;
}
.container-fluid{
  padding: 0;
}
.img{
  
}
</style>
