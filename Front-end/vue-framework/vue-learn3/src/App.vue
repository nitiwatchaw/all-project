<script setup>

import { ref } from 'vue'

const showModal = ref(false)
const newNote = ref('')
const notes = ref([])
const errorMessage = ref("")


const getRandomColor = () => {
  const color = "hsl(" + Math.random() * 360 + ", 100%, 75%"
  return color
}

const addNote = () => {

  if (newNote.value.length <= 9) {
    errorMessage.value = "Please fil atleast 9"
    return
  }

  notes.value.push({
    id: Math.floor(Math.random() * 100),
    text: newNote.value,
    date: new Date(),
    backgrondColor: getRandomColor()
  });
  showModal.value = false;
  newNote.value = "";
  errorMessage.value = ""

}


const deleteNote = (id) => {
  notes.value = notes.value.filter((note) => note.id !== id)
}


</script>

<template>
  <main>

    <!-- modal -->
    <div v-if="showModal" class="overlay">
      <div class="modal">

        <textarea v-model="newNote" name="note" id="note" cols="30" rows="10">
        </textarea>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <button @click="addNote">Add Note</button>
        <button @click="showModal = false" class="close">Close</button>

      </div>

    </div>

    <!-- content -->
    <div class="container">
      <header>

        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="card-container">

        <div v-for="(note) in notes" :key="note.id" class="card relative"
          :style="{ backgroundColor: note.backgrondColor }">

          <p class="main-text">
            {{ note.text }}
          </p>


          <div class="flex items-center justify-between">
            <div class="date">
              {{ new Date(note.date).toLocaleDateString() }}
            </div>
            <button @click="deleteNote(note.id)"
              class="text-white w-8 h-8 cursor-pointer bg-slate-600 rounded-full ">del</button>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}

.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

h1 {
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 75px;
}

header button {
  width: 50px;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
  background: #dedbdb;
  border-radius: 35px;
}

.card {
  width: 225px;
  height: 225px;

  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
}

.date {
  font-size: 12.5px;
  font-weight: bold;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}


.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

}

.modal {
  width: 750px;
  background: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal button {
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  background-color: blueviolet;
  color: white;
  cursor: pointer;
  margin-top: 15px;

}

.modal .close {
  background-color: red;
  margin-top: 7px;
}

textarea {
  border: 1px solid black;
  border-radius: 12px;
}

.modal p {
  color: red;
}

.main-text {
  word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>
