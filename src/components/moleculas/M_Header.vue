<script setup lang="ts">
import Logo from '../atomos/A_Logo.vue'
import Title from '../atomos/A_Title.vue'
</script>

<template>
  <header class="flex justify-between	pl-8 pr-8 bg-white shadow-md items-center">
    <Logo />
    <Title title="Minha agenda"/>
  </header>
</template>

<style scoped>
header {
  height: 4rem;  

}
</style>
