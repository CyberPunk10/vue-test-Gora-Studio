import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)

firebase.initializeApp({
  apiKey: 'AIzaSyAZ4fXK8W59rkOavc-R9tcq6xjz5mPDQbI',
  authDomain: 'vue-test-gora-studio.firebaseapp.com',
  databaseURL: 'https://vue-test-gora-studio.firebaseio.com',
  projectId: 'vue-test-gora-studio',
  storageBucket: 'vue-test-gora-studio.appspot.com',
  messagingSenderId: '6132337409',
  appId: '1:6132337409:web:df6addb4022b6f199a2900'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
