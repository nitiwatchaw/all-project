
<script setup>
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits(['selectOptions'])

const { question } = defineProps(['question'])

const selectedOption = (isCorrect) => {
    emit('selectOptions', isCorrect)
}


</script>
<template >
    <div>
        <div class="question-container">
            <h1 class="question">
                {{ question.text }}
            </h1>
        </div>
        <div class="options-container">
            <div @click="selectedOption(option.isCorrect)" v-for="option in  question.options " :key="option.id"
                class="option">
                <p class="option-label">{{ option.label }}</p>
                <div class="option-value">
                    <p>{{ option.text }}</p>
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped >
.question-container {
    margin-top: 20px;
}

.question {
    font-size: 40px;
    margin-bottom: 20px;
}

.option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;

}

.option-label {
    background-color: bisque;
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.option-value {
    background: rgb(244, 239, 239);
    width: 100%;
    font-size: 30px;
    padding: 0 20px;
}
</style>