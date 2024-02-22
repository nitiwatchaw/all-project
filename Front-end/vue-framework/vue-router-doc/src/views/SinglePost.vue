<script setup >
import { ref, onMounted, watchEffect } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';


const router = useRouter()
const route = useRoute()
const post = ref('')

const props = defineProps({
    id: String
})

const getPost = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
    post.value = await res.json()
}

watchEffect(getPost)

// onMounted(() => {
//     getPost()
// })

const onBackClick = () => {
    router.push({ name: 'posts' })
}


console.log(props)

onBeforeRouteUpdate((to, from) => {
    getPost()
})


</script>

<template>
    <div>
        Post Single
    </div>
    <div v-if="post">
        <h1 class="">
            {{ post.id }}
        </h1>

        <h2 class="">
            {{ post.title }}
        </h2>

        <div class="">
            {{ post.body }}
        </div>

        <div class="">
            <button @click="onBackClick">Back</button>
        </div>
    </div>
</template>

<style lang="css" scoped></style>