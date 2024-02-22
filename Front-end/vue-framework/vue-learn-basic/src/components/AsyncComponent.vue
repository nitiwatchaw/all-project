<script setup >
import { ref, onMounted } from 'vue';
const posts = ref('')

const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
    posts.value = await res.json()

}

onMounted(() => {
    fetchData()
})

</script>

<template>
    <div class="" v-for="post in posts" :key="post.id">
        {{ post.title }}</div>
</template>

<style lang="css" scoped></style>