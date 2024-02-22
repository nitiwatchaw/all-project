<script setup>

import { ref, reactive, computed, onMounted } from 'vue';




const rawHtml = ref('<p>This is <em>raw HTML</em> content.</p>');

const url = 'https://vuejs.org';
const hasError = true;
const textColor = 'blue';
const textSize = 20;
const isActive = ref(true)
const error = ref('fatal');

const activeClass = ref('active')
const errorClass = ref('text-danger')



const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}

const styleObject = reactive({
  color: 'red',
  fontSize: '13px'
})


const classObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value === 'fatal'
}))

const myObject = reactive({
  name: 'John',
  age: 25
})

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// a computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})



onMounted(() => {
  console.log(`the component is now mounted.`)
})




</script>

<template>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p v-etxt="rawHtml"></p>


  <a v-bind:href="url">Visit Vue.js</a>
  <div v-bind:class="{ active: isActive, error: hasError }" :style="styleObject">Dynamic Classes</div>
  <div v-bind:style="{ color: textColor, fontSize: textSize + 'px' }">Dynamic Styles</div>
  <div v-bind="objectOfAttrs">object with ID and Class</div>
  <div :class="classObject">classObject</div>
  <div :class="[activeClass, errorClass]">Binding to Arrays</div>
  <button @click="myObject">
    {{ myObject.age }}
  </button>

  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</template>

<style scoped></style>
