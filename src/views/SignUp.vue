<template>
<div>
    <Top title="Registration"/>
    <div class="container mt-5">
        <div class="row no-gutters">
 
          <div class="col-md-12">

            <Register/>

          </div>

            
        </div>
        
    </div>
    </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Register from "@/components/Register.vue";
export default {
components:{
    Top,
    Register,    
},
computed: {
     user() {
       return this.$store.getters.user
     }
   },
   watch: {
     user(value) {
       if(value !== null && value !== undefined){
         this.$router.push("/admin");
       }
     }
   },

}
</script>

<style>

</style>
