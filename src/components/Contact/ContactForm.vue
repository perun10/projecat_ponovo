<template>

<!-- <form @submit.prevent="submit">
  <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
    <label class="form__label">Name</label>
    <input class="form__input" v-model.trim="$v.name.$model"/>
  </div>
  <div class="error" v-if="!$v.name.required">Name is required</div>
  <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
  <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
  <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
  <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
  <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
</form> -->
  <form class="col-md-7 mt-5 pl-0 text-left mb-3" @submit.prevent="">
    <h3>Contact form</h3>
    <p
      class="text-left"
    >Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam.</p>
    
    <input type="text" v-model.trim="$v.name.$model" placeholder="Name">
    <div class="error" v-if="!$v.name.required">Name is required</div>
    <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>  
    
    <input
      type="email"
      v-model.trim="$v.email.$model"
      id="exampleFormControlInput1"
      placeholder="Email Address"      
    >
    <div class="error" v-if="!$v.email.required">Email is required</div>
    <div class="error" v-if="$v.email.$error">Wrong format of email </div>  
    
    <input type="text" v-model.trim="$v.subject.$model" placeholder="Subject">
    <div class="error" v-if="!$v.subject.required">Subject is required</div>
    <div class="error" v-if="!$v.subject.minLength">Subject must have at least {{$v.subject.$params.minLength.min}} letters.</div>  

    <textarea      
      v-model.trim="$v.message.$model"
      id="exampleFormControlTextarea1"
      rows="3"
      cols="8"
    ></textarea>
    <div class="error" v-if="!$v.message.required">Message is required</div>
    <div class="error" v-if="!$v.message.minLength">Message must have at least {{$v.message.$params.minLength.min}} letters.</div>  
    <div class="error" v-if="!$v.message.maxLength">Message cant have more than {{$v.message.$params.maxLength.max}} letters.</div>  

    <vue-recaptcha :sitekey="siteKey" @verify="validation" ></vue-recaptcha>
    <!-- <button  type="submit" class="btn btn-success wid" style="background-color:#2ecc71;border-color:#2ecc71;">Send message</button> -->
    <Button id="sendMailbtn" class="wid" text="Send message" :onClick="submit"/>
<!-- @verify="onVerify" -->
    <!--<div class="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
    </div>-->
  </form> 
</template>

<script>
import VueReCaptcha from "vue-recaptcha";
import Button from "../../components/Button.vue";
import { required, minLength, email , maxLength} from 'vuelidate/lib/validators'
import axios from "axios"

export default {
  name: "ContactForm",
  components: {
    "vue-recaptcha": VueReCaptcha,
    Button
  },
  data() {
    return {
       name:"",
       email:"",
       subject:"",
       message:"",
       age: 0,
       submitStatus:null,
      fromdata: {
        name: " ",
        email: " ",
        subject: " ",
        message: " ",
        to: ["djuradj.perunovic@gmail.com"],
       cc: ["djuradj.perunovic@gmail.com"],
      bcc: ["djuradj.perunovic@gmail.com"]
      },
     
    
      siteKey: process.env.VUE_APP_RECAPT_SITE_KEY,
      mailBtn: null
    }
         

      },
   validations:{
        name:{
          required,
          minLength:minLength(4)
        },
        email:{
          required,
          email
        },
        subject:{
          required,
          minLength:minLength(5)         
        },
        message:{
          required,
          minLength:minLength(20),
          maxLength:maxLength(500)         

        }
        
      

      },
  mounted() {
    this.mailBtn = document.getElementById("sendMailbtn");
    this.mailBtn.disabled = true;
  },
  computed:{
    validation(){
      if((this.$v.name.required && this.$v.name.minLength )&&
      (this.$v.email.required && !this.$v.email.$error)&&
      (this.$v.subject.required && this.$v.subject.minLength)&&
      (this.$v.message.required&&this.$v.message.minLength&&this.$v.message.maxLength)){
        //this.mailBtn.disabled = false;
       this.onVerify()
        //var consol = console.log('dugme otkljucano')
        return true
    }else{
    //this.mailBtn.disabled = true;
    //consol = console.log("greska")
    return false
    }
   // this.mailBtn.disabled = true;
    }
  
  },
  methods: {
    submit() {
      //   (!this.$v.email.required) && 
      //  (!this.$v.subject.required || !this.$v.subject.minLength) && 
      // (!this.$v.message.required || !this.$v.message.minLength
      //console.log(this.$v.email.required +" "+ !this.$v.email.$error)
      // if((this.$v.name.required && this.$v.name.minLength )&&
      // (this.$v.email.required && !this.$v.email.$error)&&
      // (this.$v.subject.required && this.$v.subject.minLength)&&
      // (this.$v.message.required&&this.$v.message.minLength&&this.$v.message.maxLength)){
     // console.log("Dobar unos  " + this.$v.name.$model + ", mail : "+this.$v.email.$model+", Subject: "+this.$v.subject.$model+", Message: "+this.$v.message.$model)
       this.fromdata.name = this.$v.name.$model
       this.fromdata.email = this.$v.email.$model
       this.fromdata.subject = this.$v.subject.$model
       this.fromdata.message = this.$v.message.$model
       console.log(this.fromdata)
       
       axios.post('api/EmailService/Send',
      JSON.stringify(this.fromdata),{
          headers: {   
            'Content-Type':'application/json'
            }
        })
        .then(function (response) {
          console.log(response)
        })
        .catch((err)=>{
          console.log(err)
        })
      // }else{
      // console.log('GRESKA')

      // }
      // this.$v.$touch()
      // if(this.$v.$invalid){
      //   this.submitStatus = "ERROR"
      // }else{
      //   this.submitStatus = "PENDING"
      //   setTimeout(()=>{
      //     this.submitStatus = "OK"
      //   },500)
      // }
     // console.log(this.name)
    
     
      //console.log(this.form.name, this.form.email , this.form.subject , this.form.message)
    },
    onVerify() {
      this.mailBtn.disabled = false;
    }
  }
};
</script>

<style>
.instyle {
  width: 60%;
  border: 1px solid #8a8888;
  border-radius: 0;
}
.texta {
  border: 1px solid #8a8888;
  border-radius: 0;
}
form {
  display: grid;
  grid-template-rows: auto auto auto auto auto auto auto auto;
  gap: 15px;
}
textarea {
  width: 560px;
  height: 221px;
  border: 2px solid #8a8888;
  resize: none;
}
input {
  height: 45px;
  width: 350px;
  border: 2px solid #8a8888;
  padding-left:15px;
}
::placeholder {
  font-family: "Helvetica", Arial, sans-serif;
  color: #989898;
  padding-left: 15px;
  padding-bottom: 15px;
  padding-top: 15px;
}
.wid {
  width: 140px;
}
.error{
  color:red;
}
@media screen and (max-width: 600px) {
  textarea {
    height: auto;
    width: 100%;
  }
  input {
    height: auto;
    width: 100%;
  }
}
</style>
