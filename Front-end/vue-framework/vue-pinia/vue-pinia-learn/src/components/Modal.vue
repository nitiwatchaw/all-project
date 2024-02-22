<script  lang="ts">
import { reactive, ref } from 'vue';
import { storeToRefs } from 'pinia'
import { useTaskStore } from '@/stores/TaskStore';

interface TaskType {
    id: string;
    title: string;
    isFav: boolean;
}


export default {



    setup() {
        const taskStore = useTaskStore()
        const { sigleTask, isLoading, modal } = storeToRefs(taskStore)

        const editTask = reactive(sigleTask)

        const closeModal = () => {
            taskStore.modal = false
        }
        const fav = ref(editTask.value.isFav)


        const toggleFav = (id: string) => {
            taskStore.toggleFav(id)
            fav.value = !fav.value

        }

        const updateTask = async (editTask: TaskType, id: string) => {
            await taskStore.getSigleTask(id)
            taskStore.updateTask(editTask, id);

        };



        return {
            isLoading, modal, sigleTask, closeModal, editTask, updateTask, toggleFav, fav
        }
    },


}
</script>

<template>
    <div class="modal-bg">
        <div class="modal-content">

            <div class="modal-header">
                Edit Task
                <div class="close">
                    <button @click="closeModal">X</button>
                </div>
            </div>
            <div class="modal-body">
                <div class="title">
                    <div class="header-title">
                        Title
                    </div>
                    <div class="body">
                        <input type="text" v-model="editTask.title">
                    </div>
                </div>
                <div class="fav">
                    <div class="header-title">
                        Favorite
                    </div>
                    <div class="body">
                        <button class="fav-icon" @click="toggleFav(editTask.id)">
                            <i class="material-icons" :class="{ active: fav }">favorite</i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button @click="updateTask(editTask, editTask.id)">Update</button>
            </div>

        </div>
    </div>
</template>

<style lang="css" scoped>
.modal-bg {
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.233);
}

.modal-content {
    background-color: white;
    border-radius: 18px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 500px;
    gap: 20px;
}

.close {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);

}

.close button {
    padding: 0;
    margin: 0;
    width: 20px;
    height: 20px;
    cursor: pointer;
    background-color: none;
}

.modal-content .modal-header {
    position: relative;
    font-size: 20px;
    text-align: center;
    padding: 10px 0px;
    border-bottom: 1px solid black
}

.modal-content .fav {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.modal-content .modal-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-grow: 1;
    width: 80%;
    margin: 0 auto;
}

.modal-content .modal-body input {
    height: 50px;
    padding: 21px;
    font-size: 20px;
    width: 100%;
}

.modal-content .header-title {
    font-size: 25px;
    text-align: center;
}

.modal-content .body {
    font-size: 18px;
}

.modal-content .modal-footer {
    position: relative;
    font-size: 20px;
    text-align: center;
    padding: 10px 0px;
    border-top: 1px solid black
}

.modal-content .modal-footer button {
    border: none;
    background-color: #ffd859;
    font-size: 18px;
    padding: 12px 25px;
    border-radius: 18px;
    cursor: pointer;

}

.fav-icon {
    border: 0;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

}

.fav-icon i {
    font-size: 28px;
}
</style>