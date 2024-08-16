<template>
  <div class="flex items-center mr-4 rounded-r-full py-2 pl-6 gap-4">
    <component :is="btn" class="size-5" />
    <div class="text-sm">{{ text }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  btn: Object,
  text: String
})
</script>