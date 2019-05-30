import VueI18n from 'vue-i18n'
import Vue from 'vue'
import sr from '@/lang/sr.json'
import {Trans} from './Translation'
Vue.use(VueI18n)
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '@/constants/trans'

export const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages: { sr }// set locale messages
})

