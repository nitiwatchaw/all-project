<script setup lang="ts" >

import { defineProps, ref } from 'vue';

interface todoType {
    id: number;
    content: string;
    category: string;
    done?: boolean;
    createdAt?: number;
}

const isEdit = ref<boolean | null | number>(null);
const props = defineProps(['todo_asc', 'removeTodo']);
const newContentValue = ref('')

const handleEdit = (todo: todoType) => {

    isEdit.value = todo.id;
    newContentValue.value = todo.content

}

const handleSave = (todo: todoType) => {

    const index = props.todo_asc.findIndex((item: any) => item.id === todo.id);

    if (newContentValue.value.trim() === '') {
        isEdit.value = !isEdit.value
        return
    }

    props.todo_asc[index] = {
        ...todo,
        content: newContentValue.value
    }

    isEdit.value = !isEdit.value

}


</script>

<template  >
    <h3>TODO LIST</h3>
    <div class="list">
        <div v-for="todo in props.todo_asc" :key="todo.id" :class="`todo-item ${todo.done && 'done'}`">
            <label>
                <input type="checkbox" v-model="todo.done">
                <span :class="`bubble ${todo.category}`"></span>
            </label>

            <div v-if="isEdit === todo.id" class="todo-content ">
                <input type="text" placeholder="edit" class="editContent" v-model="newContentValue">
            </div>

            <div v-else class="todo-content">
                <p>{{ todo.content }}</p>
            </div>
            <div class="actions">

                <button v-if="isEdit === todo.id" class="edit" @click="handleSave(todo)">Save</button>
                <button v-else class="edit" @click="handleEdit(todo)">Update</button>
                <button class="delete" @click="props.removeTodo(todo)">Delete</button>
            </div>
        </div>
    </div>
</template>

<style ></style>