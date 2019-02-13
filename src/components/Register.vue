<template>
    <div class="col-md-6 col">
        <h3>Sign up</h3>
<form @submit.prevent="register">
    <div class="form-group row mt-3">
  <div class="col-sm-10">
      <input v-model="form.name" type="text" class="form-control instyle" placeholder="Name" required>
  </div>
  </div>
   <div class="form-group row">
  <div class="col-sm-10">
      <input v-model="form.username" type="text" class="form-control instyle" placeholder="Username" required>
  </div>
  </div>
  <div class="form-group row">
  <div class="col-sm-10">
    <input v-model="form.email" type="email" class="form-control instyle"  id="exampleFormControlInput1" placeholder="Email Address" required>
  </div>
  </div>
   <div class="form-group row">
    <div class="col-sm-10">
    <input v-model="form.password" type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
    </div>
    <div class="form-group row">
        <button type="submit" class="btn btn-success" style="background-color:#2ecc71;border-color:#2ecc71;margin:0 auto;">Register</button>
    </div>
    </form>
    </div>
</template>

<script>
export default {
    name:"Register",
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
           this.$store.dispatch('createUser',this.form)
           .then(()=>alert("Congratulations !!"));
        }
    },
    created(){
        this.$emit('ready');
    }
}
</script>

<style>

</style>
