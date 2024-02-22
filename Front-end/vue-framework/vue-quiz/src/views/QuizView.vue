<script setup>
import Question from '@/components/Question.vue';
import QuizHeader from '@/components/QuizHeader.vue'
import { useRoute } from 'vue-router'
import { ref, watch, computed } from 'vue'
import quizes from '@/data/quizes.json'
import Result from '@/components/Result.vue'

const route = useRoute()
const quizId = parseInt(route.params.id)
const quiz = quizes.find((q) => q.id === quizId)

const currentQuestionIndex = ref(0)
const numberOfCorrectAnswer = ref(0)
const showResults = ref(false)


const questionStatus = computed(() => {
    return `${currentQuestionIndex.value} / ${quiz.questions.length}`
})

const barPersentage = computed(() => {
    return `${currentQuestionIndex.value / quiz.questions.length * 100}% `
})

const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
        numberOfCorrectAnswer.value++
    }
    if (quiz.questions.length - 1 === currentQuestionIndex.value) {
        showResults.value = true
    }

    currentQuestionIndex.value++
}

</script>

<template >
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPersentage="barPersentage" />
        <Question v-if="!showResults" :question="quiz.questions[currentQuestionIndex]" @selectOptions="onOptionSelected" />

        <Result v-else :quizQuestionLength="quiz.questions.length" :numberOfCorrectAnswer="numberOfCorrectAnswer" />
    </div>
</template>

<style scoped></style>