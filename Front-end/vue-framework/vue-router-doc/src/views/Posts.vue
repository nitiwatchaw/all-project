<script setup>
import { inject, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter()
const posts = ref([])

const fetchPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await res.json()
}




const test = inject('message')

onMounted(() => {
    // setTimeout(() => {
    //     fetchPost()
    // }, 3000)

    posts.value = inject('postsData');;



})




</script>

<template>
    <div class="row">
        <div class="col-lg-8">

            <div>
                Post Page
            </div>
            {{ test }}
            <table class="table table-stripes">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in posts" :key="post.id">
                        <td>{{ post.id }}</td>
                        <td>{{ post.title }}</td>
                        <td>{{ post.body }}</td>
                        <td>
                            <router-link :to="{ name: 'post', params: { id: post.id } }">
                                View
                            </router-link>
                        </td>
                    </tr>

                </tbody>

            </table>
        </div>
        <div class="col-lg-4">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="css" scoped></style>