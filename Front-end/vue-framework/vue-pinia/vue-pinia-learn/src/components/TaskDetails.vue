<script  lang="ts">
import { storeToRefs } from 'pinia'
import { useTaskStore } from '@/stores/TaskStore';
import Modal from './Modal.vue';
export default {
    props: ['task'],
    components: {
        Modal,
    },
    setup() {

        const taskStore = useTaskStore()

        const { modal } = storeToRefs(taskStore)

        const deleteTask = (id: string) => {
            taskStore.deleteTask(id as string)
        }

        const edit = async (id: string) => {

            await taskStore.getSigleTask(id)
            taskStore.modal = !taskStore.modal

        }

        return {
            taskStore,
            deleteTask,
            edit,
            modal
        }
    }
}
</script>

<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i class="material-icons" @click="edit(task.id)">edit</i>
            <i class="material-icons" @click="deleteTask(task.id)">delete</i>
            <i class="material-icons" :class="{ active: task.isFav }" @click="taskStore.toggleFav(task.id)">favorite</i>
        </div>
        <Modal v-if="modal" />



    </div>
</template>

<style lang="css" scoped></style>