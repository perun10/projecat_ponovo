import Vue from "vue";
import Vuex from "vuex";

import modules from "./modules";

Vue.use(Vuex);

export const store =  new Vuex.Store({
 modules // Equivalent to => modules : modules(imported)
});

