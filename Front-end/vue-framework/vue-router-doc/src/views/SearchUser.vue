<script setup >

import { defineProps } from 'vue';
const props = defineProps({
    query: String
})

</script>

<template>
    <div>
        Search User
    </div>
    <div class="">
        {{ $props.query }}
    </div>
</template>

<style lang="css" scoped></style>