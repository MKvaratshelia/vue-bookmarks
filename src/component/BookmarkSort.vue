<script setup lang="ts">
const SORT_OPTIONS = [
  { option: 'date', title: 'По дате' },
  { option: 'title', title: 'По заголовку' },
];

const { option } = defineProps<{ option: string }>();
const emit = defineEmits<{
  (e: 'sort', option: string): void;
}>();
</script>
<template>
  <div class="sort">
    <button
      @click="() => emit('sort', item.option)"
      class="sort__button"
      v-for="item in SORT_OPTIONS"
      :key="item.option"
      :class="option === item.option ? 'active' : ''"
    >
      {{ item.title }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.sort {
  display: flex;
  gap: 10px;
  margin-top: 40px;

  &__button {
    color: var(--color-inactive);
    font-size: 16px;
    font-weight: 400;
    border: none;
    background: none;
    cursor: pointer;

    &.active {
      font-weight: 700;
      color: var(--color-fg);
      border-bottom: 2px solid var(--color-fg);
    }
  }
}
</style>
