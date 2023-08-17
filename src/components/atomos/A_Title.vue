<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <h1 class="text-gray-500 text-xl">{{ title }}</h1>
</template>