<script setup lang="ts">
const { size = 32 } = defineProps<{ size?: number }>();
</script>
<template>
  <button class="button-icon" :style="{ width: `${size}px`, height: `${size}px` }"><slot /></button>
</template>

<style lang="scss" scoped>
.button-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-fg);
  cursor: pointer;
}
</style>
