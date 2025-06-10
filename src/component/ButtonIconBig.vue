<script setup lang="ts">
const { size = 32 } = defineProps<{ size?: number }>();
</script>
<template>
  <button class="button-icon-big" :style="{ width: `${size}px`, height: `${size}px` }">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button-icon-big {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: transparent;
  border: 3px solid var(--color-bg);
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    border-color: var(--color-bg-hover);
  }
}
</style>
