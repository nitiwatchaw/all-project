import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import Toast from 'vue-toastification'
import router from './router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'vue-toastification/dist/index.css';




createApp(App)
    .use(router)
    .use(createPinia())
    .use(Toast)
    .mount('#app')
