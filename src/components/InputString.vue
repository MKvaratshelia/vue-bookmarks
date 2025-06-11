<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';

const model = defineModel<string>();

const { isFocused = false } = defineProps<{ isFocused?: boolean }>();

const input = useTemplateRef<HTMLInputElement>('input');

onMounted(() => {
  if (input.value && isFocused) {
    input.value.focus();
  }
});
</script>
<template>
  <input class="input" type="text" v-model="model" ref="input" />
</template>

<style lang="scss" scoped>
.input {
  padding: 5px;
  border: none;
  border-bottom: 1px solid var(--color-fg);
  font-size: 24px;
  font-weight: 400;
  max-width: 274px;
  width: 100%;
  outline: none;

  &::placeholder {
    color: var(--color-inactive);
  }
}
</style>
