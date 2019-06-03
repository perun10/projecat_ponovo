import Vue from "vue";
import Vuex from "vuex";
import createPlugin from 'logrocket-vuex'
import LogRocket from 'logrocket'
LogRocket.init('apgz3r/testproject')
LogRocket.identify('1111', {
  name: 'James Morrison',
  email: 'jamesmorrison@example.com',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
});
const logrocketPlugin = createPlugin(LogRocket)

import modules from "./modules";

Vue.use(Vuex);

export const store =  new Vuex.Store({
 modules // Equivalent to => modules : modules(imported)
});

