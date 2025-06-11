<script setup lang="ts"></script>
<template>
  <button class="button"><slot /></button>
</template>

<style lang="scss" scoped>
.button {
  padding: 12px 24px;
  color: var(--color-bg);
  background-color: var(--color-fg);
  font-size: 14px;
  font-weight: 400;
  border-radius: 40px;
  cursor: pointer;
}
</style>
