<template>
  <div class="container colorize">
    <div class="row no-gutters">
      <div class="col-md-1 col-xs-12 text-left">
        <!-- <router-link to="/user"> -->
          <div class="profile" v-if="user"></div>
        <!-- </router-link> -->
        <span v-if="user">{{user.given_name}}</span>
        <!-- <p v-else>Admin</p>                -->
      </div>
      <div class="col-md-11 col-xs-12 text-right">
        <select
    class="LanguageSwitcher"
    name="language"
    @change="changeLanguage"
  >
    <option
      v-for="lang in langs"
      :key="lang"
      :selected="isCurrentLanguage(lang)"
      :class="{ 'is-selected': isCurrentLanguage(lang) }"
      :value="lang"
    >
      {{lang}}
    </option>
  </select>
            <h1 v-t="'message'"></h1>
        <a class="login-register" id="signin" v-if="!user" href="#" @click="login()"><span v-t="'login'"></span></a>
        <a
          class="login-register"
          id="signin"
          v-if="!user"
          href="#"
          @click="loginPopup()"
        ><span v-t="'loginPopup'"></span></a> 
        <!-- <a class="login-register" id="signin" v-if="!user" href="#" @click="logout()">Logout</a> -->
        <!-- <a class="login-register" id="signin"  href="#" @click="test()">Test</a> -->
        <!-- <a class="login-register" v-if="!user" href="/signup">Register</a> -->
        <a class="login-register" v-if="user" href="/signup" @click.prevent="logout()">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 320.002 320.002"
            style="enable-background:new 0 0 320.002 320.002;"
            xml:space="preserve"
          >
            <g id="XMLID_6_">
              <path
                id="XMLID_7_"
                d="M51.213,175.001h173.785c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15H51.213l19.394-19.394
		c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0L4.396,149.393c-0.351,0.351-0.683,0.719-0.997,1.103
		c-0.137,0.167-0.256,0.344-0.385,0.515c-0.165,0.22-0.335,0.435-0.488,0.664c-0.14,0.209-0.261,0.426-0.389,0.64
		c-0.123,0.206-0.252,0.407-0.365,0.619c-0.118,0.22-0.217,0.446-0.323,0.67c-0.104,0.219-0.213,0.435-0.306,0.659
		c-0.09,0.219-0.164,0.442-0.243,0.664c-0.087,0.24-0.179,0.477-0.253,0.722c-0.067,0.222-0.116,0.447-0.172,0.672
		c-0.063,0.249-0.133,0.497-0.183,0.751c-0.051,0.259-0.082,0.521-0.119,0.782c-0.032,0.223-0.075,0.443-0.097,0.669
		c-0.048,0.484-0.073,0.971-0.074,1.457c0,0.007-0.001,0.015-0.001,0.022c0,0.007,0.001,0.015,0.001,0.022
		c0.001,0.487,0.026,0.973,0.074,1.458c0.022,0.223,0.064,0.44,0.095,0.661c0.038,0.264,0.069,0.528,0.121,0.79
		c0.05,0.252,0.119,0.496,0.182,0.743c0.057,0.227,0.107,0.456,0.175,0.681c0.073,0.241,0.164,0.474,0.248,0.71
		c0.081,0.226,0.155,0.453,0.247,0.675c0.091,0.22,0.198,0.431,0.3,0.646c0.108,0.229,0.21,0.46,0.33,0.685
		c0.11,0.205,0.235,0.4,0.354,0.599c0.131,0.221,0.256,0.444,0.4,0.659c0.146,0.219,0.309,0.424,0.466,0.635
		c0.136,0.181,0.262,0.368,0.407,0.544c0.299,0.364,0.616,0.713,0.947,1.048c0.016,0.016,0.029,0.034,0.045,0.05l45,45.001
		c2.93,2.929,6.768,4.394,10.607,4.394c3.838-0.001,7.678-1.465,10.606-4.393c5.858-5.858,5.858-15.355,0.001-21.213L51.213,175.001
		z"
              ></path>
              <path
                id="XMLID_8_"
                d="M305.002,25h-190c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15s15-6.716,15-15V55h160v210.001h-160
		v-45.001c0-8.284-6.716-15-15-15s-15,6.716-15,15v60.001c0,8.284,6.716,15,15,15h190c8.284,0,15-6.716,15-15V40
		C320.002,31.716,313.286,25,305.002,25z"
              ></path>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </a>
      </div>
    </div>
    <div id="popup">
      <iframe id="popupFrame" :src="src"></iframe>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";
import main from "@/main";
// import {i18n} from '@/plugins/i18n';
import { Trans } from '@/plugins/Translation'

export default {
  name: "Header",
  data() {
    return {
      mgr: new AuthService(),
      thisUser: null,
      src: "",
      name: "", 
      langs:['en','sr']   
    };
  },
  methods: {
       changeLanguage (e) {
      const lang = e.target.value
      // this.$logger.info(lang)
      const to = this.$router.resolve({ params: { lang } })
      return Trans.changeLanguage(lang).then(() => {
        // console.log(to.location)
        this.$router.push(to.location)
        localStorage.setItem('lang',lang)
        location.reload();
      })
    },
    isCurrentLanguage (lang) {
      return lang === this.currentLanguage
    },
    login() {
      // this.mgr.signIn();
      localStorage.setItem("signInMethod", "redirect");
      this.$store.dispatch("signInUser");
    },
    loginPopup() {
      // this.mgr.signIn();
      this.$store.dispatch("signInUserPopup");
      localStorage.setItem("signInMethod", "popup");
    },
    logout() {
      const method = localStorage.getItem("signInMethod");
      if (method === "redirect") {
        this.$store.dispatch("logout");
      } else {
        this.$store.dispatch("logoutPopup");
      }
      // this.mgr.signOutPopup()
      //this.$store.commit('setUser',null)
    },
    moveToUser() {
      this.$router.push("/user");
    },
    popup() {
      //  href="http://localhost:8080/"
      var popup = document.getElementById("signin");
      var frame = document.getElementById("popupFrame");
      this.src = "http://localhost:8080/";
      popup.style.display = "block";
    }
  },
  mounted() {
    this.$store.dispatch("takeAuthor", this.email);
  },
  computed: {
    supportedLanguages(){
      return Trans.supportedLanguages
    },
    currentLanguage () {
      return Trans.currentLanguage
    },
    user() {
      return this.$store.getters.user;
    },
    email() {
      return this.$store.getters.getEmail;
    },
    author() {
      return this.$store.getters.singleAuthor;
    }
  },
  watch: {
    user(value) {
      if (value.id !== null && value.id !== undefined) {
        this.thisUser = true;
        return this.thisUser;
      }
    }
  }
};
</script>

<style>
.login-register {
  color: #888a88;
  text-decoration: none;
  padding-right: 10px;
}
.colorize {
}
.profile {
  height: 35px;
  width: 35px;
  background: url("https://yt3.ggpht.com/-lZ75lPdnwWs/AAAAAAAAAAI/AAAAAAAAAAA/dEJ6vAV5zdM/s88-c-k-no-mo-rj-c0xffffff/photo.jpg")
    center no-repeat;
  background-size: cover;
  border-radius: 50%;
}
#Layer_1 {
  height: 25px;
  width: 25px;
  fill: #737373;
}
#popup {
  width: 320px;
  height: 300px;
  margin: 0 auto;
  box-shadow: 1px 1px 1px 1px black;
  display: none;
}
#popup iframe {
  width: 100%;
  height: 100%;
}
</style>
