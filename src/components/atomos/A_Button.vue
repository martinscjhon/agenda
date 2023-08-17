<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
    <button class="bg-red pt-1 pl-2 pr-2 pb-1">{{ title }}</button>
</template>
  
<style scoped></style>
  