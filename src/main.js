import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyB32JKowDhoQUKHJN_dbcuShZkl68ztOko",
  authDomain: "vue-calendar-9c5d3.firebaseapp.com",
  projectId: "vue-calendar-9c5d3",
  storageBucket: "vue-calendar-9c5d3.appspot.com",
  messagingSenderId: "263721684258",
  appId: "1:263721684258:web:8d7a94fc7266654fee697b"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
