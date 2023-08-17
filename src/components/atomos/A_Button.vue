<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
    <button class="bg-red pt-1 w-40 pb-1 rounded-sm">{{ title }}</button>
</template>
  
<style scoped>
    button {
        font-size: 14.5px;
    }
</style>
  