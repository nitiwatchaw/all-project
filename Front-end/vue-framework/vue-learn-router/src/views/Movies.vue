<script setup>
import { ref, onMounted } from 'vue'


const movieList = ref([])
const isLoading = ref(true)

import MovieCard from '@/components/MovieCard.vue';

onMounted(async () => {
    const res = await fetch('http://localhost:3000/movies');
    movieList.value = await res.json();
    isLoading.value = false
});



</script>


<template>
    <h1 class="text-2xl font-bold text-center py-[50px]">Movies</h1>
    <div class="max-w-sm mx-auto text-center" v-if="isLoading">
        <span class="text-2xl font-bold text-indigo-700">Is Loading</span>
    </div>
    <div v-else class="
    flex flex-wrap gap-5 justify-center">
        <MovieCard v-for="movie in movieList" :key="movie.id" :movie="movie" />
    </div>
</template>

<style lang="">
    
</style>