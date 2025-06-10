<script setup lang="ts">
import { useProfilestore } from '@/stores/profile.store';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const profilestore = useProfilestore();
const { profile } = storeToRefs(profilestore);

onMounted(() => {
  profilestore.fetchProfile();
});
</script>
<template>
  <p v-if="!profile">...загрузка</p>
  <div v-if="profile" class="profile-avatar">
    <img class="profile-avatar__image" src="/Avatar.png" alt="фото пользователя" />
    <div class="profile-avatar__name">
      Привет, <strong>{{ profile.name }}!</strong>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile-avatar {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__image {
    width: 80px;
    height: 80px;
  }

  &__name {
    font-size: 18px;
    font-weight: 400;
  }
}
</style>
