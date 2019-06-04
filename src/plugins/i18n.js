import VueI18n from 'vue-i18n'
import Vue from 'vue'
// import en from '@/lang/en.json'
Vue.use(VueI18n)
import { FALLBACK_LANGUAGE, DEFAULT_LANGUAGE } from '@/constants/trans'
import {dateTimeFormats} from '@/lang/dates.js'

const local = localStorage.getItem('lang') ? localStorage.getItem('lang') : localStorage.setItem('lang','sr')

 function loadLanguageFile (lang) {
  console.log(lang)
  return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}.json`)
}



export const i18n = new VueI18n({
  locale: local, // set locale
  fallbackLocale: local,
  dateTimeFormats
  // messages:loadLanguageFile(local)
})

loadLanguageFile(local).then((msgs)=>{
  i18n.setLocaleMessage(local, msgs.default || msgs)
  console.log('Ucitan '+local)
})