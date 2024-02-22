<script setup>

defineProps({
    movie: Object
})


</script>
<template >
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <RouterLink :to="`/movies/${movie.id}`" class="h-[250px] block">
            <img class="rounded-t-lg h-full w-full object-cover" :src="movie?.Images[0]" alt="" />
        </RouterLink>
        <div class="p-5">
            <RouterLink :to="`/movies/${movie.id}`">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {{ movie?.Title }}</h5>
            </RouterLink>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ movie.Plot }}</p>
            <RouterLink :to="`/movies/${movie.id}`"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </RouterLink>
        </div>
    </div>
</template>

<style ></style>