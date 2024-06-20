<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <div>
    <h1>base Hello World!</h1>
    <pre>{{ myLayer }}</pre>
    <UButton>asdf</UButton>
    <div class="w-100px h-200px bg-blue-300">123</div>
  </div>
</template>
