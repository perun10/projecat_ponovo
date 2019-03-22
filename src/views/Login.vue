<template>
<div>
    <Top title="Login in"/>
    <div class="row no-gutters">
        <div class="col-md-12">
            <SignIn/>
        </div>
    </div>
</div>
</template>

<script>
import Top from "@/components/Common/Top.vue";
import SignIn from "@/components/Login/SignIn.vue";
export default {
 name:"Login",
 components:{
     Top,
     SignIn
 }
}
</script>

<style>

</style>
