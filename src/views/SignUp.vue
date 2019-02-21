<template>
<div>
    <Top title="Registration"/>
    <div class="container mt-5">
        <div class="row no-gutters">
 
          

            <Register/>
              <SignIn/>
        </div>
        
    </div>
    </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Register from "@/components/Register.vue";
import SignIn from "@/components/SignIn.vue";

import Social from "@/components/Social.vue";
export default {
components:{
    Top,
    Social,
    Register,
    SignIn
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
