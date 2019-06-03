import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import {store} from "./store/index";
import VueProgressBar from "vue-progressbar"
import * as firebase from "firebase";
import axios from "axios"
import * as VueGoogleMaps from 'vue2-google-maps'
import VueFirestore from "vue-firestore"
import Vuelidate from "vuelidate"
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import 'bootstrap'
import VueCookie from 'vue-cookie'
import {i18n} from '@/plugins/i18n';
import AuthService from './services/AuthService'
import { Trans } from './plugins/Translation'
import LogRocket from 'logrocket'
import VueI18n from "vue-i18n";
import winstonLogger from '@/plugins/logger'


const logger = {
  install( Vue , options){
    Vue.prototype.$logger  = winstonLogger
  }
}

Vue.use(logger)

require('firebase/firestore')
require('dotenv/config')

Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)
Vue.config.productionTip = false;

Vue.use(VueProgressBar, {
  color: 'red',
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

Vue.use(Vuelidate)
Vue.use(VueFirestore)
Vue.use(VueCookie);
Vue.use(LogRocket)
Vue.use(VueGoogleMaps,{
  load:{
    key: process.env.VUE_APP_GOOGLE_API,
    libraries: 'places'    
  }
})

//axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

let mgr = new AuthService();

var config = {
  apiKey: process.env.VUE_APP_FIRE_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDERID
};

LogRocket.init('apgz3r/testproject')
LogRocket.identify('1111', {
  name: 'James Morrison',
  email: 'jamesmorrison@example.com',
  subscriptionType: 'pro'
});

firebase.initializeApp(config);
new Vue({
  router,
  store,
  firebase,
  App,
  i18n,
  render: h => h(App),
  created(){
  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      this.$store.dispatch('takeEmail',user.email)
      this.$store.dispatch('takeAuthor',user.email)
      this.$store.dispatch('autoSignIn', user);
    
    }
  })
}
}).$mount("#app");


