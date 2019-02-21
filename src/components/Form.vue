<template>
    <div class="container">
       <form class="col-md-6 mt-5 pl-0 text-left mb-3" @submit.prevent="sendMail">
           <h3>Contact form</h3>
           <p class="text-left">Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. </p>
  <div class="form-group">
      <input type="text" v-model="form.name" class="form-control instyle" placeholder="Name" required>
  </div>
  <div class="form-group">  
    <input type="email" v-model="form.email" class="form-control instyle"  id="exampleFormControlInput1" placeholder="Email Address" required>
  </div>
   <div class="form-group">
      <input type="text" v-model="form.subject" class="form-control instyle"  placeholder="Subject" required>
  </div>
  <div class="form-group">    
    <textarea class="form-control form-control-lg  texta" v-model="form.message" id="exampleFormControlTextarea1" rows="3" cols="8"></textarea>
  </div>
 <button type="submit" class="btn btn-success" style="background-color:#2ecc71;border-color:#2ecc71;">Send message</button>
   <!--<div class="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>-->
</form>
    </div>
</template>

<script>
export default {
 name:"Form",
 data(){
   return{
     form:{
       name:null,
      email:null,
       subject:null,
       message:null
     },
   }
 },
 methods:{
  sendMail(){
    // this.fromAddresses.push({
    //   name: this.form.email,
    //   address:this.form.email
    // }),
    // this.mail.subject = this.form.subject
    // this.mail.message = this.form.message;

    // console.log(this.form.name+","+this.form.email+","+this.form.subject+","+this.form.message)
     this.$store.dispatch("send",{name:this.form.name, email:this.form.email ,subject:this.form.subject, message:this.form.message})
    //console.log(this.fromAddresses.name, this.fromAddresses.address , this.mail.subject , this.mail.message)
  }
  
 }
}
</script>

<style>
 .instyle {
    width:60%;
    border:1px solid #8a8888;
    border-radius:0;
 }
 .texta {
   border:1px solid #8a8888;
   border-radius:0;
 }
</style>
