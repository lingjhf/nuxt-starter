<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <div>
    <h1>base Hello World!</h1>
    <pre>{{ myLayer }}</pre>
    <VanButton />
    <UButton/>
  </div>
</template>
