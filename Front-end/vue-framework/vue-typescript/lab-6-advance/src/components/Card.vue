<script setup lang="ts">


</script>

<template>
    <slot>
        Default Content
    </slot>

    <div class="">
        <slot name="header">
          
        </slot>
    </div>
    <div class="">
        <slot name="content">

        </slot>
    </div>
    <div class="">
        <slot name="footer">

        </slot>
    </div>
</template>

<style lang="css" scoped>
.card {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
</style>