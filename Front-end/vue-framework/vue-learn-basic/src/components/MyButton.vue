<script setup >

// defineOptions({
//   inheritAttrs: false
// })

</script>

<template>
    <button class="btn">Simple Button</button>
    <button class="btn" v-bind="$attrs">click me</button>
    <!-- <span>Fallthrough attributes: {{ $attrs }}</span> -->
</template>

<style lang="css" scoped></style>