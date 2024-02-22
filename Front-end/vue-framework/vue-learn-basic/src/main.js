import './assets/main.css'
import TestVue from './components/Test.vue'
import { createApp, provide } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)


app.directive('demo', (el, binding) => {
    // console.log(binding.value.color) // => "white"
    // console.log(binding.value.text) // => "hello!"
})


app.directive('focus', {
    mounted(el, binding, vNode, prevNode) {
        console.log(binding)
        el.style.borderColor = 'red'
    }
})
app.provide('mainn', ' this is provide message from main.js')
app.use(router)
app.component('TestVueCompenent', TestVue)
app.mount('#app')



