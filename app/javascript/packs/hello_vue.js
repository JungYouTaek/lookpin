import Vue from 'vue'
import App from './app.vue'

document.body.appendChild(document.createElement('hello'))
const app = new Vue(App).$mount('hello')
