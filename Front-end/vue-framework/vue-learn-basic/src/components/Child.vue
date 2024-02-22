<script setup >



const title = defineModel('title', { required: true })


</script>

<template>
    <input type="text" v-model="title" />
</template>

