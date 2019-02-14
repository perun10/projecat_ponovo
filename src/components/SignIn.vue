<template>
    <div class="col-md-6 col">
        <h3>Sign in</h3>
<form @submit.prevent="signin">
       
  <div class="form-group row">
  <div class="col-sm-10 mt-5">
    <input v-model="form.email" type="email" class="form-control instyle"  id="exampleFormControlInput2" placeholder="Email Address" required>
  </div>
  </div>
   <div class="form-group row">
    <div class="col-sm-10">
    <input v-model="form.password" type="password" class="form-control" id="inputPassword2" placeholder="Password">
    </div>
    </div>
    <div class="form-group row">
        <button type="submit" class="btn btn-success" style="background-color:#2ecc71;border-color:#2ecc71;margin:0 auto;">Sign in</button>
    </div>
    </form>
    </div>
</template>

<script>
export default {
    name:"Signin",
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
              this.$store.dispatch("signInUser",this.form)
            .then((user)=> this.user = firebase.auth().currentUser , alert('USER : '+this.user+" created")) 
             
        }
    },
    created(){
        this.$emit('ready');
    }
}
</script>

<style>

</style>
