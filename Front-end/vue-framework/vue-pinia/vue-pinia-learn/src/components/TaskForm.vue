<script  lang="ts">
import { ref } from 'vue';
import { useTaskStore } from '@/stores/TaskStore';
export default {
    setup() {
        const taskStore = useTaskStore()
        const newTask = ref('')

        const handleSubmit = () => {
            if (newTask.value.length > 0) {

                taskStore.addTask({
                    id: Math.floor(Math.random() * 1000).toString(),
                    title: newTask.value,
                    isFav: false
                })
                newTask.value = ''

            }
        }


        return {
            handleSubmit,
            newTask,
            taskStore
        }
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="I nees to..." v-model="newTask">
            <button>Add</button>
        </form>

    </div>
</template>

<style lang="css" scoped></style>