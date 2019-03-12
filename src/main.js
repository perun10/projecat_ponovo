import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import {store} from "./store/index";
import VueProgressBar from "vue-progressbar"
import * as firebase from "firebase";
Vue.config.productionTip = false;
import axios from "axios"
import * as VueGoogleMaps from 'vue2-google-maps'
import VueFirestore from "vue-firestore"
import Vuelidate from "vuelidate"
Vue.use(Vuelidate)
require('firebase/firestore')
Vue.use(VueFirestore)
import VueCookie from 'vue-cookie'
Vue.use(VueCookie);

Vue.use(VueProgressBar, {
	  color: 'black',
	  failedColor: '#874b4b',
	  thickness: '5px',
	transition: {
		speed: '0.2s',
    opacity: '0.1s',
    termination:'300'
	},
    location: 'top',
    position:'fixed',
	  inverse: false
})
require('dotenv/config')


axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
var config = {
  apiKey: process.env.VUE_APP_FIRE_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDERID
};

Vue.use(VueGoogleMaps,{
  load:{
    key: process.env.VUE_APP_GOOGLE_API,
    libraries: 'places'    
  }
})

firebase.initializeApp(config);


new Vue({
  router,
  store,
  firebase,
  App  
  ,
  render: h => h(App),
  created(){
  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      this.$store.dispatch('autoSignIn', user);
    }
  })
}
}).$mount("#app");








