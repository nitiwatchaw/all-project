<script setup>
import axios from 'axios'
import { ref, onMounted, reactive } from 'vue'
import Post from './components/Post.vue'

const posts = ref([])
const post = reactive({
  title: '',
  body: '',
  footer: ''
})
const newPost = ref({})
const isEdit = ref(false)
let postIdToUpdate = null; // Initialize postIdToUpdate

const fetchData = async () => {
  try {
    const res = await axios.get('http://localhost:8000/api/posts/')
    posts.value = res.data
    console.log(posts.value)
  } catch (error) {
    console.error(error)
  }
}

const createPost = async () => {
  try {
    const res = await axios.post('http://localhost:8000/api/posts/', post)
    console.log('New post created:', res.data)
    posts.value.push(res.data)

    // Clear the form fields after successful creation
    post.title = ''
    post.body = ''
    post.footer = ''
  } catch (error) {
    console.log(error)
  }
}

const deletePost = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/api/posts/${id}`)
    // Remove the deleted post from the posts array
    posts.value = posts.value.filter(post => post._id !== id)
    alert('Post deleted successfully')
  } catch (error) {
    console.log(error)
  }
}

const showPost = async (id) => {
  try {
    isEdit.value = true
    postIdToUpdate = id; // Set the postIdToUpdate when showing the post
    const res = await axios.get(`http://localhost:8000/api/posts/${id}`)
    newPost.value = res.data
    console.log(newPost.value)
  } catch (error) {
    console.log(error)
  }
}

const updatePost = async () => {
  try {

    await axios.put(`http://localhost:8000/api/posts/${postIdToUpdate}`, newPost.value)

    isEdit.value = false
    
    postIdToUpdate = null; // Reset postIdToUpdate after update
    fetchData()


  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchData()
})

</script>

<template>
  <div>
    <h1 class="">APP Vue Full Stack</h1>
    <form @submit.prevent="createPost">
      <input type="text" v-model="post.title" placeholder="title">
      <input type="text" v-model="post.body" placeholder="body">
      <input type="text" v-model="post.footer" placeholder="footer">
      <button type="submit">Create Post</button>
    </form>

    <div v-for="post in posts" :key="post._id">
      <Post :post="post" />
      <button @click="deletePost(post._id)">Delete</button>
      <button @click="showPost(post._id)">Update</button>
    </div>

    <div v-if="isEdit" class="">
      <input type="text" v-model="newPost.title" placeholder="title">
      <input type="text" v-model="newPost.body" placeholder="body">
      <input type="text" v-model="newPost.footer" placeholder="footer">
      <button @click="updatePost">Update Post</button>
    </div>

  </div>
</template>

<style scoped>
/* Add your scoped styles here */
</style>
