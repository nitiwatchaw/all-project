<script setup >
import { defineProps } from 'vue'

const props = defineProps(['name'])

// Now you can log props
console.log(props)
</script>

<template>
    <div>
        Left side bar component
    </div>
</template>

<style lang="css" scoped>

</style>