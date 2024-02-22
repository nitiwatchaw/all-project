<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router'
const { quizProps } = defineProps(['quizProps'])


const router = useRouter()

const navigateToQuiz = () => {
    router.push(`/quiz/${quizProps.id}`)
}


</script>

<template >
    <div class="card" @click="navigateToQuiz">
        <img :src="quizProps.img" alt="">
        <div class="card-text">
            <h2>{{ quizProps.name }}</h2>
            <p> {{ quizProps.questions.length }} questions</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
}

.card img {
    width: 100%;
    height: 190px;
    object-fit: cover;
    margin: 0;
}

.card .card-text {
    padding: 0 5px;

}

.card .card-text h2 {
    font-weight: bold;
}
</style> 