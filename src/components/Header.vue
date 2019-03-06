<template>
    <div class="container colorize">
        <div class="row no-gutters">
          <div class="col-md-1 col-xs-12 text-left">
                <div class="profile" v-if="user">
                  
                </div>
                <span v-if="user">Admin</span>
               

          </div>
            <div class="col-md-11 col-xs-12 text-right">

                <a class="login-register" v-if="!user" href="/login">Sign In</a>
                <a class="login-register" v-if="!user" href="/signup">Register</a>
                <a class="login-register" v-if="user" href="/signup" @click.prevent="$store.dispatch('logout')">Log out</a>
                <!-- <a href="">{{thisUser}}</a> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "Header",
    data(){
        return{
          thisUser:null
        }
    },  
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  watch: {
    user(value) {
      // console.log(value.id)
      if (value.id !== null && value.id !== undefined) {        
        this.thisUser = true
        return this.thisUser
      }      
    }    
  }
  //   },computed: {
  //    user() {
  //      return this.$store.getters.user
  //    }
  //  },
  //  watch: {
  //    user(value) {
  //      if(value !== null && value !== undefined){         
  //        this.$router.push("/admin");       
  //      }           
  //    }
  //  }
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
.profile{
  height: 35px;
  width: 35px;
  background: url('https://yt3.ggpht.com/-lZ75lPdnwWs/AAAAAAAAAAI/AAAAAAAAAAA/dEJ6vAV5zdM/s88-c-k-no-mo-rj-c0xffffff/photo.jpg') center no-repeat;
  background-size:cover; 
  border-radius:50%;
}
</style>
