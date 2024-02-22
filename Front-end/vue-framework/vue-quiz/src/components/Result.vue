<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router'
const { numberOfCorrectAnswer, quizQuestionLength } = defineProps(["numberOfCorrectAnswer", "quizQuestionLength"])



</script>

<template >
    <div class="results">
        <p>Your Result..</p>
        <h1>{{ numberOfCorrectAnswer }}/{{ quizQuestionLength }}</h1>
        <RouterLink to="/">Back</RouterLink>
    </div>
</template>

<style scoped >
.results {
    text-align: center;
    padding: 100px 0;
}

p {
    font-size: 25px;

}

h1 {
    font-size: 80px;
}
</style>