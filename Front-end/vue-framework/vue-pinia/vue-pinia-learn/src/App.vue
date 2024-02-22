<script  lang="ts">
import { ref } from 'vue'
import { useTaskStore, } from './stores/TaskStore'
import TaskForm from './components/TaskForm.vue'
import TaskDetails from './components/TaskDetails.vue'
import { storeToRefs } from 'pinia'



export default {
  components: {
    TaskDetails,
    TaskForm,

  },
  setup() {
    const taskStore = useTaskStore()
    const filter = ref('all')
    const { tasks, isLoading, favs, totalCount, favCount, modal } = storeToRefs(taskStore)

    //fetch tasks
    taskStore.getTasks()

    return {
      filter, tasks, isLoading, favs, totalCount, favCount, taskStore, modal
    }
  },

}
</script>

<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="">
      <h1>Pinia Task</h1>
    </header>

    <TaskForm />

    <div class="loading" v-if="isLoading">
      Loading tasks...
    </div>
    <nav class="filter">
      <button @click="filter = 'all'">All task</button>
      <button @click="filter = 'favs'">Fav task</button>
    </nav>


    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }}</p>
      <div class="" v-for="task in tasks">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ favCount }}</p>
      <div class="" v-for="task in favs">
        <TaskDetails :task="task" />
      </div>
    </div>

    <button @click="taskStore.$reset">reset state</button>


  </main>
</template>

<style lang="css" scoped></style>