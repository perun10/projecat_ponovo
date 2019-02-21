<template>
    <div class="container colorize">
        <div class="row no-gutters">
            <div class="col-md-12 col-xs-12 text-right">
                <a class="login-register" v-if="!user" href="/signup">Sign In</a>
                <a class="login-register" v-if="!user" href="/signup">Register</a>
                <a class="login-register" v-if="user" href="/signup" @click.prevent="$store.dispatch('logout')">Log out</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "Header",
    data(){
        return{

        }
    },computed: {
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
   }
}
</script>

<style>
.login-register{
    color:#888A88;
    text-decoration:none;
    padding-right: 10px;
}
.colorize{
}
</style>
