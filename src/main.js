import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as firebase from "firebase";
Vue.config.productionTip = false;
import axios from "axios"
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

firebase.initializeApp(config);
new Vue({
  router,
  store,
  firebase,
  render: h => h(App),
  created(){
  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      this.$store.dispatch('autoSignIn', user);
    }
  })
}
}).$mount("#app");








