 import {stringsSr} from '../lang/sr'
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
    return (settings)
}

let conf = {}
i18nSettings(str).then((results)=>{
    console.log(results)
    // conf = results
    conf = new VueI18n(results)
})
console.log(conf)