<script setup>
import { defineProps } from 'vue'

defineProps({
    post: Object
})

</script>

<template>
    <div>
        Title: {{ post.title }}
    </div>
    <div class="">
        Body: {{ post.body }}
    </div>
    <div class="">
        Footer: {{ post.footer }}
    </div>
</template>

<style lang="css" scoped></style>