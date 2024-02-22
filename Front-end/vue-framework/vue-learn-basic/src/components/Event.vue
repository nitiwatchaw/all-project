<script setup>
import { reactive, watch, watchEffect, ref, watchPostEffect, defineEmits } from 'vue';


const email = ref('this is email')
const password = ref('this is password')

const emit = defineEmits({
    // No validation
    click: null,

    // Validate submit event
    submit: (email, password) => {
        if (email && password) {
            return true
        } else {
            alert('error')
            return false
        }
    }
})


</script>

<template>
    <button @click="emit('submit', email, password)">Click me</button>
</template>
