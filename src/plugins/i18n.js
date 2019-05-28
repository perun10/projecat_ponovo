import Vue from 'vue';
import VueI18n from 'vue-i18n';
import {store} from "@/store/index";
Vue.use(VueI18n);

// import {stringsEn} from '../lang/en'
// import {stringsSr} from '../lang/sr'
const local = localStorage.getItem('lang')
var str = import('@/lang/'+local+'.js').then((module)=>{
    return module.strings   
})

str.then((response)=>{
    console.log(response)
    store.commit('SET_LOCAL',response)
})


const messages = {}
const i18n = new VueI18n({    
    locale: local ? local : 'sr', // set locale
    fallbackLocale: 'sr', // set fallback locale
    messages, // set locale messages
});

export default i18n;