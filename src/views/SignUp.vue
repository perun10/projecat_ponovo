<template>
<div>
    <Top title="Registration"/>
    <div class="container mt-5">
        <div class="row no-gutters">

          

            <Register/>
              <div class="col-md-6">
                <h3>Sign in</h3>
            </div>
        </div>
        
    </div>
    </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Register from "@/components/Register.vue";

import Social from "@/components/Social.vue";
export default {
components:{
    Top,
    Social,
    Register
}
}
</script>

<style>

</style>
