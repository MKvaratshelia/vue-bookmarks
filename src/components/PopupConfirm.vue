<script setup lang="ts">
import ButtonText from './ButtonText.vue';

const { isOpened = false, text } = defineProps<{
  isOpened: boolean;
  text: string;
}>();

const emit = defineEmits<{
  (e: 'ok'): void;
  (e: 'cancel'): void;
}>();
</script>
<template>
  <Transition name="fade">
    <Teleport to="body">
      <div class="popup" v-if="isOpened" @click="() => emit('cancel')">
        <div class="popup__content" @click.stop="">
          <p class="popup__text">{{ text }}</p>
          <div class="popup__buttons">
            <ButtonText @click="() => emit('ok')">Да</ButtonText>
            <ButtonText @click.stop="() => emit('cancel')">нет</ButtonText>
          </div>
        </div>
      </div>
    </Teleport>
  </Transition>
</template>

<style lang="scss" scoped>
.popup {
  background-color: var(--color-inactive);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    border-radius: 20px;
    padding: 20px;
    background-color: var(--color-bg);
    min-width: 300px;
  }

  &__text {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  &__buttons {
    display: flex;
    gap: 20px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
