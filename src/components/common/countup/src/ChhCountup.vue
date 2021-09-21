<template>
  <div class="count-up">
    {{ number }}
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue"

const props = withDefaults(
  defineProps<{
    number: number
  }>(),
  {
    number: 0
  }
)
</script>

<style scoped></style>
