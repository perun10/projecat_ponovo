<template>
    <div class="col-md-12 col-12">
        <h3>Sign in</h3>
<form @submit.prevent="signin">
       
  <div class="form-group row">
  <div class="col-sm-12 ">
    <input v-model="form.email" type="email" class="form-control instyle"  id="exampleFormControlInput2" placeholder="Email Address" required>
  </div>
  </div>
   <div class="form-group row">
    <div class="col-sm-12">
    <input v-model="form.password" type="password" class="form-control" id="inputPassword2" placeholder="Password">
    </div>
    </div>
    <div class="form-group row">
        <div class="col-sm-12">
        <!-- <button type="submit" class="btn btn-success" style="background-color:#2ecc71;border-color:#2ecc71;margin:0 auto;">Sign in</button> -->
        <Button text="Sign in" :onClick="signin" />
        </div>
    </div>
    </form>
    </div>
</template>

<script>
import Button from "@/components/Common/Button.vue";

export default {
    name:"Signin",
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
    },
    methods:{
        signin(){
              this.$store.dispatch("signInUser",{email:this.form.email,password:this.form.password})
            
             
        }
    },
    computed:{
        user(){
            return this.$store.getters.user;
        }
    },
    created(){
        this.$emit('ready');
    }
}
</script>

<style>

</style>
