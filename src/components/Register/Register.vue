<template>
    <div class="col-md-12 col-12">
        <h3>Register your account</h3>
<form @submit.prevent="register">
    <div class="form-group row">
      
    </div>    
  <div class="form-group row">
  <div class="col-sm-12">
    <input v-model="form.email" type="email" class="form-control instyle"  id="exampleFormControlInput1" placeholder="Email Address" required>
  </div>
  </div>
   <div class="form-group row">
    <div class="col-sm-12">
    <input v-model="form.password" type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
    </div>
    <div class="form-group row">
        <!-- <button type="submit" class="btn btn-success" style="background-color:#2ecc71;border-color:#2ecc71;margin:0 auto;">Register</button> -->
        <Button text="Register" :onClick="register"/>

    </div>
    </form>
    </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
    name:"Register",
    components:{
       Button 
    },
    data(){
        return{
            form:{
                name:null,
                username:null,
                email:null,
                password:null
            }
        }
    },methods:{
        register(){
            this.$store.dispatch("createUser",this.form)
           
           
        }
    },
    created(){
        this.$emit('ready');
    }
}
</script>

<style>

</style>
