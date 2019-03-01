<template>
    
       <form class="col-md-7 mt-5 pl-0 text-left mb-3" @submit.prevent="sendMail">
           <h3>Contact form</h3>
           <p class="text-left">Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. </p>
  
      <input type="text" v-model="form.name"  placeholder="Name" required>
 
  
    <input type="email" v-model="form.email" id="exampleFormControlInput1" placeholder="Email Address" required>
  
   
      <input type="text" v-model="form.subject"  placeholder="Subject" required>
  
     
    <textarea maxlength="100" v-model="form.message" id="exampleFormControlTextarea1" rows="3" cols="8"></textarea>
  
 <!-- <button  type="submit" class="btn btn-success wid" style="background-color:#2ecc71;border-color:#2ecc71;">Send message</button> -->
    <Button id="sendMailbtn" class="wid" text="Send message" :onClick="sendMail"/>
 
  <vue-recaptcha :sitekey="siteKey" @verify="onVerify"></vue-recaptcha>
   <!--<div class="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>-->
</form>
    
</template>

<script>
 import  VueReCaptcha from "vue-recaptcha"
 import Button from "../components/Button.vue";
export default {
 name:"Form",
 components:{
   "vue-recaptcha":VueReCaptcha,
   Button
 },
 data(){
   return{
     form:{
       name:null,
      email:null,
       subject:null,
       message:null       
     },
     siteKey:process.env.VUE_APP_RECAPT_SITE_KEY,
     mailBtn:null
   }
 
 }, 
 mounted(){
   this.mailBtn = document.getElementById('sendMailbtn')
   this.mailBtn.disabled = true
 },
 methods:{
  sendMail(){
    
     this.$store.dispatch("send",{name:this.form.name, email:this.form.email ,subject:this.form.subject, message:this.form.message})
    //console.log(this.fromAddresses.name, this.fromAddresses.address , this.mail.subject , this.mail.message)
  },
  onVerify() {
       this.mailBtn.disabled = false;
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
 form{
   display: grid;
   grid-template-rows: auto auto auto auto auto auto auto auto;
   gap:15px;
 }
 textarea{
   width: 560px;
   height: 221px;
   border: 2px solid #8a8888;
   resize: none;
 }
 input{
   height: 45px;
   width: 350px;
   border: 2px solid #8a8888;
 }
 ::placeholder{
  font-family: 'Helvetica', Arial, sans-serif;
  color:#989898;
  padding-left: 15px;
  padding-bottom: 15px;
  padding-top: 15px;
 }
 .wid{
   width: 140px;
 }
 @media screen and (max-width: 600px) {
 textarea{
    height:auto;
   width: 100%;
 }
 input{
     height:auto;
   width: 100%;
 }
 }
</style>
