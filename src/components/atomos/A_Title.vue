<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <h1 class="text-slate-700 text-lg">{{ title }}</h1>
</template>