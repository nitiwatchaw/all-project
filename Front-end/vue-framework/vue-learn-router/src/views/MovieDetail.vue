<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';


const queryMovie = ref({})
const isLoading = ref(true)
const router = useRoute()

onMounted(async () => {
    const res = await fetch(`http://localhost:3000/movies/${router.params.id}`)
    if (res.status === 404) {
        router.push({ name: 'NotFound' })
    }
    queryMovie.value = await res.json()

    isLoading.value = false
})

</script>

<template >
    <div class="container text-center" v-if="isLoading">
        Is Loading...
    </div>
    <div class="w-full flex justify-center mt-[50px]" v-else>

        <div
            class=" p-9 flex flex-col items-center bg-white border border-gray-200 rounded-3xl shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-lg h-[500px]" :src="queryMovie.Images[0]" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ queryMovie.Title }}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ queryMovie.Plot }}</p>
                <p class="text-white">{{ queryMovie.Year }}</p>
                <p class="text-white">{{ queryMovie.Genre }}</p>
                <p class="text-white">{{ queryMovie.Actors }}</p>
                <p class="text-white">{{ queryMovie.Awards }}</p>
            </div>

            <button @click="$router.go(-1)" type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back</button>
        </div>

    </div>
</template>

<style ></style>