import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'


const app = createApp(App)
const pinia = createPinia()


let postsDataProvided = false;

router.beforeResolve(async (to, from) => {
    if (to.path === '/posts' && !postsDataProvided) {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        app.provide('postsData', await res.json())
        postsDataProvided = true;
    }
})


// Mount the Vue app to the DOM
app.use(router)
app.use(pinia)
app.mount('#app')