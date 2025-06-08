<script setup lang="ts">
import ButtonText from '@/component/ButtonText.vue';
import InputString from '@/component/InputString.vue';
import { useAuthStore } from '@/stores/auth.store';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const formData = ref<{ email?: string; password?: string }>({});
const authStore = useAuthStore();
const router = useRouter();

watch(
  () => authStore.getToken,
  () => {
    if (authStore.getToken) {
      router.push({
        name: 'main',
      });
    }
  },
);

const onSubmit = (e: Event) => {
  e.preventDefault();
  if (!formData.value.email || !formData.value.password) {
    return;
  }
  authStore.login(formData.value.email, formData.value.password);

  formData.value = {};
};
</script>
<template>
  <div class="auth-page">
    <div class="auth-page__wrapper">
      <h1 class="auth-page__title">Bookmarkly</h1>
      <form @submit="onSubmit" class="auth-page__form">
        <InputString name="email" placeholder="Email" v-model="formData.email" />
        <InputString
          name="password"
          placeholder="Пароль"
          type="password"
          v-model="formData.password"
        />
        <ButtonText type="submit">Вход</ButtonText>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth-page {
  display: grid;
  place-items: center;

  min-height: 100vh;

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 52px;
  }

  &__title {
    font-size: 52px;
    font-weight: 700;
    color: var(--color-fg);
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
}
</style>
