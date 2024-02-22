<script setup>
import { ref, provide } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue'

const message = ref('This is message from provide')

provide('message', message)


</script>

<template>
  <HeaderComponent />
  <div class="container">
    <div class="row">

      <RouterView name="LeftSideBar" class="col-md-2" />


      <RouterView class="col-md-8" />


      <RouterView name="RightSideBar" class="col-md-2" />

    </div>

  </div>
</template>

<style scoped></style>
