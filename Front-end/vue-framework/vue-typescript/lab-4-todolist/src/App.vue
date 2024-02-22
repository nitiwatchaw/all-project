<script setup lang="ts">

import { ref, onMounted, computed, watch } from 'vue'
import List from './components/List.vue';




interface todoType {
  id: number;
  content: string;
  category: string;
  done?: boolean;
  createdAt?: number;
}

const todo = ref<todoType[]>([])
const id = ref(1)
const name = ref('')
const input_content = ref('')
const input_category = ref(null)

const isActiveMenu = ref<string>('all')


const todo_asc = computed(() => {
  if (isActiveMenu.value === 'all') {
    return todo.value.sort((a: todoType, b: todoType) => b.createdAt! - a.createdAt!);
  } else {
    const filteredCategory = todo.value.filter(e => e.category === isActiveMenu.value);
    return filteredCategory.sort((a: any, b: any) => b.createdAt - a.createdAt);
  }
});



const activeMenu = (menu: string) => {
  isActiveMenu.value = menu

}



const addTodo = () => {
  if (input_content.value.trim() === '' || input_category.value === null) {
    alert('fill all field')
    return
  }
  todo.value.push({
    id: id.value++,
    content: input_content.value,
    category: input_category.value,
    done: false,
    createdAt: new Date().getTime()
  })

  input_content.value = ''

}

const removeTodo = (todoToRemove: todoType) => {
  todo.value = todo.value.filter(todo => todo !== todoToRemove)
}


watch(name, (newValue) => {
  localStorage.setItem('nameTodo', JSON.stringify(newValue))

},)

watch(todo, (newval) => {
  localStorage.setItem('todoList', JSON.stringify(newval))
}, { deep: true })


watch(isActiveMenu, (newval) => {
  localStorage.setItem('menuActive', JSON.stringify(newval))
}, { deep: true })


watch(id, (newval) => {
  localStorage.setItem('currentID', JSON.stringify(newval))
}, { deep: true })


onMounted(() => {
  const storedValue = localStorage.getItem('nameTodo')
  const storedTodoValue = localStorage.getItem('todoList')
  const storedMenuValue = localStorage.getItem('menuActive')
  const storedIdValue = localStorage.getItem('currentID')
  if (storedValue) {
    name.value = JSON.parse(storedValue)
  }

  if (storedTodoValue) {
    todo.value = JSON.parse(storedTodoValue)
  }
  if (storedMenuValue) {
    isActiveMenu.value = JSON.parse(storedMenuValue)
  }
  if (storedIdValue) {
    id.value = JSON.parse(storedIdValue)
  }
})


</script>

<template>
  <main class="app">
    <section class="greeting">
      <h2 class="title">
        What's up <input type="text" placeholder="Name Here" v-model="name">
      </h2>
    </section>


    <section class="create-todo">
      <h3>CREATE A TODO</h3>
      <form @submit.prevent="addTodo">
        <h4>What's on your todo list?</h4>
        <input type="text" placeholder="e.g.make a video" v-model="input_content">

        <h4>Pick a category</h4>

        <div class="options">
          <label>
            <input type="radio" name="category" value="bussiness" v-model="input_category">
            <span class="bubble business"></span>
            <div class="">Bussiness</div>
          </label>
          <label>
            <input type="radio" name="category" value="personal" v-model="input_category">
            <span class="bubble personal"></span>
            <div class="">Personal</div>
          </label>
        </div>

        <input type="submit" value="Add todo">
      </form>
    </section>

    <section class="menu">
      <ul>
        <li @click="activeMenu('all')" :class="{ 'active': isActiveMenu === 'all' }">All</li>
        <li @click="activeMenu('bussiness')" :class="{ 'active': isActiveMenu === 'bussiness' }">Bussiness</li>
        <li @click="activeMenu('personal')" :class="{ 'active': isActiveMenu === 'personal' }">Personal</li>
      </ul>
    </section>


    <section class="todo-list">

      <List :todo_asc="todo_asc" :removeTodo="removeTodo" />

    </section>



  </main>
</template>

<style scoped></style>
