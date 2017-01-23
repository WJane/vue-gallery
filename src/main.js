// polyfill
import 'babel-polyfill';

import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.devtools = true;

new Vue({
    el: 'body',
    components: { App }
});

// import Gallery from './Gallery';


// Vue.config.devtools = true;

// new Vue({
//     el: 'body',
//     components: { Gallery }
// });


