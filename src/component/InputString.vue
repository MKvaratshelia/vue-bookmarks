<script setup lang="ts">
const model = defineModel<string>();
</script>
<template>
  <input class="input" type="text" v-model="model" />
</template>

<style lang="scss" scoped>
.input {
  padding: 5px;
  border: none;
  border-bottom: 1px solid var(--color-fg);
  font-size: 24px;
  font-weight: 400;
  min-width: 274px;
  outline: none;

  &::placeholder {
    color: var(--color-inactive);
  }
}
</style>
