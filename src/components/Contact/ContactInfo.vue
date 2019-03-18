<template>
    <div class="col-md-4 mt-5 pl-0 text-left mb-3">
          <div>
          <h3>Contact form</h3>
           <p class="text-left">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit velit justo.</p>
           <p class="text-left"><label>email: </label><a :style="{color:this.$store.getters.color}" href="mailto:info@display.com?subject=Mail from Our Site">info@display.com</a><br/>
           <label>phone: </label><a style="color:#8a8888;" href="tel:1.306.222.4545">1.306.222.4545</a></p>
          
           <p class="text-left">222 2nd Ave South</p>
           <p class="text-left">Saskabush, SK   S7M 1T6</p>
           </div>
           <div>
          <h3>STORE HOURS</h3>
          <div class="row no-gutters justify-content-between"><p class="text-left mr-0">Monday - Thursday</p> <p>8 am - 5 pm</p></div>
          
           <div class="row no-gutters justify-content-between"><p class="text-left">Friday</p> <p>8 am - 6 pm</p></div>
           <div class="row no-gutters justify-content-between"><p class="text-left">Saturday</p> <p>9 am - 5 pm</p></div>
           <div class="row no-gutters justify-content-between"><p class="text-left">Sunday & Holidays</p> <p>Closed</p></div>
           </div>
    </div>
</template>

<script>
export default {

    data(){
        return{
            mailAdr : null,
            mailSub : null,
            description : null,
            phone:null,
            city : null,
            cityAdr:null
        }
    },
    mounted(){

    }

}
</script>

<style>
h3{
    text-transform: uppercase;
}
</style>
