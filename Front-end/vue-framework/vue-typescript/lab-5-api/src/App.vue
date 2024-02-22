<template >
  <div>

    <Header />

    <div class="pt-[65px]">
      <RouterView />
    </div>

  </div>
</template>
<script  lang="ts">

import Header from './components/Header.vue';

export default {
  components: {
    Header
  },
  name: 'App',
}

</script>
<style ></style>