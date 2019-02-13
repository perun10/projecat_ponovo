import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;
import * as firebase from "firebase";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

var config = {
  apiKey: "AIzaSyANfSprz6Nb9OsFg6mC1pUko1fGs2426cI",
  authDomain: "project-ponovo.firebaseapp.com",
  databaseURL: "https://project-ponovo.firebaseio.com",
  projectId: "project-ponovo",
  storageBucket: "project-ponovo.appspot.com",
  messagingSenderId: "38055836551"
};
firebase.initializeApp(config);