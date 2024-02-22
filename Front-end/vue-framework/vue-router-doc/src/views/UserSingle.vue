<script setup >


import { defineProps } from 'vue';

const props = defineProps(['id'])
</script>

<template>
    <div>
        Single User Page
    </div>
    <p>User ID: {{ props?.id }}</p>
</template>

<style lang="css" scoped></style>