import VueI18n from 'vue-i18n'
import Vue from 'vue'
import en from '@/lang/en.json'
Vue.use(VueI18n)
import { FALLBACK_LANGUAGE, DEFAULT_LANGUAGE } from '@/constants/trans'
import {dateTimeFormats} from '@/lang/dates.js'

export const i18n = new VueI18n({
  locale: DEFAULT_LANGUAGE, // set locale
  fallbackLocale: FALLBACK_LANGUAGE,
  dateTimeFormats,
  messages: { en }// set locale messages
})

