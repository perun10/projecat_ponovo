 import {stringsSr} from '../lang/sr'
import VueI18n from 'vue-i18n';
const local = localStorage.getItem('lang')

var str = import('@/lang/'+local+'.js').then((module)=>{
    const strings = {...module.strings}
 store.commit('SET_LOCAL',strings)
 return strings
})

async function i18nSettings(str){
    var messages = {}
    let settings = {}
    await str.then(strings=>{
        messages = {...strings}
        // console.log(messages)
    }).then(()=>{
        settings = {    
           locale: local ? local : 'sr', // set locale
           fallbackLocale: 'sr', // set fallback locale
           messages// set locale messages
        }
    })
    console.log(settings)
    const i18n = new VueI18n(settings)
    return i18n
}

i18nSettings(str)

