
<script setup>
import { ref, defineEmits, provide, createApp, inject, defineAsyncComponent, onMounted, onUnmounted, reactive } from 'vue';

import MyButton from './components/MyButton.vue';
import Child from './components/Child.vue'
import ModelComponent from './components/ModelComponent.vue';
import EventVue from './components/Event.vue';
import Provide from './components/Provide.vue';
import LoadingComponent from './components/LoadingComponent.vue'
import ErrorComponent from './components/Error.vue'
import TransitionComponent from './components/TransitionComponent.vue'
import Modal from './components/Modal.vue';
import { useMouse } from './hook/mouse'
import { useFetch } from './hook/fetch'

const emit = defineEmits();

const bookTitle = ref('title')
const somethings = ref('HIHI Somethings')
const myText = ref('This is my text')
const first = ref('John')
const last = ref('Doe')



const handleClickEvent = (email, password) => {
  console.log('clickEvent', email, password)
}

const message = ref('This is message from provide')

provide('message', message)

const searchText = ref('Hello search text')
const updateSearchText = () => {
  searchText.value = 'Updated value from parent'
}

provide('search', { searchText, updateSearchText })


const AsyncComponent = defineAsyncComponent({
  loader: () => {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(import('./components/AsyncComponent.vue'));
      }, 2000);

      setTimeout(() => {
        reject(new Error('Failed to load AsyncComponent')); // Reject the promise with an error
      }, 3000);
    });
  },
  loadingComponent: LoadingComponent, // Component to show while loading
  errorComponent: ErrorComponent // Component to show in case of error
});



const mouse = reactive(useMouse())

const { data, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1');

const value = 'HHIhI'



</script>


<template>
  <div class="">
    <TestVueCompenent :somethings="somethings" />
    <MyButton class="large" style="color:red" @click="() => console.log('clikced')"></MyButton>


    <Child v-model:title="bookTitle" />

    <ModelComponent v-model.capitalize="myText" v-model:firstname="first" v-model:lastname="last" />

    <EventVue @submit="handleClickEvent" />

    <Provide />

    <AsyncComponent />
    Mouse position is at: {{ mouse.x }}, {{ mouse.y }}
  </div>


  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-else-if="data">
    Data loaded:
    <pre>{{ data }}</pre>
  </div>
  <div v-else>Loading...</div>

  <input type="text" v-focus:foo.ss.bar="value" />
  <div v-demo="{ color: 'white', text: 'hello!' }"></div>

  <TransitionComponent />


  <Modal />
</template>





<style  scoped></style>