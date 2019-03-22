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
<<<<<<< HEAD
import Top from "@/components/Common/Top.vue";
=======
import Top from "@/components/Top.vue";
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
import Register from "@/components/Register/Register.vue";
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
