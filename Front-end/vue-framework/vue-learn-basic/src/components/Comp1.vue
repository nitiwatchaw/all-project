<script setup >
import { onMounted, onUnmounted, ref } from 'vue';

const number = ref(0)

onMounted(() => {
    console.log('om Mounted Comp B')
})

onUnmounted(() => {
    console.log('om Unmounted Comp B')
})

</script>

<template>
    <div>
        Count: {{ number }}
        <button @click="number++">+</button>
    </div>
</template>

<style lang="css" scoped></style>